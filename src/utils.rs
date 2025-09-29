use crate::interface_template_generator::{
    Property, TypeDefinition, TypeScriptBasicType, /* TypeTemplate, */
};
use heck::ToPascalCase;
use openapiv3::{OpenAPI, ReferenceOr, Schema};

/// 验证属性名称是否符合TypeScript标识符规范
/// TypeScript标识符规则：
/// 1. 必须以字母、下划线(_)或美元符号($)开头
/// 2. 后续字符可以是字母、数字、下划线(_)或美元符号($)
/// 3. 不能是保留关键字
fn is_valid_typescript_identifier(name: &str) -> bool {
    if name.is_empty() {
        return false;
    }

    let chars: Vec<char> = name.chars().collect();

    // 检查第一个字符
    let first_char = chars[0];
    if !first_char.is_ascii_alphabetic() && first_char != '_' && first_char != '$' {
        return false;
    }

    // 检查后续字符
    for &ch in &chars[1..] {
        if !ch.is_ascii_alphanumeric() && ch != '_' && ch != '$' {
            return false;
        }
    }

    // 检查是否为保留关键字
    let reserved_keywords = [
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

    !reserved_keywords.contains(&name)
}

pub fn openapi_to_template_data_list(
    openapi_spec: &OpenAPI,
) -> Result<Vec<TypeDefinition>, Box<dyn std::error::Error>> {
    let mut type_definitions = Vec::new();

    // 从 OpenAPI 的 components.schemas 中提取components
    if let Some(components) = &openapi_spec.components {
        // schema_name 模型名称
        // schema_ref 模型值
        for (schema_name, schema_ref) in &components.schemas {
            let type_definition = convert_schema_to_type_definition(schema_name, schema_ref)?;
            type_definitions.push(type_definition);
        }
    }

    Ok(type_definitions)
}

// 处理对象类型
fn convert_schema_to_type_definition(
    schema_name: &str,
    schema_ref: &ReferenceOr<Schema>,
) -> Result<TypeDefinition, Box<dyn std::error::Error>> {
    let mut props = Vec::new();
    // let mut type_template = TypeTemplate::Interface;
    let mut type_value = TypeScriptBasicType::Any; // 默认类型
                                                   // 类型名称 - 提取并转换为 PascalCase
    let type_name = schema_name.split('.').last().unwrap().to_pascal_case();

    match schema_ref {
        // 内联定义
        ReferenceOr::Item(schema) => {
            match &schema.schema_kind {
                openapiv3::SchemaKind::Type(type_kind) => {
                    // 处理 schemas.[类型名称].type 的值
                    match type_kind {
                        openapiv3::Type::Object(object_type) => {
                            // 处理对象类型
                            type_value = TypeScriptBasicType::Object;
                            for (prop_name, prop_schema_ref) in &object_type.properties {
                                // 判断一下是否满足ts类型对于属性名称的规范，不满足就跳过不渲染对应的模版
                                if prop_name.is_empty()
                                    || !is_valid_typescript_identifier(prop_name)
                                {
                                    continue;
                                }
                                let property = convert_property(prop_name, prop_schema_ref)?;
                                props.push(property);
                            }
                        }
                        openapiv3::Type::String(string_type) => {
                            type_value = TypeScriptBasicType::String;
                            // 检查是否是枚举类型
                            if !string_type.enumeration.is_empty() {
                                // type_template = TypeTemplate::Union;
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
                                // type_template = TypeTemplate::Type;
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
                            type_value = TypeScriptBasicType::Number;
                            if !nteger_type.enumeration.is_empty() {
                                // type_template = TypeTemplate::Union;
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
                            type_value = TypeScriptBasicType::Number;
                            if !number_type.enumeration.is_empty() {
                                // type_template = TypeTemplate::Union;
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
                            type_value = TypeScriptBasicType::Boolean;
                            let property = Property {
                                name: None,
                                prop_type: "boolean".to_string(),
                                required: true,
                                desc: None,
                            };
                            props.push(property);
                        }
                        openapiv3::Type::Array(array_type) => {
                            type_value = TypeScriptBasicType::Array;
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
                                    prop_type: "any[]".to_string(),
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
                    type_value = TypeScriptBasicType::Any;
                    for (prop_name, prop_schema_ref) in &any_schema.properties {
                        if prop_name.is_empty() || !is_valid_typescript_identifier(prop_name) {
                            continue;
                        }
                        let property = convert_property(prop_name, prop_schema_ref)?;
                        props.push(property);
                    }
                }
                _ => {
                    // 处理其他类型
                    type_value = TypeScriptBasicType::Any;
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
            type_value = TypeScriptBasicType::Any; // 引用类型默认为Any
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
        type_kind: type_value,
        props,
        // type_template,
        object_type_template: crate::interface_template_generator::ObjectTypeTemplate::Interface,
        is_enum: false,
        enum_type_template: crate::interface_template_generator::EnumTypeTemplate::Enum,
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
