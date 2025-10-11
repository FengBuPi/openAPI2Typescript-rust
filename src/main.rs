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

    // 3. 将 OpenAPI 规范转换为类型模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec)?;

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    generator_template::interface_template_generator::generate_typescript_types(template_data)?;

    // 4. 将 OpenAPI 规范转换为接口模板数据列表
    let interface_template_data_list =
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_list(
            &openapi_spec,
        )?;

    let service_controller_template_data = ServiceControllerTemplateData {
        namespace: config.namespace.clone(),
        gen_type: "ts".to_string(),
        request_import_statement: "import request, { RequestOptions } from '@/utils/request';"
            .to_string(),
        request_options_type: "RequestOptions".to_string(),
        list: interface_template_data_list,
    };

    generator_template::service_controller_template_generator::generate_service_controller_typescript(service_controller_template_data)?;

    Ok(())
}
