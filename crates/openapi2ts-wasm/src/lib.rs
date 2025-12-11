use openapi2ts_core::{generator_template, schema_to_interface_template_data, TemplateData};
use openapiv3::OpenAPI;
use wasm_bindgen::prelude::*;
use web_sys::console;

mod wasm_config;
use crate::wasm_config::WasmConfig;

// JavaScript/Node.js提供的函数
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_name = "readFileSync")]
    fn read_file_sync(path: &str) -> String;

    #[wasm_bindgen(js_name = "fetchJson")]
    async fn fetch_json(url: &str) -> JsValue;

    #[wasm_bindgen(js_name = "writeFileSync")]
    fn write_file_sync(path: &str, content: &str);
}

// 当wasm模块被加载时调用
#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    console::log_1(&"OpenAPI2TypeScript WASM模块已加载".into());
}

pub async fn get_openapi_content(schema_path: &str) -> Result<OpenAPI, JsValue> {
    if schema_path.starts_with("http") {
        // 调用JavaScript/Node.js的fetch函数
        let json = fetch_json(schema_path).await;
        let openapi_content: OpenAPI = serde_wasm_bindgen::from_value(json)?;
        Ok(openapi_content)
    } else {
        // 调用Node.js提供的函数读取本地文件
        let file_content = read_file_sync(schema_path);
        let openapi_content: OpenAPI = serde_json::from_str(&file_content)
            .map_err(|e| JsValue::from_str(&format!("JSON解析失败: {}", e)))?;
        Ok(openapi_content)
    }
}

#[wasm_bindgen]
// 暴露给前端的main函数，返回是否成功
pub async fn openapi2ts(js_config: &JsValue) -> Result<bool, JsValue> {
    let config: WasmConfig = WasmConfig::from_js_object(js_config);

    let openapi_content: openapiv3::OpenAPI = get_openapi_content(&config.schema_path).await?;
    console::log_1(&format!("当前 OpenAPI 版本: {:?}", openapi_content.openapi).into());

    // 将 OpenAPI 规范转换为类型模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(
            &openapi_content,
        )
        .map_err(|e| JsValue::from_str(&format!("转换模板数据失败: {:?}", e)))?;

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

    Ok(true)
}
