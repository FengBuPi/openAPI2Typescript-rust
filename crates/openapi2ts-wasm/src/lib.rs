use openapi2ts_core::{ServiceIndexTemplateData, TemplateData, generator_template, path_to_service_controller_template_data, path_to_service_index_template_data, schema_to_interface_template_data};
use wasm_bindgen::prelude::*;
use web_sys::console;
use openapiv3::OpenAPI;

mod wasm_config;
use crate::wasm_config::WasmConfig;

// JavaScript/Node.js提供的函数
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_name = "writeFileSync")]
    fn write_file_sync(path: &str, content: &str);
}

// 当wasm模块被加载时调用
#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    console::log_1(&"OpenAPI2TypeScript WASM模块已加载".into());
}

pub fn generate_types(openapi_content: &OpenAPI, config: &WasmConfig) -> Result<(), Box<dyn std::error::Error>> {
    // 将 OpenAPI 规范转换为类型模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(
            &openapi_content,
        ).unwrap();

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成类型定义文件到配置的目录
    let types_file_path = format!("{}/types.d.ts", config.servers_path);
    let rendered =
        generator_template::interface_template_generator::generate_typescript_types_string(
            template_data,
        )
        .unwrap();
    write_file_sync(&types_file_path, &rendered);
    Ok(())
}

pub fn generate_service_controllers(openapi_content: &OpenAPI, config: &WasmConfig) -> Result<(), Box<dyn std::error::Error>>{
    let service_controller_template_data_group_list =
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
            &openapi_content,
            &config.request_lib_path,
            &config.namespace,
            "ts",
            "AxiosRequestConfig",
            Some(&|s: &str| config.call_custom_url_path(s)),
        )?;

    for (tag, service_controller_template_data) in service_controller_template_data_group_list {
        let file_path = format!("{}/{}.ts", config.servers_path, tag);
        let rendered =  generator_template::service_controller_template_generator::generate_service_controller_typescript_string(service_controller_template_data)?;
        write_file_sync(&file_path, &rendered);
        println!("\n✅ 结果已保存到 {file_path} 文件");
    }
    Ok(())
}

pub fn generate_service_index(openapi_content: &OpenAPI, config: &WasmConfig) -> Result<(), Box<dyn std::error::Error>>{
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
    write_file_sync(&service_index_file_path, &rendered);
    println!("\n✅ 结果已保存到 {service_index_file_path} 文件");
    Ok(())
}

#[wasm_bindgen]
// 暴露给前端的main函数，返回是否成功
pub async fn openapi2ts(openapi_json: String, js_config: &JsValue) -> Result<bool, JsValue> {
    let config: WasmConfig = WasmConfig::from_js_object(js_config);

    let openapi_content: openapiv3::OpenAPI = serde_json::from_str(&openapi_json).expect("解析 OpenAPI JSON 失败, 检查是否是 swagger 格式的json, 如果是请设置isSwagger为true");

    console::log_1(&format!("当前 OpenAPI 版本: {:?}", openapi_content.openapi).into());
    // --------------------------- 将 OpenAPI 规范转换为类型模板数据列表 -------------------------
    generate_types(&openapi_content, &config).map_err(|e| JsValue::from_str(&format!("转换为类型模板数据失败: {:?}", e))).unwrap();

    // --------------------------- 将 OpenAPI 规范转换为接口模板数据列表 --------------------------
    generate_service_controllers(&openapi_content, &config).map_err(|e| JsValue::from_str(&format!("转换为接口模板失败: {:?}", e))).unwrap();

    // --------------------------- 将 OpenAPI 规范转换为服务索引模板数据列表 ------------------------
    generate_service_index(&openapi_content, &config).map_err(|e| JsValue::from_str(&format!("转换为服务索引模板失败: {:?}", e))).unwrap();

    Ok(true)
}
