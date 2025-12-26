use openapi2ts_core::{
    generator_template, path_to_service_controller_template_data,
    path_to_service_index_template_data, schema_to_interface_template_data, Config,
    ServiceIndexTemplateData, TemplateData,
};
use openapiv3::OpenAPI;
use serde_json::Value;
use std::sync::Arc;

mod swagger2_to_openapi3_json;
use crate::swagger2_to_openapi3_json::swagger2_to_openapi3_json;

// 根据用配置中的 schema_path 判断如何获取 openapi.json 文件    。
// 1. 网络请求获取 (仅在非 WASM 环境中支持)
// 2. 本地文件获取
async fn get_openapi_content(schema_path: &str) -> Result<OpenAPI, Box<dyn std::error::Error + Send + Sync>> {
    let raw = if schema_path.starts_with("http") {
        reqwest::get(schema_path).await?.text().await.expect("网络请求失败")
    } else {
        std::fs::read_to_string(schema_path).expect("找不到文件，读取文件失败")
    };

    // 先做一次 JSON 解析以判断版本
    let mut json: Value = serde_json::from_str(&raw).expect("解析 JSON 文件失败");

    let is_openapi3 = json
        .get("openapi")
        .and_then(|v| v.as_str())
        .is_some();

    let is_swagger2 = json
        .get("swagger")
        .and_then(|v| v.as_str())
        .map(|s| s.starts_with("2."))
        .unwrap_or(false);

    if is_openapi3 {
        return Ok(serde_json::from_value(json)?);
    }

    if is_swagger2 {
        swagger2_to_openapi3_json(&mut json);
        return Ok(serde_json::from_value(json)?);
    }

    Err("不支持的 OpenAPI 版本或文件格式".into())
}

fn generate_types(
    openapi_content: &OpenAPI,
    config: &Config,
) -> Result<(), Box<dyn std::error::Error>> {
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(
            &openapi_content,
        )?;

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成类型定义文件到配置的目录
    let types_file_path = format!("{}/types.d.ts", config.servers_path);
    let rendered =
        generator_template::interface_template_generator::generate_typescript_types_string(template_data)?;
    std::fs::write(&types_file_path, rendered)?;
    println!("\n✅ 结果已保存到 {types_file_path} 文件");
    Ok(())
}

fn generate_service_controllers(
    openapi_content: &OpenAPI,
    config: &Config,
) -> Result<(), Box<dyn std::error::Error>> {
    let service_controller_template_data_group_list =
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
            &openapi_content,
            &config.request_lib_path,
            &config.namespace,
            "ts",
            "AxiosRequestConfig",
            None,
        )?;

    for (tag, service_controller_template_data) in service_controller_template_data_group_list {
        let file_path = format!("{}/{}.ts", config.servers_path, tag);
        let rendered =  generator_template::service_controller_template_generator::generate_service_controller_typescript_string(service_controller_template_data)?;
        std::fs::write(&file_path, rendered)?;
        println!("\n✅ 结果已保存到 {file_path} 文件");
    }
    Ok(())
}

fn generate_service_index(
    openapi_content: &OpenAPI,
    config: &Config,
) -> Result<(), Box<dyn std::error::Error>> {
    let service_index_template_data_list =
        path_to_service_index_template_data::openapi_to_service_index_template_data_list(
            &openapi_content,
        )?;

    let service_index_template_data = ServiceIndexTemplateData {
        list: service_index_template_data_list,
    };

    // 生成服务索引文件到配置的目录
    let service_index_file_path = format!("{}/index.ts", config.servers_path);
    let rendered =
        generator_template::service_index_template_generator::generate_service_index_typescript_string(
            service_index_template_data,
        )?;
    std::fs::write(&service_index_file_path, rendered)?;
    println!("\n✅ 结果已保存到 {service_index_file_path} 文件");
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    // 1. 读取并解析 JSON5 配置文件
    let config_content = std::fs::read_to_string("openapi2ts.config.json5")?;
    let config: Config = json5::from_str(&config_content)?;
    println!("配置加载成功: {:?}", config);

    // 2. 根据配置获取 OpenAPI 规范 结构体（支持网络请求和本地文件）
    let openapi_content: openapiv3::OpenAPI = get_openapi_content(&config.schema_path).await?;
    println!("当前 OpenAPI 版本: {:?}", openapi_content.openapi);

    // 删除输出目录，再重新创建
    match std::fs::remove_dir_all(&config.servers_path) {
        Ok(_) => {}
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {}
        Err(e) => return Err(e.into()),
    }
    std::fs::create_dir_all(&config.servers_path)?;

    let openapi_content = Arc::new(openapi_content);
    let config = Arc::new(config);

    // --------------------------- 将 OpenAPI 规范转换为类型模板数据列表 -------------------------
    let types_handle = tokio::task::spawn_blocking({
        let openapi_content = Arc::clone(&openapi_content);
        let config = Arc::clone(&config);
        move || -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
            generate_types(&openapi_content, &config).map_err(|e| {
                Box::new(std::io::Error::new(std::io::ErrorKind::Other, e.to_string())) as Box<dyn std::error::Error + Send + Sync>
            })
        }
    });

    // --------------------------- 将 OpenAPI 规范转换为服务控制器模板数据列表 -------------------------    
    let controllers_handle = tokio::task::spawn_blocking({
        let openapi_content = Arc::clone(&openapi_content);
        let config = Arc::clone(&config);
        move || -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
            generate_service_controllers(&openapi_content, &config).map_err(|e| {
                Box::new(std::io::Error::new(std::io::ErrorKind::Other, e.to_string())) as Box<dyn std::error::Error + Send + Sync>
            })
        }
    });

    // --------------------------- 将 OpenAPI 规范转换为服务索引模板数据列表 -------------------------    
    let index_handle = tokio::task::spawn_blocking({
        let openapi_content = Arc::clone(&openapi_content);
        let config = Arc::clone(&config);
        move || -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
            generate_service_index(&openapi_content, &config).map_err(|e| {
                Box::new(std::io::Error::new(std::io::ErrorKind::Other, e.to_string())) as Box<dyn std::error::Error + Send + Sync>
            })
        }
    });

    types_handle.await??;
    controllers_handle.await??;
    index_handle.await??;

    println!("✅ 生成完成");
    println!("✅ 结果已保存到 {} 目录", config.servers_path);
    Ok(())
}
