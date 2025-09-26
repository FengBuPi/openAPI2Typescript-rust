use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

#[derive(Serialize, Deserialize, Debug)]
struct Property {
    name: Option<String>,
    #[serde(rename = "$ref")]
    ref_path: Option<String>,
    #[serde(rename = "type")]
    prop_type: String,
    required: bool,
    desc: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
struct TypeDefinition {
    #[serde(rename = "typeName")]
    type_name: String,
    #[serde(rename = "type")]
    type_type: Option<String>,
    props: Vec<Property>,
    #[serde(rename = "isEnum")]
    is_enum: bool,
}

#[derive(Serialize, Deserialize, Debug)]
struct TemplateData {
    namespace: String,
    declare_type: String,
    equal_symbol: Option<String>,
    nullable: bool,
    list: Vec<TypeDefinition>,
    is_enum: bool,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let mut tera = Tera::new("templates/**/*.tera")?;
    
    // 创建示例数据
    let template_data = TemplateData {
        namespace: "MyAPI".to_string(),
        declare_type: "interface".to_string(),
        nullable: true,
        equal_symbol: None,
        list: vec![
            TypeDefinition {
                type_name: "User".to_string(),
                type_type: None,
                is_enum: false,
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
                type_name: "UserRole".to_string(),
                type_type: Some("'admin' | 'user' | 'guest'".to_string()),
                is_enum: true,
                props: vec![],
            },
            TypeDefinition {
                type_name: "ApiResponse".to_string(),
                type_type: None,
                is_enum: false,
                props: vec![
                    Property {
                        name: Some("success".to_string()),
                        ref_path: None,
                        prop_type: "boolean".to_string(),
                        required: true,
                        desc: None,
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
        is_enum: false,
    };

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert("namespace", &template_data.namespace);
    context.insert("declareType", &template_data.declare_type);
    context.insert("equalSymbol", &template_data.equal_symbol);
    context.insert("nullable", &template_data.nullable);
    context.insert("list", &template_data.list);
    context.insert("isEnum", &template_data.is_enum);

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
