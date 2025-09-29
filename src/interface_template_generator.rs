use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

/// TypeScript数据类型枚举
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
pub enum TypeScriptBasicType {
    /// 字符串类型
    #[serde(rename = "string")]
    String,
    /// 数字类型
    #[serde(rename = "number")]
    Number,
    /// 布尔类型
    #[serde(rename = "boolean")]
    Boolean,
    /// 任意类型
    #[serde(rename = "any")]
    Any,
    /// 空类型
    #[serde(rename = "null")]
    Null,
    /// 未定义类型
    #[serde(rename = "undefined")]
    Undefined,
    /// 对象类型
    #[serde(rename = "object")]
    Object,
    /// 数组类型
    #[serde(rename = "array")]
    Array,
    /// 未知类型
    #[serde(rename = "unknown")]
    Unknown,
    /// 从不类型
    #[serde(rename = "never")]
    Never,
    /// 空类型
    #[serde(rename = "void")]
    Void,
}

#[derive(Serialize, Deserialize, Debug)]
pub enum ObjectTypeTemplate {
    #[serde(rename = "interface")]
    Interface,
    #[serde(rename = "type")]
    Type,
    #[serde(rename = "enum")]
    Enum,
}

#[derive(Serialize, Deserialize, Debug)]
pub enum EnumTypeTemplate {
    #[serde(rename = "enum")]
    Enum,
    /// 常量对象键类型提取模式
    ///  const {{ type.type_name  }}: {
    ///     readonly {{ prop.name }}: "{{ prop.name }}",
    /// };
    /// type {{ type.type_name  }} = keyof typeof {{ type.type_name  }};
    #[serde(rename = "const_as_enum")]
    ConstAsEnum,
    /// 联合类型
    #[serde(rename = "union")]
    Union,
}

/// 属性值
#[derive(Serialize, Deserialize, Debug)]
pub struct Property {
    // 只有对象类型才有名字
    pub name: Option<String>,
    #[serde(rename = "prop_type")]
    pub prop_type: String,
    pub required: bool,
    pub desc: Option<String>,
}

// 类型定义
#[derive(Serialize, Deserialize, Debug)]
pub struct TypeDefinition {
    /// 类型名称
    pub type_name: String,
    /// 数据类型
    pub type_kind: TypeScriptBasicType,
    /// 对象类型
    /// 如果长度为空，则表示该类型是简单类型，否则表示该类型是对象类型
    pub props: Vec<Property>,
    /// 对象类型的模板
    pub object_type_template: ObjectTypeTemplate,
    /// 是否是枚举
    pub is_enum: bool,
    /// 枚举类型的模版
    pub enum_type_template: EnumTypeTemplate,
    /// 注释
    pub desc: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct TemplateData {
    pub namespace: String,
    pub declare_type: String,
    pub equal_symbol: Option<String>,
    pub nullable: bool,
    // 一个个类型
    pub list: Vec<TypeDefinition>,
}

pub fn generate_typescript_types() -> Result<String, Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let tera = Tera::new("templates/**/*.tera")?;

    // 创建示例数据
    let template_data = TemplateData {
        namespace: "MyAPI".to_string(),
        declare_type: "interface".to_string(),
        nullable: true,
        equal_symbol: None,
        list: vec![
            // 1. 对象类型 - Interface
            TypeDefinition {
                type_name: "User".to_string(),
                type_kind: TypeScriptBasicType::Object,
                object_type_template: ObjectTypeTemplate::Interface,
                is_enum: false,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("用户信息".to_string()),
                props: vec![
                    Property {
                        name: Some("id".to_string()),
                        prop_type: "number".to_string(),
                        required: true,
                        desc: Some("用户唯一标识符".to_string()),
                    },
                    Property {
                        name: Some("name".to_string()),
                        prop_type: "string".to_string(),
                        required: true,
                        desc: Some("用户姓名".to_string()),
                    },
                    Property {
                        name: Some("email".to_string()),
                        prop_type: "string".to_string(),
                        required: false,
                        desc: Some("用户邮箱地址".to_string()),
                    },
                ],
            },
            // 2. 对象类型 - Type
            TypeDefinition {
                type_name: "Config".to_string(),
                type_kind: TypeScriptBasicType::Object,
                object_type_template: ObjectTypeTemplate::Type,
                is_enum: false,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("配置对象".to_string()),
                props: vec![
                    Property {
                        name: Some("debug".to_string()),
                        prop_type: "boolean".to_string(),
                        required: true,
                        desc: Some("调试模式".to_string()),
                    },
                    Property {
                        name: Some("timeout".to_string()),
                        prop_type: "number".to_string(),
                        required: true,
                        desc: Some("超时时间".to_string()),
                    },
                ],
            },
            // 3. 枚举类型 - 字符串枚举
            TypeDefinition {
                type_name: "Status".to_string(),
                type_kind: TypeScriptBasicType::String,
                object_type_template: ObjectTypeTemplate::Interface,
                is_enum: true,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("状态枚举".to_string()),
                props: vec![
                    Property {
                        name: Some("PENDING".to_string()),
                        prop_type: "pending".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: Some("SUCCESS".to_string()),
                        prop_type: "success".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: Some("FAILED".to_string()),
                        prop_type: "failed".to_string(),
                        required: true,
                        desc: None,
                    },
                ],
            },
            // 4. 枚举类型 - 数字枚举
            TypeDefinition {
                type_name: "Priority".to_string(),
                type_kind: TypeScriptBasicType::Number,
                object_type_template: ObjectTypeTemplate::Interface,
                is_enum: true,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("优先级枚举".to_string()),
                props: vec![
                    Property {
                        name: Some("LOW".to_string()),
                        prop_type: "1".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: Some("MEDIUM".to_string()),
                        prop_type: "2".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: Some("HIGH".to_string()),
                        prop_type: "3".to_string(),
                        required: true,
                        desc: None,
                    },
                ],
            },
            // 5. 枚举类型 - 常量对象键类型提取模式
            TypeDefinition {
                type_name: "Theme".to_string(),
                type_kind: TypeScriptBasicType::String,
                object_type_template: ObjectTypeTemplate::Interface,
                is_enum: true,
                enum_type_template: EnumTypeTemplate::ConstAsEnum,
                desc: Some("主题常量".to_string()),
                props: vec![
                    Property {
                        name: Some("LIGHT".to_string()),
                        prop_type: "light".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: Some("DARK".to_string()),
                        prop_type: "dark".to_string(),
                        required: true,
                        desc: None,
                    },
                ],
            },
            // 6. 枚举类型 - 联合类型
            TypeDefinition {
                type_name: "Language".to_string(),
                type_kind: TypeScriptBasicType::String,
                object_type_template: ObjectTypeTemplate::Type,
                is_enum: true,
                enum_type_template: EnumTypeTemplate::Union,
                desc: Some("语言联合类型".to_string()),
                props: vec![
                    Property {
                        name: None,
                        prop_type: "zh-CN".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: None,
                        prop_type: "en-US".to_string(),
                        required: true,
                        desc: None,
                    },
                    Property {
                        name: None,
                        prop_type: "ja-JP".to_string(),
                        required: true,
                        desc: None,
                    },
                ],
            },
            // 7. 基本数据类型 - 字符串
            TypeDefinition {
                type_name: "ApiKey".to_string(),
                type_kind: TypeScriptBasicType::String,
                object_type_template: ObjectTypeTemplate::Type,
                is_enum: false,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("API密钥类型".to_string()),
                props: vec![],
            },
            // 8. 基本数据类型 - 数字
            TypeDefinition {
                type_name: "UserId".to_string(),
                type_kind: TypeScriptBasicType::Number,
                object_type_template: ObjectTypeTemplate::Type,
                is_enum: false,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("用户ID类型".to_string()),
                props: vec![],
            },
            // 9. 基本数据类型 - 布尔
            TypeDefinition {
                type_name: "IsActive".to_string(),
                type_kind: TypeScriptBasicType::Boolean,
                object_type_template: ObjectTypeTemplate::Type,
                is_enum: false,
                enum_type_template: EnumTypeTemplate::Enum,
                desc: Some("激活状态类型".to_string()),
                props: vec![],
            },
        ],
    };

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert("namespace", &template_data.namespace);
    context.insert("declareType", &template_data.declare_type);
    context.insert("equalSymbol", &template_data.equal_symbol);
    context.insert("nullable", &template_data.nullable);
    context.insert("list", &template_data.list);

    // 渲染模板
    let rendered = tera.render("interface.tera", &context)?;

    Ok(rendered)
}
