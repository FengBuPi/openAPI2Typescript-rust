mod interface_template_generator;
mod utils;

// use interface_template_generator::{TemplateData, TypeTemplate};
use openapiv3::OpenAPI;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 解析 openapi.json 文件
    // let openapi_content = std::fs::read_to_string("openapi.json")?;
    // let _openapi_spec: OpenAPI = serde_json::from_str(&openapi_content)?;
    // println!("当前openapi版本: {:?}", _openapi_spec.openapi);

    // // OpenAPI to TemplateData.list
    // let template_data_list = utils::openapi_to_template_data_list(&_openapi_spec)?;

    // // 把 openapi3.0 规范转化成 ts类型定义模版数据
    // let template_data = TemplateData {
    //     namespace: "MyAPI".to_string(),
    //     declare_type: "interface".to_string(),
    //     nullable: true,
    //     equal_symbol: None,
    //     list: template_data_list,
    //     type_template: TypeTemplate::Interface,
    // };

    // 生成 TypeScript 类型定义文件
    let rendered = interface_template_generator::generate_typescript_types()?;

    // 输出结果
    println!("生成的 TypeScript 接口定义：");
    // println!("{}", rendered);

    // 将结果写入文件
    std::fs::write("types.d.ts", rendered)?;
    println!("\n结果已保存到 types.d.ts 文件");
    Ok(())
}
