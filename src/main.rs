mod config;
mod generator_template;
mod path_to_service_controller_template_data;
mod schema_to_interface_template_data;
mod utles;

use config::Config;
use generator_template::interface_template_generator::TemplateData;
use openapiv3::OpenAPI;

use crate::generator_template::service_controller_template_generator::ServiceControllerTemplateData;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. 读取并解析 JSON5 配置文件
    let config_content = std::fs::read_to_string("openapi2ts.config.json5")?;
    let config: Config = json5::from_str(&config_content)?;
    println!("配置加载成功: {:?}", config);

    // 2. 根据配置获取 OpenAPI 规范 结构体（支持网络请求和本地文件）
    let openapi_spec: OpenAPI = config::get_openapi_spec(&config).await?;
    println!("当前 OpenAPI 版本: {:?}", openapi_spec.openapi);

    // 3. 将 OpenAPI 规范转换为模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec)?;

    let template_data = TemplateData {
        namespace: "MyAPI".to_string(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 4. 将 OpenAPI 规范转换为接口模板数据列表
    let interface_template_data_list =
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_list(
            &openapi_spec,
        )?;

    let service_controller_template_data = ServiceControllerTemplateData {
        namespace: "MyAPI".to_string(),
        gen_type: "ts".to_string(),
        request_import_statement: "import request, { RequestOptions } from '@/utils/request';"
            .to_string(),
        request_options_type: "RequestOptions".to_string(),
        list: interface_template_data_list,
    };

    let rendered = generator_template::service_controller_template_generator::generate_service_controller_typescript(service_controller_template_data)?;

    std::fs::write("service_controller.ts", rendered)?;
    println!("\n✅ 结果已保存到 service_controller.ts 文件");

    // 5. 生成 TypeScript 类型定义文件
    // let rendered =
    //     generator_template::interface_template_generator::generate_typescript_types(template_data)?;

    // 6. 将结果写入文件
    // std::fs::write("types.d.ts", rendered)?;
    // println!("\n✅ 结果已保存到 types.d.ts 文件");

    Ok(())
}
