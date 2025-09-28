use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

#[derive(Serialize, Deserialize, Debug)]
enum TypeTemplate {
    #[serde(rename = "interface")]
    Interface,
    #[serde(rename = "type")]
    Type,
    #[serde(rename = "enum")]
    Enum,
    /// 常量对象键类型提取模式
    #[serde(rename = "const_as_enum")]
    ConstAsEnum,
    #[serde(rename = "union")]
    Union,
}

/// 属性值
#[derive(Serialize, Deserialize, Debug)]
struct Property {
    name: Option<String>,
    #[serde(rename = "ref_path")]
    ref_path: Option<String>,
    #[serde(rename = "prop_type")]
    prop_type: String,
    required: bool,
    desc: Option<String>,
}

// 类型定义
#[derive(Serialize, Deserialize, Debug)]
struct TypeDefinition {
    // 类型名称
    #[serde(rename = "type_name")]
    type_name: String,
    // 类型的属性值
    props: Vec<Property>,
    // 类型的模板
    #[serde(rename = "type_template")]
    type_template: TypeTemplate,
    // 注释
    desc: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
struct TemplateData {
    namespace: String,
    declare_type: String,
    equal_symbol: Option<String>,
    nullable: bool,
    // 一个个类型
    list: Vec<TypeDefinition>,
    type_template: TypeTemplate,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let  tera = Tera::new("templates/**/*.tera")?;
    
    // 创建示例数据
    let template_data = TemplateData {
        namespace: "MyAPI".to_string(),
        declare_type: "interface".to_string(),
        nullable: true,
        equal_symbol: None,
        list: vec![
            TypeDefinition {
                type_name: "user".to_string(),
                type_template: TypeTemplate::Interface,
                desc: Some("用户角色".to_string()),
                props: vec![
                    Property {
                        name: Some("id".to_string()),
                        ref_path: None,
                        prop_type: "number".to_string(),
                        required: true,
                        desc: Some("用户唯一标识符".to_string()),
                    },
                    Property {
                        name: Some("name".to_string()),
                        ref_path: None,
                        prop_type: "string".to_string(),
                        required: true,
                        desc: Some("用户姓名".to_string()),
                    },
                    Property {
                        name: Some("email".to_string()),
                        ref_path: None,
                        prop_type: "string".to_string(),
                        required: false,
                        desc: Some("用户邮箱地址".to_string()),
                    },
                ],
            },
            TypeDefinition {
                type_name: "userRole2".to_string(),
                desc: Some("用户角色2".to_string()),
                type_template: TypeTemplate::ConstAsEnum,
                props: vec![
                    Property {
                        name: Some("success".to_string()),
                        ref_path: None,
                        prop_type: "boolean".to_string(),
                        required: true,
                        desc: Some("是否成功".to_string()),
                    },
                ],
            },
            TypeDefinition {
                type_name: "UserRole".to_string(),
                desc: Some("用户角色".to_string()),
                type_template: TypeTemplate::Enum,
                props: vec![
                    Property {
                        name: Some("success".to_string()),
                        ref_path: None,
                        prop_type: "boolean".to_string(),
                        required: true,
                        desc: Some("是否成功".to_string()),
                    },
                    Property {
                        name: Some("data".to_string()),
                        ref_path: Some("#/definitions/User".to_string()),
                        prop_type: "User".to_string(),
                        required: false,
                        desc: Some("响应数据".to_string()),
                    }],
            },
            TypeDefinition {
                type_name: "ApiResponse".to_string(),
                type_template: TypeTemplate::Interface,
                desc: Some("API响应".to_string()),
                props: vec![
                    Property {
                        name: Some("success".to_string()),
                        ref_path: None,
                        prop_type: "boolean".to_string(),
                        required: true,
                        desc: Some("是否成功".to_string()),
                    },
                    Property {
                        name: Some("data".to_string()),
                        ref_path: Some("#/definitions/User".to_string()),
                        prop_type: "User".to_string(),
                        required: false,
                        desc: Some("响应数据".to_string()),
                    },
                ],
            },
        ],
        type_template: TypeTemplate::Interface,
    };

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert("namespace", &template_data.namespace);
    context.insert("declareType", &template_data.declare_type);
    context.insert("equalSymbol", &template_data.equal_symbol);
    context.insert("nullable", &template_data.nullable);
    context.insert("list", &template_data.list);
    // context.insert("isEnum", &template_data.is_enum);
    context.insert("typeTemplate", &template_data.type_template);

    // 渲染模板
    let rendered = tera.render("interface.tera", &context)?;
    
    // 输出结果
    println!("生成的 TypeScript 接口定义：");
    println!("{}", rendered);
    
    // 将结果写入文件
    std::fs::write("types.d.ts", &rendered)?;
    println!("\n结果已保存到 types.d.ts 文件");

    Ok(())
}
