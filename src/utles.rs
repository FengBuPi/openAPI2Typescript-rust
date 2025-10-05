use heck::ToPascalCase;
use openapiv3::{ReferenceOr, Schema};

/// 从引用路径中提取类型名称并转换为 PascalCase
///
/// # 功能说明
/// 从 OpenAPI 引用路径（如 "#/components/schemas/TypeName"）中提取类型名称，
/// 并转换为符合 TypeScript 命名规范的 PascalCase 格式。
///
/// # 参数
/// * `ref_path` - OpenAPI 引用路径
///
/// # 返回值
/// 转换后的 PascalCase 类型名称
///
/// # 示例
/// ```rust
/// assert_eq!(extract_type_name_from_ref("#/components/schemas/User"), "User");
/// assert_eq!(extract_type_name_from_ref("#/components/schemas/api.User"), "User");
/// assert_eq!(extract_type_name_from_ref("#/components/schemas/user_profile"), "UserProfile");
/// ```
pub fn extract_type_name_from_ref(ref_path: &str) -> String {
    // 从路径中提取最后一个部分作为类型名称
    let raw_type_name = ref_path.split('/').last().unwrap();

    // 如果包含点分割，则取最后一部分
    let final_name = if raw_type_name.contains('.') {
        raw_type_name.split('.').last().unwrap()
    } else {
        raw_type_name
    };

    // 转换为 PascalCase
    final_name.to_pascal_case()
}

// ============================================================================
// 对象类型转换函数
// ============================================================================

/// 将 OpenAPI 对象类型转换为 TypeScript 类型字符串
///
/// # 功能说明
/// 根据 OpenAPI 对象类型的 `additional_properties` 属性来决定生成的 TypeScript 类型：
/// - 如果 `additional_properties` 为 `true`：生成 `Record<string, any>`
/// - 如果 `additional_properties` 为 `false`：生成 `Record<string, never>`
/// - 如果 `additional_properties` 为具体的 Schema：递归处理该 Schema 类型
/// - 如果没有 `additional_properties`：默认为 `Record<string, any>`
///
/// # 参数
/// * `object_type` - OpenAPI 对象类型定义
///
/// # 返回值
/// * `Ok(String)` - 转换后的 TypeScript 类型字符串
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 类型映射规则
/// - `additional_properties: true` → `Record<string, any>`
/// - `additional_properties: false` → `Record<string, never>`
/// - `additional_properties: Schema` → `Record<string, SchemaType>`
/// - 无 `additional_properties` → `Record<string, any>`
pub fn convert_object_type_to_typescript(
    object_type: &openapiv3::ObjectType,
) -> Result<String, Box<dyn std::error::Error>> {
    match &object_type.additional_properties {
        Some(additional_properties) => {
            match additional_properties {
                // additional_properties: true - 允许任意属性，类型为 any
                openapiv3::AdditionalProperties::Any(true) => Ok("Record<string, any>".to_string()),
                // additional_properties: false - 不允许额外属性
                openapiv3::AdditionalProperties::Any(false) => {
                    Ok("Record<string, never>".to_string())
                }
                // additional_properties: Schema - 额外属性必须符合指定 Schema
                openapiv3::AdditionalProperties::Schema(schema_ref) => {
                    // schema_ref 是 Box<ReferenceOr<Schema>>，需要转换为 ReferenceOr<Box<Schema>>
                    let value_type = match schema_ref.as_ref() {
                        ReferenceOr::Item(schema) => get_typescript_type_string(
                            &ReferenceOr::Item(Box::new(schema.clone())),
                        )?,
                        ReferenceOr::Reference { reference } => {
                            get_typescript_type_string(&ReferenceOr::Reference {
                                reference: reference.clone(),
                            })?
                        }
                    };
                    Ok(format!("Record<string, {}>", value_type))
                }
            }
        }
        // 没有 additional_properties 定义，默认为允许任意属性
        None => Ok("Record<string, any>".to_string()),
    }
}

/// 递归处理 TypeScript 类型，支持嵌套数组、对象、引用
///
/// # 功能说明
/// 递归处理 OpenAPI Schema 引用，将其转换为对应的 TypeScript 类型字符串。
/// 支持嵌套数组类型的处理，直到找到最底层的元素类型。
///
/// # 参数
/// * `schema_ref` - OpenAPI Schema 引用
///
/// # 返回值
/// * `Ok(String)` - 转换后的 TypeScript 类型字符串
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 支持的类型映射
/// - String → "string"
/// - Number/Integer → "number"
/// - Boolean → "boolean"
/// - Array → "ElementType[]"
/// - Object → "Record<string, 具体类型或者any>"
/// - Reference → 提取的类型名称
/// - 其他 → "any"
pub fn get_typescript_type_string(
    schema_ref: &ReferenceOr<Box<Schema>>,
) -> Result<String, Box<dyn std::error::Error>> {
    match schema_ref {
        ReferenceOr::Item(schema) => {
            match &schema.schema_kind {
                openapiv3::SchemaKind::Type(type_kind) => {
                    match type_kind {
                        openapiv3::Type::String(_) => Ok("string".to_string()),
                        openapiv3::Type::Number(_) => Ok("number".to_string()),
                        openapiv3::Type::Integer(_) => Ok("number".to_string()),
                        openapiv3::Type::Boolean(_) => Ok("boolean".to_string()),
                        openapiv3::Type::Array(array_type) => {
                            // 递归处理数组元素类型
                            if let Some(items) = &array_type.items {
                                let item_type = get_typescript_type_string(items)?;
                                Ok(format!("{}[]", item_type))
                            } else {
                                Ok("any[]".to_string())
                            }
                        }
                        openapiv3::Type::Object(object_type) => {
                            convert_object_type_to_typescript(object_type)
                        }
                    }
                }
                openapiv3::SchemaKind::AllOf { all_of } => {
                    let types = all_of
                        .iter()
                        .map(|item| match item {
                            ReferenceOr::Item(schema_ref) => get_typescript_type_string(
                                &ReferenceOr::Item(Box::new(schema_ref.clone())),
                            ),
                            ReferenceOr::Reference { reference } => {
                                Ok(extract_type_name_from_ref(reference.as_str()))
                            }
                        })
                        .collect::<Result<Vec<String>, _>>()?;
                    Ok(types.join(" & "))
                }
                openapiv3::SchemaKind::AnyOf { any_of } => {
                    let types = any_of
                        .iter()
                        .map(|item| match item.clone() {
                            ReferenceOr::Item(schema_ref) => get_typescript_type_string(
                                &ReferenceOr::Item(Box::new(schema_ref.clone())),
                            ),
                            ReferenceOr::Reference { reference } => {
                                Ok(extract_type_name_from_ref(reference.as_str()))
                            }
                        })
                        .collect::<Result<Vec<String>, _>>()?;
                    Ok(types.join(" & "))
                }
                openapiv3::SchemaKind::OneOf { one_of } => {
                    let types = one_of
                        .iter()
                        .map(|item| match item.clone() {
                            ReferenceOr::Item(schema_ref) => get_typescript_type_string(
                                &ReferenceOr::Item(Box::new(schema_ref.clone())),
                            ),
                            ReferenceOr::Reference { reference } => {
                                Ok(extract_type_name_from_ref(reference.as_str()))
                            }
                        })
                        .collect::<Result<Vec<String>, _>>()?;
                    Ok(types.join(" | "))
                }
                _ => Ok("any".to_string()),
            }
        }
        ReferenceOr::Reference { reference } => Ok(extract_type_name_from_ref(reference)),
    }
}
