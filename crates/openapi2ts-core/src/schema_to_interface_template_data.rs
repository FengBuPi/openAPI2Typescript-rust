use crate::generator_template::interface_template_generator::{
    BasicType, EnumTypeTemplate, EnumValue, ObjectTypeTemplate, Property, TypeDefinition,
};
use crate::utles::{
    extract_type_name_from_ref, get_typescript_type_string, is_valid_typescript_identifier,
};
use indexmap::IndexMap;
use openapiv3::{OpenAPI, ReferenceOr, Schema};

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
/// * `openapi` - OpenAPI 3.0 规范对象
///
/// # 返回值
/// * `Ok(Vec<TypeDefinition>)` - 成功转换的类型定义列表
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
///
/// # 处理流程
/// 1. 遍历 OpenAPI 规范中的 `components.schemas`
/// 2. 将每个 schema 转换为对应的 TypeDefinition
/// 3. 按照类型名称排序, 防止生成顺序不一致导致的git diff问题
/// 4. 收集所有转换结果并返回
pub fn openapi_to_interface_template_data_list(
    openapi: &OpenAPI,
) -> Result<Vec<TypeDefinition>, Box<dyn std::error::Error>> {
    let mut type_definitions = Vec::new();

    // 从 OpenAPI.components.schemas 中提取所有模式定义
    if let Some(components) = &openapi.components {
        for (schema_name, schema_ref) in &components.schemas {
            // 将每个 schema 转换为 TypeDefinition
            let type_definition = convert_schema_to_type_definition(schema_name, schema_ref)?;
            type_definitions.push(type_definition);
        }
    }
    // 按照类型名称排序, 防止生成顺序不一致导致的git diff问题
    type_definitions.sort_by(|a, b| a.type_name().cmp(b.type_name()));
    Ok(type_definitions)
}

/// 处理 OpenAPI.components.schemas[schema]
///
/// # 功能说明
/// 根据 OpenAPI Schema 的类型和结构，将其转换为对应的 TypeScript 类型定义。
/// 支持对象、枚举、基本类型等多种 OpenAPI Schema 类型。
///
/// # 参数
/// * `schema_key` - Schema 的Key
/// * `schema_value`  - Schema 的Value
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
    schema_key: &str,
    schema_value: &ReferenceOr<Schema>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    // 生成类型名称（PascalCase 格式）
    let type_name = extract_type_name_from_ref(schema_key);

    match schema_value {
        // 处理内联定义的 Schema
        ReferenceOr::Item(schema) => {
            let description = schema.schema_data.description.clone();
            // schema_value 的 schema_kind 才决定了 一个 schema 最终的ts类型形态
            match &schema.schema_kind {
                // 转换成ts 基本数据类型
                openapiv3::SchemaKind::Type(type_kind) => {
                    convert_typed_schema(&type_name, type_kind, &schema.schema_data.description)
                }
                // 转换成ts联合类型
                // {
                //   "oneOf": [
                //     { "type": "string" },
                //     { "type": "number" }
                //   ],
                //   "description": "可能是字符串或数字"
                // }
                // => string | number
                // todo: 未实现，现在是直接匹配为any
                openapiv3::SchemaKind::OneOf { one_of: _ }  => {
                            Ok(TypeDefinition::Basic {
                                type_name,
                                desc: description,
                                basic_type: BasicType::Any,
                            })
                }
                // 转换成ts交叉类型
                // {
                //   "anyOf": [
                //     { "type": "string", "minLength": 1 },
                //     { "type": "string", "format": "uuid" }
                //   ]
                // }
                // => string | number
                // todo: 未实现，现在是直接匹配为any
                openapiv3::SchemaKind::AnyOf { any_of: _ } => {
                    Ok(TypeDefinition::Basic {
                        type_name,
                        desc: description,
                        basic_type: BasicType::Any,
                    })
                }
                // 转换成ts交叉类型
                // {
                //   "allOf": [
                //     { "$ref": "#/components/schemas/BaseUser" },
                //     {
                //       "type": "object",
                //       "properties": {
                //         "role": { "type": "string" }
                //       },
                //       "required": ["role"]
                //     }
                //   ]
                // }
                // => BaseUser & { role: string }
                // todo: 未实现，现在是直接匹配为any
                openapiv3::SchemaKind::AllOf { all_of: _ } => {
                    Ok(TypeDefinition::Basic {
                        type_name,
                        desc: description,
                        basic_type: BasicType::Any,
                    })
                }
                // 转换成ts any类型
                openapiv3::SchemaKind::Not { not: _ } => {
                    Ok(TypeDefinition::Basic {
                        type_name,
                        desc: description,
                        basic_type: BasicType::Any,
                    })
                }
                // 转换成ts interface
                openapiv3::SchemaKind::Any(any_schema) => {
                    convert_object_type(
                        &type_name,
                        &any_schema.properties,
                        &any_schema.required,
                        &description,
                    )
                }
            }
        }
        // 处理引用类型, 直接舍弃为 Any 类型
        ReferenceOr::Reference { reference: _ } => Ok(TypeDefinition::Basic {
            type_name,
            desc: None,
            basic_type: BasicType::Any,
        }),
    }
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
            convert_object_type(type_name, &object_type.properties, &object_type.required, description)
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
    properties: &IndexMap<String, ReferenceOr<Box<Schema>>>,
    required: &[String],
    description: &Option<String>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();

    // 处理对象属性
    for (prop_name, prop_schema_ref) in properties {
        // 空 key 直接跳过
        if prop_name.is_empty() {
            continue;
        }

        let is_required = required.contains(prop_name);

        let property = convert_property(prop_name.as_str(), prop_schema_ref, is_required)?;
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
                    key: "items".to_string(),
                    value: format!("{}[]", extract_type_name_from_ref(reference.as_str())),
                    is_required: true,
                    desc: None,
                    needs_quotes: false,
                };
                props.push(property);
            }
        }
    } else {
        // 没有指定元素类型，默认为 any[]
        let property = Property {
            key: "items".to_string(),
            value: "any[]".to_string(),
            is_required: true,
            desc: None,
            needs_quotes: false,
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
                key: None,
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
                key: None,
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
                key: None,
                value: value_str,
                desc: None,
            });
        }
    }

    Ok(values)
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
    let key = prop_name.to_string();
    let needs_quotes = !is_valid_typescript_identifier(prop_name);
    // 使用递归函数获取最终的 TypeScript 非对象类型
    let value = get_typescript_type_string(prop_schema_ref)?;

    // 提取 description
    let desc = match prop_schema_ref {
        ReferenceOr::Item(schema) => schema.schema_data.description.clone(),
        ReferenceOr::Reference { .. } => None,
    };

    Ok(Property {
        key,
        value,
        is_required,
        desc,
        needs_quotes,
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    fn parse_openapi(json: &str) -> OpenAPI {
        serde_json::from_str(json).expect("invalid openapi json")
    }

    #[test]
    fn test_object_required_and_optional_properties() {
        let openapi = parse_openapi(
            r#"{
              "openapi": "3.0.0",
              "info": { "title": "t", "version": "1" },
              "paths": {},
              "components": {
                "schemas": {
                  "User": {
                    "type": "object",
                    "required": ["id"],
                    "properties": {
                      "id": { "type": "string" },
                      "name": { "type": "string" }
                    }
                  }
                }
              }
            }"#,
        );

        let list = openapi_to_interface_template_data_list(&openapi).unwrap();
        assert_eq!(list.len(), 1);

        match &list[0] {
            TypeDefinition::Object { type_name, props, .. } => {
                assert_eq!(type_name, "User");
                let id = props.iter().find(|p| p.key == "id").unwrap();
                let name = props.iter().find(|p| p.key == "name").unwrap();
                assert!(id.is_required);
                assert!(!name.is_required);
            }
            _ => panic!("expected object type definition"),
        }
    }

    #[test]
    fn test_string_enum_becomes_enum_typedef_union() {
        let openapi = parse_openapi(
            r#"{
              "openapi": "3.0.0",
              "info": { "title": "t", "version": "1" },
              "paths": {},
              "components": {
                "schemas": {
                  "Status": {
                    "type": "string",
                    "enum": ["ON", "OFF"]
                  }
                }
              }
            }"#,
        );

        let list = openapi_to_interface_template_data_list(&openapi).unwrap();
        assert_eq!(list.len(), 1);

        match &list[0] {
            TypeDefinition::Enum {
                type_name,
                basic_type,
                values,
                enum_type_template,
                ..
            } => {
                assert_eq!(type_name, "Status");
                assert_eq!(basic_type, &BasicType::String);
                assert_eq!(values.len(), 2);
                assert_eq!(values[0].value, "ON");
                assert_eq!(values[1].value, "OFF");
                match enum_type_template {
                    EnumTypeTemplate::Union => {}
                    _ => panic!("expected union enum template"),
                }
            }
            _ => panic!("expected enum type definition"),
        }
    }

    #[test]
    fn test_filters_invalid_and_reserved_property_names() {
        let openapi = parse_openapi(
            r#"{
              "openapi": "3.0.0",
              "info": { "title": "t", "version": "1" },
              "paths": {},
              "components": {
                "schemas": {
                  "Obj": {
                    "type": "object",
                    "properties": {
                      "class": { "type": "string" },
                      "123abc": { "type": "string" },
                      "ok": { "type": "string" }
                    }
                  }
                }
              }
            }"#,
        );

        let list = openapi_to_interface_template_data_list(&openapi).unwrap();
        match &list[0] {
            TypeDefinition::Object { props, .. } => {
                assert!(props.iter().all(|p| p.key != "class"));
                assert!(props.iter().all(|p| p.key != "123abc"));
                assert!(props.iter().any(|p| p.key == "ok"));
            }
            _ => panic!("expected object type definition"),
        }
    }
}
