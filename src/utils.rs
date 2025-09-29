use crate::interface_template_generator::{Property, TypeDefinition, TypeTemplate};
use heck::{ToLowerCamelCase, ToPascalCase};
use openapiv3::{OpenAPI, ReferenceOr, Schema};

pub fn openapi_to_template_data_list(
    openapi_spec: &OpenAPI,
) -> Result<Vec<TypeDefinition>, Box<dyn std::error::Error>> {
    let mut type_definitions = Vec::new();

    // 从 OpenAPI 的 components.schemas 中提取类型定义
    if let Some(components) = &openapi_spec.components {
        for (schema_name, schema_ref) in &components.schemas {
            let type_definition = convert_schema_to_type_definition(schema_name, schema_ref)?;
            type_definitions.push(type_definition);
        }
    }

    Ok(type_definitions)
}

// 处理整个类型单位
fn convert_schema_to_type_definition(
    schema_name: &str,
    schema_ref: &ReferenceOr<Schema>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();
    let mut type_template = TypeTemplate::Interface;
    // 类型名称 - 提取并转换为 PascalCase
    let type_name = schema_name.split('.').last().unwrap().to_pascal_case();

    match schema_ref {
        // 内联定义
        ReferenceOr::Item(schema) => {
            match &schema.schema_kind {
                openapiv3::SchemaKind::Type(type_kind) => {
                    // todo: 此处是根据type_kind来判断类型，但是有可能后端定义enum，收缩了需要传递的数据
                    // 其实应该先判断是否存在enum值，然后在根据type_kind来判断类型
                    // 处理 schemas.[类型名称].type 的值
                    match type_kind {
                        openapiv3::Type::Object(object_type) => {
                            // 处理对象类型
                            for (prop_name, prop_schema_ref) in &object_type.properties {
                                let prop_name = prop_name.to_lower_camel_case();
                                let property = convert_property(&prop_name, prop_schema_ref)?;
                                props.push(property);
                            }
                        }
                        openapiv3::Type::String(string_type) => {
                            // 检查是否是枚举类型
                            if !string_type.enumeration.is_empty() {
                                type_template = TypeTemplate::Union;
                                for (_index, enum_value) in
                                    string_type.enumeration.iter().enumerate()
                                {
                                    let property = Property {
                                        name: None,
                                        prop_type: enum_value.clone().unwrap(),
                                        required: true,
                                        desc: None,
                                    };
                                    props.push(property);
                                }
                            } else {
                                let property = Property {
                                    name: None,
                                    prop_type: "string".to_string(),
                                    required: true,
                                    desc: None,
                                };
                                props.push(property);
                            }
                        }
                        openapiv3::Type::Integer(nteger_type) => {
                            if !nteger_type.enumeration.is_empty() {
                                type_template = TypeTemplate::Union;
                                for (_index, enum_value) in
                                    nteger_type.enumeration.iter().enumerate()
                                {
                                    let property = Property {
                                        name: None,
                                        prop_type: enum_value.unwrap().to_string(),
                                        required: true,
                                        desc: None,
                                    };
                                    props.push(property);
                                }
                            } else {
                                let property = Property {
                                    name: None,
                                    prop_type: "number".to_string(),
                                    required: true,
                                    desc: None,
                                };
                                props.push(property);
                            }
                        }
                        openapiv3::Type::Number(number_type) => {
                            if !number_type.enumeration.is_empty() {
                                type_template = TypeTemplate::Union;
                                for (_index, enum_value) in
                                    number_type.enumeration.iter().enumerate()
                                {
                                    let property = Property {
                                        name: None,
                                        prop_type: enum_value.unwrap().to_string(),
                                        required: true,
                                        desc: None,
                                    };
                                    props.push(property);
                                }
                            } else {
                                let property = Property {
                                    name: None,
                                    prop_type: "number".to_string(),
                                    required: true,
                                    desc: None,
                                };
                                props.push(property);
                            }
                        }
                        openapiv3::Type::Boolean(_) => {
                            let property = Property {
                                name: None,
                                prop_type: "boolean".to_string(),
                                required: true,
                                desc: None,
                            };
                            props.push(property);
                        }
                        openapiv3::Type::Array(array_type) => {
                            if let Some(items) = &array_type.items {
                                match items {
                                    ReferenceOr::Item(schema) => {
                                        let property = convert_property(
                                            schema_name,
                                            &ReferenceOr::Item(schema.clone()),
                                        )?;
                                        props.push(property);
                                    }
                                    ReferenceOr::Reference { reference } => {
                                        let property = Property {
                                            name: None,
                                            prop_type: format!(
                                                "{}[]",
                                                extract_type_name_from_ref(reference.as_str())
                                            ),
                                            required: true,
                                            desc: None,
                                        };
                                        props.push(property);
                                    }
                                }
                            } else {
                                let property = Property {
                                    name: None,
                                    prop_type: "any333[]".to_string(),
                                    required: true,
                                    desc: None,
                                };
                                props.push(property);
                            }
                        }
                    }
                }
                openapiv3::SchemaKind::Any(any_schema) => {
                    // 处理 AnySchema
                    for (prop_name, prop_schema_ref) in &any_schema.properties {
                        let property = convert_property(prop_name, prop_schema_ref)?;
                        props.push(property);
                    }
                }
                _ => {
                    // 处理其他类型
                    let property = Property {
                        name: None,
                        prop_type: "any".to_string(),
                        required: true,
                        desc: None,
                    };
                    props.push(property);
                }
            }
        }
        // 引用定义
        ReferenceOr::Reference { reference } => {
            // 处理引用类型
            let property = Property {
                name: None,
                prop_type: extract_type_name_from_ref(reference),
                required: true,
                desc: None,
            };
            props.push(property);
        }
    }

    Ok(TypeDefinition {
        type_name,
        props,
        type_template,
        desc: None,
    })
}

/// 处理 schema.[类型名称].properties.[属性名称:prop_name]的值:prop_schema_ref
/// 返回属性名称、属性类型、是否必需、描述
fn convert_property(
    prop_name: &str,
    prop_schema_ref: &ReferenceOr<Box<Schema>>,
) -> Result<Property, Box<dyn std::error::Error>> {
    let (prop_type, _ref_path) = match prop_schema_ref {
        ReferenceOr::Item(schema) => match &schema.schema_kind {
            openapiv3::SchemaKind::Type(type_kind) => {
                let ts_type = match type_kind {
                    openapiv3::Type::String(_) => "string".to_string(),
                    openapiv3::Type::Number(_) => "number".to_string(),
                    openapiv3::Type::Integer(_) => "number".to_string(),
                    openapiv3::Type::Boolean(_) => "boolean".to_string(),
                    openapiv3::Type::Array(array_type) => {
                        // 处理数组类型，获取数组元素的类型
                        if let Some(items) = &array_type.items {
                            match items {
                                ReferenceOr::Item(item_schema) => {
                                    // 如果是内联定义，递归处理
                                    match &item_schema.schema_kind {
                                        openapiv3::SchemaKind::Type(item_type_kind) => {
                                            let item_type = match item_type_kind {
                                                openapiv3::Type::String(_) => "string",
                                                openapiv3::Type::Number(_) => "number",
                                                openapiv3::Type::Integer(_) => "number",
                                                openapiv3::Type::Boolean(_) => "boolean",
                                                openapiv3::Type::Array(_) => "any[]",
                                                openapiv3::Type::Object(_) => "Record<string, any>",
                                            };
                                            format!("{}[]", item_type)
                                        }
                                        _ => "any[]".to_string(),
                                    }
                                }
                                ReferenceOr::Reference { reference } => {
                                    // 如果是引用，提取类型名称
                                    format!("{}[]", extract_type_name_from_ref(reference))
                                }
                            }
                        } else {
                            "any[]".to_string()
                        }
                    }
                    openapiv3::Type::Object(_) => "Record<string, any>".to_string(),
                };
                (ts_type, None)
            }
            _ => ("any".to_string(), None),
        },
        ReferenceOr::Reference { reference } => (
            extract_type_name_from_ref(reference),
            Some(reference.clone()),
        ),
    };

    Ok(Property {
        name: Some(prop_name.to_string()),
        prop_type,
        required: true, // 简化处理，假设所有属性都是必需的
        desc: None,
    })
}

/// 从 "#/components/schemas/TypeName" 中提取 "TypeName" 并转换为 PascalCase
fn extract_type_name_from_ref(ref_path: &str) -> String {
    let raw_type_name = ref_path.split('/').last().unwrap();
    // 如果中间有点分割，则去掉
    let final_name = if raw_type_name.contains('.') {
        raw_type_name.split('.').last().unwrap()
    } else {
        raw_type_name
    };
    final_name.to_pascal_case()
}
