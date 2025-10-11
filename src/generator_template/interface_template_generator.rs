use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

/// 属性值 - 只用于对象类型
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Property {
    pub key: String,
    pub value: String,
    pub is_required: bool,
    pub desc: Option<String>,
}

/// 枚举值 - 只用于枚举类型
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct EnumValue {
    /// 使用联合类型模版时，会忽略key
    pub key: Option<String>,
    pub value: String,
    pub desc: Option<String>,
}

/// 对象类型的模板
#[derive(Serialize, Deserialize, Debug)]
pub enum ObjectTypeTemplate {
    #[serde(rename = "interface")]
    Interface,
    #[serde(rename = "type")]
    Type,
}

/// 枚举类型的模板
#[derive(Serialize, Deserialize, Debug)]
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
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
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
#[derive(Serialize, Deserialize, Debug)]
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

#[derive(Serialize, Deserialize, Debug)]
pub struct TemplateData {
    pub namespace: String,
    pub declare_type: String,
    pub list: Vec<TypeDefinition>,
}

pub fn generate_typescript_types(
    template_data: TemplateData,
) -> Result<(), Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let tera = Tera::new("templates/**/*.tera")?;

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert("namespace", &template_data.namespace);
    context.insert("list", &template_data.list);

    // 渲染模板
    let rendered = tera.render("interface.tera", &context)?;
    std::fs::write("types.d.ts", rendered)?;
    println!("\n✅ 结果已保存到 types.d.ts 文件");
    Ok(())
}

mod tests {
    use openapiv3::OpenAPI;

    use crate::schema_to_interface_template_data;

    use super::*;

    #[test]
    fn test_generate_typescript_types() -> Result<(), Box<dyn std::error::Error>> {
        // 创建示例数据
        // let template_data = TemplateData {
        //     namespace: "MyAPI".to_string(),
        //     declare_type: "interface".to_string(),
        //     list: vec![
        //         // 1. 对象类型 - Interface
        //         TypeDefinition::Object {
        //             type_name: "User".to_string(),
        //             desc: Some("用户信息".to_string()),
        //             object_type_template: ObjectTypeTemplate::Interface,
        //             props: vec![
        //                 Property {
        //                     key: "id".to_string(),
        //                     value: "number".to_string(),
        //                     is_required: true,
        //                     desc: Some("用户唯一标识符".to_string()),
        //                 },
        //                 Property {
        //                     key: "name".to_string(),
        //                     value: "string".to_string(),
        //                     is_required: true,
        //                     desc: Some("用户姓名".to_string()),
        //                 },
        //                 Property {
        //                     key: "email".to_string(),
        //                     value: "string".to_string(),
        //                     is_required: false,
        //                     desc: Some("用户邮箱地址".to_string()),
        //                 },
        //             ],
        //         },
        //         // 2. 对象类型 - Type
        //         TypeDefinition::Object {
        //             type_name: "Config".to_string(),
        //             desc: Some("配置对象".to_string()),
        //             object_type_template: ObjectTypeTemplate::Type,
        //             props: vec![
        //                 Property {
        //                     key: "debug".to_string(),
        //                     value: "boolean".to_string(),
        //                     is_required: true,
        //                     desc: Some("调试模式".to_string()),
        //                 },
        //                 Property {
        //                     key: "timeout".to_string(),
        //                     value: "number".to_string(),
        //                     is_required: true,
        //                     desc: Some("超时时间".to_string()),
        //                 },
        //             ],
        //         },
        //         // 3. 枚举类型 - 字符串枚举
        //         TypeDefinition::Enum {
        //             type_name: "Status".to_string(),
        //             desc: Some("状态枚举".to_string()),
        //             basic_type: BasicType::String,
        //             enum_type_template: EnumTypeTemplate::Enum,
        //             values: vec![
        //                 EnumValue {
        //                     key: Some("PENDING".to_string()),
        //                     value: "pending".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: Some("SUCCESS".to_string()),
        //                     value: "success".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: Some("FAILED".to_string()),
        //                     value: "failed".to_string(),
        //                     desc: None,
        //                 },
        //             ],
        //         },
        //         // 4. 枚举类型 - 数字枚举
        //         TypeDefinition::Enum {
        //             type_name: "Priority".to_string(),
        //             desc: Some("优先级枚举".to_string()),
        //             basic_type: BasicType::Number,
        //             enum_type_template: EnumTypeTemplate::Enum,
        //             values: vec![
        //                 EnumValue {
        //                     key: Some("LOW".to_string()),
        //                     value: "1".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: Some("MEDIUM".to_string()),
        //                     value: "2".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: Some("HIGH".to_string()),
        //                     value: "3".to_string(),
        //                     desc: None,
        //                 },
        //             ],
        //         },
        //         // 5. 枚举类型 - 常量对象键类型提取模式
        //         TypeDefinition::Enum {
        //             type_name: "Theme".to_string(),
        //             desc: Some("主题常量".to_string()),
        //             basic_type: BasicType::String,
        //             enum_type_template: EnumTypeTemplate::ConstAsEnum,
        //             values: vec![
        //                 EnumValue {
        //                     key: Some("LIGHT".to_string()),
        //                     value: "light".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: Some("DARK".to_string()),
        //                     value: "dark".to_string(),
        //                     desc: None,
        //                 },
        //             ],
        //         },
        //         // 6. 枚举类型 - 联合类型
        //         TypeDefinition::Enum {
        //             type_name: "Language".to_string(),
        //             desc: Some("语言联合类型".to_string()),
        //             basic_type: BasicType::String,
        //             enum_type_template: EnumTypeTemplate::Union,
        //             values: vec![
        //                 EnumValue {
        //                     key: None,
        //                     value: "zh-CN".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: None,
        //                     value: "en-US".to_string(),
        //                     desc: None,
        //                 },
        //                 EnumValue {
        //                     key: None,
        //                     value: "ja-JP".to_string(),
        //                     desc: None,
        //                 },
        //             ],
        //         },
        //         // 7. 基本数据类型 - 字符串
        //         TypeDefinition::Basic {
        //             type_name: "ApiKey".to_string(),
        //             desc: Some("API密钥类型".to_string()),
        //             basic_type: BasicType::String,
        //         },
        //         // 8. 基本数据类型 - 数字
        //         TypeDefinition::Basic {
        //             type_name: "UserId".to_string(),
        //             desc: Some("用户ID类型".to_string()),
        //             basic_type: BasicType::Number,
        //         },
        //         // 9. 基本数据类型 - 布尔
        //         TypeDefinition::Basic {
        //             type_name: "IsActive".to_string(),
        //             desc: Some("激活状态类型".to_string()),
        //             basic_type: BasicType::Boolean,
        //         },
        //     ],
        // };

        // 本地文件测试
        let openapi_spec: OpenAPI =
            serde_json::from_str(&std::fs::read_to_string("openapi.json")?)?;

        let template_data_list =
            schema_to_interface_template_data::openapi_to_interface_template_data_list(
                &openapi_spec,
            )?;

        let template_data = TemplateData {
            namespace: "MyAPI".to_string(),
            declare_type: "interface".to_string(),
            list: template_data_list,
        };

        generate_typescript_types(template_data)?;
        Ok(())
    }
}
