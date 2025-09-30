use crate::interface_template_generator::{
    BasicType, EnumTypeTemplate, EnumValue, ObjectTypeTemplate, Property, TypeDefinition,
};
use heck::ToPascalCase;
use openapiv3::{OpenAPI, ReferenceOr, Schema};

// ============================================================================
// 常量定义
// ============================================================================

/// TypeScript 保留关键字列表
/// 这些关键字不能用作标识符名称
const TYPESCRIPT_RESERVED_KEYWORDS: &[&str] = &[
    // 基础关键字
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    // ES6+ 关键字
    "as",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield",
    // TypeScript 类型关键字
    "any",
    "boolean",
    "constructor",
    "declare",
    "get",
    "module",
    "require",
    "number",
    "set",
    "string",
    "symbol",
    "type",
    "from",
    "of",
];

// ============================================================================
// 工具函数
// ============================================================================

/// 验证属性名称是否符合 TypeScript 标识符规范
///
/// # 规则说明
/// 1. 必须以字母、下划线(_)或美元符号($)开头
/// 2. 后续字符可以是字母、数字、下划线(_)或美元符号($)
/// 3. 不能是 TypeScript 保留关键字
/// 4. 不能为空字符串
///
/// # 参数
/// * `name` - 待验证的标识符名称
///
/// # 返回值
/// * `true` - 符合 TypeScript 标识符规范
/// * `false` - 不符合规范
///
/// # 示例
/// ```rust
/// assert!(is_valid_typescript_identifier("userName"));
/// assert!(is_valid_typescript_identifier("_private"));
/// assert!(is_valid_typescript_identifier("$global"));
/// assert!(!is_valid_typescript_identifier("123abc"));
/// assert!(!is_valid_typescript_identifier("class"));
/// assert!(!is_valid_typescript_identifier(""));
/// ```
fn is_valid_typescript_identifier(name: &str) -> bool {
    // 检查是否为空
    if name.is_empty() {
        return false;
    }

    let chars: Vec<char> = name.chars().collect();

    // 检查第一个字符：必须是字母、下划线或美元符号
    let first_char = chars[0];
    if !first_char.is_ascii_alphabetic() && first_char != '_' && first_char != '$' {
        return false;
    }

    // 检查后续字符：必须是字母、数字、下划线或美元符号
    for &ch in &chars[1..] {
        if !ch.is_ascii_alphanumeric() && ch != '_' && ch != '$' {
            return false;
        }
    }

    // 检查是否为保留关键字
    !TYPESCRIPT_RESERVED_KEYWORDS.contains(&name)
}

/// 为枚举值生成合适的 TypeScript 标识符名称
///
/// 此函数将 OpenAPI 规范中的枚举值转换为符合 TypeScript 标识符规则的名称，
/// 用于生成 TypeScript 枚举的键名。
///
/// # 转换规则
///
/// 1. **字符转换**：所有字母数字字符转换为大写
/// 2. **特殊字符处理**：非字母数字字符（如 `-`, ` `, `.`, `@` 等）替换为下划线 `_`
/// 3. **标识符验证**：确保生成的名称以字母开头，如果不是则添加 `VALUE_` 前缀
///
/// # 参数
///
/// * `value` - OpenAPI 规范中的原始枚举值（字符串形式）
///
/// # 返回值
///
/// 返回符合 TypeScript 标识符规则的名称字符串
///
/// # 示例
///
/// ```rust
/// assert_eq!(generate_enum_name("pending"), "PENDING");
/// assert_eq!(generate_enum_name("in-progress"), "IN_PROGRESS");
/// assert_eq!(generate_enum_name("on hold"), "ON_HOLD");
/// assert_eq!(generate_enum_name("123abc"), "VALUE_123ABC");
/// assert_eq!(generate_enum_name("@special"), "VALUE__SPECIAL");
/// assert_eq!(generate_enum_name(""), "VALUE_");
/// ```
///
/// # 使用场景
///
/// 在将 OpenAPI 枚举转换为 TypeScript 枚举时使用，确保生成的枚举键名：
/// - 符合 TypeScript 标识符语法规则
/// - 具有良好的可读性
/// - 避免命名冲突
/// - 保持一致性
fn generate_enum_name(value: &str) -> String {
    // 将值转换为大写，替换特殊字符为下划线
    let name = value
        .chars()
        .map(|c| {
            if c.is_alphanumeric() {
                c.to_uppercase().next().unwrap()
            } else {
                '_'
            }
        })
        .collect::<String>();

    // 确保名称以字母开头
    if name.chars().next().map_or(false, |c| !c.is_alphabetic()) {
        format!("VALUE_{}", name)
    } else {
        name
    }
}

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
fn extract_type_name_from_ref(ref_path: &str) -> String {
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
// 主要转换函数
// ============================================================================

/// 将 OpenAPI 规范转换为模板数据列表
///
/// # 功能说明
/// 从 OpenAPI 3.0 规范中提取所有组件模式（schemas），并将它们转换为
/// 用于生成 TypeScript 类型定义的模板数据。
///
/// # 参数
/// * `openapi_spec` - OpenAPI 3.0 规范对象
///
/// # 返回值
/// * `Ok(Vec<TypeDefinition>)` - 成功转换的类型定义列表
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 处理流程
/// 1. 遍历 OpenAPI 规范中的 `components.schemas`
/// 2. 将每个 schema 转换为对应的 TypeDefinition
/// 3. 收集所有转换结果并返回
pub fn openapi_to_template_data_list(
    openapi_spec: &OpenAPI,
) -> Result<Vec<TypeDefinition>, Box<dyn std::error::Error>> {
    let mut type_definitions = Vec::new();

    // 从 OpenAPI 的 components.schemas 中提取所有模式定义
    if let Some(components) = &openapi_spec.components {
        for (schema_name, schema_ref) in &components.schemas {
            // 将每个 schema 转换为 TypeDefinition
            let type_definition = convert_schema_to_type_definition(schema_name, schema_ref)?;
            type_definitions.push(type_definition);
        }
    }

    Ok(type_definitions)
}

/// 将 OpenAPI Schema 转换为 TypeDefinition
///
/// # 功能说明
/// 根据 OpenAPI Schema 的类型和结构，将其转换为对应的 TypeScript 类型定义。
/// 支持对象、枚举、基本类型等多种 OpenAPI Schema 类型。
///
/// # 参数
/// * `schema_name` - Schema 的名称
/// * `schema_ref` - OpenAPI Schema 引用或内联定义
///
/// # 返回值
/// * `Ok(TypeDefinition)` - 转换后的类型定义
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 支持的类型转换
/// - Object → TypeDefinition::Object (Interface)
/// - String/Integer/Number with enumeration → TypeDefinition::Enum
/// - String/Integer/Number/Boolean → TypeDefinition::Basic
/// - Array → TypeDefinition::Object (Interface with items)
/// - AnySchema → TypeDefinition::Object (Interface)
/// - Reference → TypeDefinition::Basic (Any)
fn convert_schema_to_type_definition(
    schema_name: &str,
    schema_ref: &ReferenceOr<Schema>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    // 生成类型名称（PascalCase 格式）
    let type_name = schema_name.split('.').last().unwrap().to_pascal_case();

    let type_definition = match schema_ref {
        // 处理内联定义的 Schema
        ReferenceOr::Item(schema) => {
            match &schema.schema_kind {
                openapiv3::SchemaKind::Type(type_kind) => {
                    convert_typed_schema(&type_name, type_kind, &schema.schema_data.description)
                }
                openapiv3::SchemaKind::Any(any_schema) => {
                    convert_any_schema(&type_name, any_schema)
                }
                _ => {
                    // 处理其他未知类型，默认为 Any 类型
                    Ok(TypeDefinition::Basic {
                        type_name,
                        desc: schema.schema_data.description.clone(),
                        basic_type: BasicType::Any,
                    })
                }
            }
        }
        // 处理引用类型
        ReferenceOr::Reference { reference: _ } => Ok(TypeDefinition::Basic {
            type_name,
            desc: None,
            basic_type: BasicType::Any,
        }),
    };

    type_definition
}

// ============================================================================
// 具体类型转换函数
// ============================================================================

/// 转换有类型定义的 Schema
///
/// # 参数
/// * `type_name` - 类型名称
/// * `type_kind` - OpenAPI 类型定义
/// * `description` - Schema 描述
///
/// # 返回值
/// 转换后的 TypeDefinition
fn convert_typed_schema(
    type_name: &str,
    type_kind: &openapiv3::Type,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    match type_kind {
        // 对象类型转换
        openapiv3::Type::Object(object_type) => {
            convert_object_type(type_name, object_type, description)
        }
        // 字符串类型转换
        openapiv3::Type::String(string_type) => {
            convert_string_type(type_name, string_type, description)
        }
        // 整数类型转换
        openapiv3::Type::Integer(integer_type) => {
            convert_integer_type(type_name, integer_type, description)
        }
        // 数字类型转换
        openapiv3::Type::Number(number_type) => {
            convert_number_type(type_name, number_type, description)
        }
        // 布尔类型转换
        openapiv3::Type::Boolean(_) => Ok(TypeDefinition::Basic {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::Boolean,
        }),
        // 数组类型转换
        openapiv3::Type::Array(array_type) => {
            convert_array_type(type_name, array_type, description)
        }
    }
}

/// 转换对象类型
fn convert_object_type(
    type_name: &str,
    object_type: &openapiv3::ObjectType,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();

    // 处理对象属性
    for (prop_name, prop_schema_ref) in &object_type.properties {
        // 验证属性名称是否符合 TypeScript 规范
        if prop_name.is_empty() || !is_valid_typescript_identifier(prop_name) {
            continue;
        }

        let is_required = object_type.required.contains(prop_name);

        let property = convert_property(prop_name, prop_schema_ref, is_required)?;
        props.push(property);
    }

    Ok(TypeDefinition::Object {
        type_name: type_name.to_string(),
        desc: description.clone(),
        props,
        object_type_template: ObjectTypeTemplate::Interface,
    })
}

/// 转换字符串类型
fn convert_string_type(
    type_name: &str,
    string_type: &openapiv3::StringType,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    // 检查是否为枚举类型
    if !string_type.enumeration.is_empty() {
        let values = convert_enum_values(&string_type.enumeration)?;
        Ok(TypeDefinition::Enum {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::String,
            values,
            enum_type_template: EnumTypeTemplate::Union,
        })
    } else {
        Ok(TypeDefinition::Basic {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::String,
        })
    }
}

/// 转换整数类型
fn convert_integer_type(
    type_name: &str,
    integer_type: &openapiv3::IntegerType,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    // 检查是否为枚举类型
    if !integer_type.enumeration.is_empty() {
        let values = convert_integer_enum_values(&integer_type.enumeration)?;
        Ok(TypeDefinition::Enum {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::Number,
            values,
            enum_type_template: EnumTypeTemplate::Union,
        })
    } else {
        Ok(TypeDefinition::Basic {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::Number,
        })
    }
}

/// 转换数字类型
fn convert_number_type(
    type_name: &str,
    number_type: &openapiv3::NumberType,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    // 检查是否为枚举类型
    if !number_type.enumeration.is_empty() {
        let values = convert_number_enum_values(&number_type.enumeration)?;
        Ok(TypeDefinition::Enum {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::Number,
            values,
            enum_type_template: EnumTypeTemplate::Union,
        })
    } else {
        Ok(TypeDefinition::Basic {
            type_name: type_name.to_string(),
            desc: description.clone(),
            basic_type: BasicType::Number,
        })
    }
}

/// 转换数组类型
fn convert_array_type(
    type_name: &str,
    array_type: &openapiv3::ArrayType,
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();

    if let Some(items) = &array_type.items {
        match items {
            ReferenceOr::Item(schema) => {
                let property =
                    convert_property(type_name, &ReferenceOr::Item(schema.clone()), false)?;
                props.push(property);
            }
            ReferenceOr::Reference { reference } => {
                // 引用类型
                let property = Property {
                    name: "items".to_string(),
                    prop_type: format!("{}[]", extract_type_name_from_ref(reference.as_str())),
                    required: true,
                    desc: None,
                };
                props.push(property);
            }
        }
    } else {
        // 没有指定元素类型，默认为 any[]
        let property = Property {
            name: "items".to_string(),
            prop_type: "any[]".to_string(),
            required: true,
            desc: None,
        };
        props.push(property);
    }

    Ok(TypeDefinition::Object {
        type_name: type_name.to_string(),
        desc: description.clone(),
        props,
        object_type_template: ObjectTypeTemplate::Interface,
    })
}

/// 转换 AnySchema 类型
fn convert_any_schema(
    type_name: &str,
    any_schema: &openapiv3::AnySchema,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();

    // 处理 AnySchema 的属性
    for (prop_name, prop_schema_ref) in &any_schema.properties {
        if prop_name.is_empty() || !is_valid_typescript_identifier(prop_name) {
            continue;
        }
        let property = convert_property(prop_name, prop_schema_ref, false)?;
        props.push(property);
    }

    Ok(TypeDefinition::Object {
        type_name: type_name.to_string(),
        desc: None, // AnySchema 没有 description 字段
        props,
        object_type_template: ObjectTypeTemplate::Interface,
    })
}

// ============================================================================
// 枚举值转换函数
// ============================================================================

/// 转换字符串枚举值
fn convert_enum_values(
    enumeration: &[Option<String>],
) -> Result<Vec<EnumValue>, Box<dyn std::error::Error>> {
    let mut values = Vec::new();

    for enum_value in enumeration {
        if let Some(value) = enum_value {
            // todo: 以后的新功能：当用户设置生成enum模式时使用这种方式
            // let enum_name = generate_enum_name(value);
            values.push(EnumValue {
                name: None,
                value: value.clone(),
                desc: None,
            });
        }
    }

    Ok(values)
}

/// 转换整数枚举值
fn convert_integer_enum_values(
    enumeration: &[Option<i64>],
) -> Result<Vec<EnumValue>, Box<dyn std::error::Error>> {
    let mut values = Vec::new();

    for enum_value in enumeration {
        if let Some(value) = enum_value {
            let value_str = value.to_string();
            // todo: 以后的新功能：当用户设置生成enum模式时使用这种方式
            // let enum_name = generate_enum_name(&value_str);
            values.push(EnumValue {
                name: None,
                value: value_str,
                desc: None,
            });
        }
    }

    Ok(values)
}

/// 转换数字枚举值
fn convert_number_enum_values(
    enumeration: &[Option<f64>],
) -> Result<Vec<EnumValue>, Box<dyn std::error::Error>> {
    let mut values = Vec::new();

    for enum_value in enumeration {
        if let Some(value) = enum_value {
            let value_str = value.to_string();
            // todo: 以后的新功能：当用户设置生成enum模式时使用这种方式，把enum_name给下面的name
            // let enum_name = generate_enum_name(&value_str);
            values.push(EnumValue {
                name: None,
                value: value_str,
                desc: None,
            });
        }
    }

    Ok(values)
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
fn convert_object_type_to_typescript(
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
                        ReferenceOr::Item(schema) => get_typescript_type_recursive(
                            &ReferenceOr::Item(Box::new(schema.clone())),
                        )?,
                        ReferenceOr::Reference { reference } => {
                            get_typescript_type_recursive(&ReferenceOr::Reference {
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

// ============================================================================
// 属性转换函数
// ============================================================================

/// 递归获取 TypeScript 类型，支持嵌套数组
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
fn get_typescript_type_recursive(
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
                                let item_type = get_typescript_type_recursive(items)?;
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
                _ => Ok("any".to_string()),
            }
        }
        ReferenceOr::Reference { reference } => Ok(extract_type_name_from_ref(reference)),
    }
}

/// 生成属性定义
///
/// # 功能说明
/// 将 OpenAPI Schema 属性转换为 TypeScript 属性定义。
/// 处理属性名称、类型、必需性和描述信息。
///
/// # 参数
/// * `prop_name` - 属性名称
/// * `prop_schema_ref` - 属性对应的 Schema 引用
///
/// # 返回值
/// * `Ok(Property)` - 转换后的属性定义
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 注意事项
/// - 属性描述从 Schema 中提取
fn convert_property(
    prop_name: &str,
    prop_schema_ref: &ReferenceOr<Box<Schema>>,
    is_required: bool,
) -> Result<Property, Box<dyn std::error::Error>> {
    let name = prop_name.to_string();
    // 使用递归函数获取最终的 TypeScript 非对象类型
    let prop_type = get_typescript_type_recursive(prop_schema_ref)?;

    // 提取 description
    let desc = match prop_schema_ref {
        ReferenceOr::Item(schema) => schema.schema_data.description.clone(),
        ReferenceOr::Reference { .. } => None,
    };

    Ok(Property {
        name,
        prop_type,
        required: is_required,
        desc,
    })
}
