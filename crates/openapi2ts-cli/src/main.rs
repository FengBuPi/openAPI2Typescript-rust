use chrono::Local;
use openapi2ts_core::{
    Config, TemplateData, ServiceIndexTemplateData,
    generator_template, path_to_service_controller_template_data,
    path_to_service_index_template_data, schema_to_interface_template_data,
};
use openapiv3::OpenAPI;

// 根据用配置中的 schema_path 判断如何获取 openapi.json 文件
// 1. 网络请求获取 (仅在非 WASM 环境中支持)
// 2. 本地文件获取
pub async fn get_openapi_spec(config: &Config) -> Result<OpenAPI, Box<dyn std::error::Error>> {
    if config.schema_path.starts_with("http") {
            let response = reqwest::get(&config.schema_path).await?;
            let openapi_spec: OpenAPI = response.json().await?;
            Ok(openapi_spec)
    } else {
        let openapi_spec: OpenAPI =
            serde_json::from_str(&std::fs::read_to_string(&config.schema_path)?)?;
        Ok(openapi_spec)
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. 读取并解析 JSON5 配置文件
    let config_content = std::fs::read_to_string("openapi2ts.config.json5")?;
    let config: Config = json5::from_str(&config_content)?;
    println!("配置加载成功: {:?}", config);

    // 2. 根据配置获取 OpenAPI 规范 结构体（支持网络请求和本地文件）
    let openapi_spec: openapiv3::OpenAPI = get_openapi_spec(&config).await?;
    println!("当前 OpenAPI 版本: {:?}", openapi_spec.openapi);

    // 3. 将 OpenAPI 规范转换为类型模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec)?;

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 确保输出目录存在
    std::fs::create_dir_all(&config.servers_path)?;
    
    // 生成类型定义文件到配置的目录
    let types_file_path = format!("{}/types.d.ts", config.servers_path);
    generator_template::interface_template_generator::generate_typescript_types(&types_file_path, template_data)?;

    // 4. 将 OpenAPI 规范转换为接口模板数据列表
    let service_controller_template_data_group_list = 
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
            &openapi_spec, 
            &config.request_lib_path,
            &config.namespace, 
            "ts", 
            "RequestOptions"
        )?;
    
    for (tag, service_controller_template_data) in service_controller_template_data_group_list {
        let file_path = format!("{}/{}.ts", config.servers_path, tag);
        generator_template::service_controller_template_generator::generate_service_controller_typescript(&file_path, service_controller_template_data)?;
    }

    // 5. 将 OpenAPI 规范转换为服务索引模板数据列表
    let service_index_template_data_list =
        path_to_service_index_template_data::openapi_to_service_index_template_data_list(
            &openapi_spec,
        )?;

    let service_index_template_data = ServiceIndexTemplateData {
        api_resource_modify_time: Local::now().format("%Y-%m-%d %H:%M:%S").to_string(),
        list: service_index_template_data_list,
    };

    // 生成服务索引文件到配置的目录
    let service_index_file_path = format!("{}/index.ts", config.servers_path);
    generator_template::service_index_template_generator::generate_service_index_typescript(
        &service_index_file_path,
        service_index_template_data,
    )?;

    Ok(())
}
