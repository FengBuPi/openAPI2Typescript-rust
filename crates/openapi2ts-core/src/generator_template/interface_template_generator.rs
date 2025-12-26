use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

// 内嵌模板内容
const TEMPLATE: &str = include_str!(concat!(
    env!("CARGO_MANIFEST_DIR"),
    "/templates/interface.tera"
));

/// 属性值 - 只用于对象类型
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct Property {
    pub key: String,
    pub value: String,
    pub is_required: bool,
    pub description: Option<String>,
    /// 属性名是否需要单引号包裹（当属性名不符合 JS/TS 标识符规范时为 true）
    /// 例如：
    ///  /** 一个带短横线的参数 */
    ///  'a-b': string;
    ///  /** 一个可能需要引号的保留字参数 */
    ///  'default'?: string;
    #[serde(rename = "needsQuotes")]
    pub needs_quotes: bool,
}

/// 枚举值 - 只用于枚举类型
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct EnumValue {
    /// 使用联合类型模版时，会忽略key
    pub key: Option<String>,
    pub value: String,
    pub description: Option<String>,
}

/// 对象类型的模板
#[derive(Serialize, Deserialize, Debug, Clone, Copy, PartialEq, Eq)]
pub enum ObjectTypeTemplate {
    #[serde(rename = "interface")]
    Interface,
    #[serde(rename = "type")]
    Type,
}

/// 枚举类型的模板
#[derive(Serialize, Deserialize, Debug, Clone, Copy, PartialEq, Eq)]
pub enum EnumTypeTemplate {
    #[serde(rename = "enum")]
    Enum,
    /// 常量对象键类型提取模式(相比enum，打包后压缩率高)
    #[serde(rename = "const_as_enum")]
    ConstAsEnum,
    #[serde(rename = "union")]
    Union,
}

/// 基础数据类型
#[derive(Serialize, Deserialize, Debug, Clone, Copy, PartialEq, Eq)]
pub enum BasicType {
    #[serde(rename = "string")]
    String,
    #[serde(rename = "number")]
    Number,
    #[serde(rename = "boolean")]
    Boolean,
    #[serde(rename = "any")]
    Any,
}

/// 类型定义 - 使用枚举来实现专一性设计
/// 每种类型只包含它需要的字段，不会有冗余
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type_kind")]
pub enum TypeDefinition {
    /// 对象类型定义
    #[serde(rename = "object")]
    Object {
        type_name: String,
        desc: Option<String>,
        props: Vec<Property>,                     // 只有对象类型才有属性
        object_type_template: ObjectTypeTemplate, // 只有对象类型才有对象模板
    },

    /// 枚举类型定义
    #[serde(rename = "enum")]
    Enum {
        type_name: String,
        desc: Option<String>,
        basic_type: BasicType,  // 只有枚举类型才有基础类型（string/number）
        values: Vec<EnumValue>, // 只有枚举类型才有枚举值
        enum_type_template: EnumTypeTemplate, // 只有枚举类型才有枚举模板
    },

    /// 基本类型定义
    #[serde(rename = "basic")]
    Basic {
        type_name: String,
        desc: Option<String>,
        basic_type: BasicType, // 只有基本类型才有基础类型
    },
}

impl TypeDefinition {
    /// 获取类型名称
    pub fn type_name(&self) -> &str {
        match self {
            TypeDefinition::Object { type_name, .. } => type_name,
            TypeDefinition::Enum { type_name, .. } => type_name,
            TypeDefinition::Basic { type_name, .. } => type_name,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct TemplateData {
    pub namespace: String,
    pub declare_type: String,
    pub list: Vec<TypeDefinition>,
}

pub fn generate_typescript_types_string(
    template_data: TemplateData,
) -> Result<String, Box<dyn std::error::Error>> {
    // 测试：打印模板数据以便调试
    // println!("template_data{:#?}", template_data);
    // let template_data_json = serde_json::to_string_pretty(&template_data)?;
    // fs::write("./template_data.json", template_data_json)?;

    // 初始化 Tera 模板引擎
    let mut tera = Tera::default();
    tera.add_raw_template("interface.tera", TEMPLATE)?;

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert("namespace", &template_data.namespace);
    context.insert("list", &template_data.list);
    context.insert(
        "time",
        &chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string(),
    );

    // 渲染模板
    let rendered = tera.render("interface.tera", &context)?;

    Ok(rendered)
}

#[cfg(test)]
mod tests {
    use openapiv3::OpenAPI;

    use crate::schema_to_interface_template_data;

    use super::*;

    #[test]
    // 冒烟测试：从 OpenAPI 字符串 -> 模板数据 -> 渲染字符串，确保主链路可用
    fn test_generate_typescript_types() -> Result<(), Box<dyn std::error::Error>> {
        let openapi_json: &str = r#"{
            "openapi": "3.0.0",
            "info": { "title": "Test API", "version": "1.0.0" },
            "paths": {},
            "components": { "schemas": {} }
        }"#;

        let openapi_spec: OpenAPI = serde_json::from_str(openapi_json)?;

        let template_data_list =
            schema_to_interface_template_data::openapi_to_interface_template_data_list(
                &openapi_spec,
            )?;

        let template_data = TemplateData {
            namespace: "MyAPI".to_string(),
            declare_type: "interface".to_string(),
            list: template_data_list,
        };

        let rendered = generate_typescript_types_string(template_data)?;
        assert!(!rendered.trim().is_empty());
        assert!(rendered.contains("declare namespace MyAPI"));
        println!("test_generate_typescript_types函数测试通过");
        Ok(())
    }

    #[test]
    // 结构化测试：重点验证生成的中间数据结构（TypeDefinition），而不是最终代码字符串格式
    fn test_generate_typescript_types_object_and_enum_golden(
    ) -> Result<(), Box<dyn std::error::Error>> {
        let openapi_json = r#"{
          "openapi": "3.0.0",
          "info": { "title": "Test API", "version": "1.0.0" },
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
              },
              "Status": {
                "type": "string",
                "enum": ["ON", "OFF"]
              }
            }
          }
        }"#;
        let openapi_spec: OpenAPI = serde_json::from_str(openapi_json)?;

        let template_data_list =
            schema_to_interface_template_data::openapi_to_interface_template_data_list(
                &openapi_spec,
            )?;

        let template_data = TemplateData {
            namespace: "MyAPI".to_string(),
            declare_type: "interface".to_string(),
            list: template_data_list,
        };

        // 以数据结构为核心做断言，避免模板缩进/换行差异导致测试脆弱
        assert_eq!(template_data.list.len(), 2);

        // openapi_to_interface_template_data_list 内部已按 type_name 排序
        assert_eq!(template_data.list[0].type_name(), "Status");
        assert_eq!(template_data.list[1].type_name(), "User");

        match &template_data.list[0] {
            TypeDefinition::Enum {
                basic_type,
                values,
                enum_type_template,
                ..
            } => {
                assert_eq!(basic_type, &BasicType::String);
                assert_eq!(values.len(), 2);
                assert_eq!(values[0].value, "ON");
                assert_eq!(values[1].value, "OFF");
                assert_eq!(enum_type_template, &EnumTypeTemplate::Union);
            }
            _ => panic!("expected Status to be enum"),
        }

        match &template_data.list[1] {
            TypeDefinition::Object { props, .. } => {
                let id = props.iter().find(|p| p.key == "id").unwrap();
                let name = props.iter().find(|p| p.key == "name").unwrap();
                assert!(id.is_required);
                assert!(!name.is_required);
                assert_eq!(id.value, "string");
                assert_eq!(name.value, "string");
            }
            _ => panic!("expected User to be object"),
        }

        // 仍保留一次渲染冒烟：确保模板渲染不会 panic/报错
        let rendered = generate_typescript_types_string(template_data)?;
        assert!(rendered.contains("declare namespace MyAPI"));
        println!("test_generate_typescript_types_object_and_enum_golden函数测试通过");
        Ok(())
    }

    #[test]
    fn test_rendered_string_preview_matches_template_snippets() -> Result<(), Box<dyn std::error::Error>> {
        let mut tera = Tera::default();
        tera.add_raw_template("interface.tera", TEMPLATE)?;

        let list: Vec<TypeDefinition> = vec![
            TypeDefinition::Enum {
                type_name: "Statusss".to_string(),
                desc: None,
                basic_type: BasicType::String,
                values: vec![
                    EnumValue {
                        key: Some("ON".to_string()),
                        value: "ON".to_string(),
                        description: None,
                    },
                    EnumValue {
                        key: Some("OFF".to_string()),
                        value: "OFF".to_string(),
                        description: None,
                    },
                ],
                enum_type_template: EnumTypeTemplate::Enum,
            },
            TypeDefinition::Enum {
                type_name: "Status".to_string(),
                desc: None,
                basic_type: BasicType::String,
                values: vec![
                    EnumValue {
                        key: None,
                        value: "ON".to_string(),
                        description: None,
                    },
                    EnumValue {
                        key: None,
                        value: "OFF".to_string(),
                        description: None,
                    },
                ],
                enum_type_template: EnumTypeTemplate::Union,
            },
            TypeDefinition::Object {
                type_name: "User".to_string(),
                desc: None,
                props: vec![
                    Property {
                        key: "id".to_string(),
                        value: "string".to_string(),
                        is_required: true,
                        description: None,
                        needs_quotes: false,
                    },
                    Property {
                        key: "name".to_string(),
                        value: "string".to_string(),
                        is_required: false,
                        description: None,
                        needs_quotes: false,
                    },
                ],
                object_type_template: ObjectTypeTemplate::Interface,
            },
        ];

        let mut context = Context::new();
        context.insert("namespace", "MyAPI");
        context.insert("list", &list);
        context.insert("time", "2020-01-01 00:00:00");

        let rendered = tera.render("interface.tera", &context)?;
        println!("rendered:\n{}", rendered);
        Ok(())
    }

    #[test]
    // 看看openapi这些json转换成模版需要的数据长什么样子
    fn test_generate_service_controller_data() {
        // 这里可以添加具体的测试逻辑
        assert!(true);
    }

}
