mod config;
mod get_template_data;
mod interface_template_generator;

use config::Config;
use interface_template_generator::TemplateData;
use openapiv3::OpenAPI;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. 读取并解析 JSON5 配置文件
    let config_content = std::fs::read_to_string("openapi2ts.config.json5")?;
    let config: Config = json5::from_str(&config_content)?;
    println!("配置加载成功: {:?}", config);

    // 2. 根据配置获取 OpenAPI 规范（支持网络请求和本地文件）
    let openapi_spec: OpenAPI = config::get_openapi_spec(&config).await?;
    println!("当前 OpenAPI 版本: {:?}", openapi_spec.openapi);

    // 3. 将 OpenAPI 规范转换为模板数据列表
    let template_data_list = get_template_data::openapi_to_template_data_list(&openapi_spec)?;

    // 4. 构建完整的模板数据
    let template_data = TemplateData {
        namespace: "MyAPI".to_string(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 5. 生成 TypeScript 类型定义文件
    let rendered = interface_template_generator::generate_typescript_types(template_data)?;

    // 6. 将结果写入文件
    std::fs::write("types.d.ts", rendered)?;
    println!("\n✅ 结果已保存到 types.d.ts 文件");

    Ok(())
}
