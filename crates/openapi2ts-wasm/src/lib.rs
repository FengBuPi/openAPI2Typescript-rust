use js_sys::{Function, Reflect};
use openapi2ts_core::{
    generator_template, path_to_service_controller_template_data,
    path_to_service_index_template_data, schema_to_interface_template_data, Config,
    ServiceIndexTemplateData, TemplateData,
};
use openapiv3::OpenAPI;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use web_sys::console;

// 根据用配置中的 schema_path 判断如何获取 openapi.json 文件
// 1. 网络请求获取 (仅在非 WASM 环境中支持)
// 2. 本地文件获取
// #[allow(dead_code)]
// pub async fn get_openapi_spec(config: &Config) -> Result<OpenAPI, Box<dyn std::error::Error>> {
//     if config.schema_path.starts_with("http") {
//     } else {
//     }
// }

// 当wasm模块被加载时调用
#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    console::log_1(&"OpenAPI2TypeScript WASM模块已加载".into());
}

// 导出配置结构体到JavaScript
#[wasm_bindgen]
#[derive(Serialize, Deserialize, Debug)]
pub struct WasmConfigData {
    namespace: String,
    schema_path: String,
    declare_type: String,
    servers_path: String,
    request_lib_path: String,
}

#[allow(dead_code)]
pub struct WasmConfig {
    data: WasmConfigData,
    custom_type_name: Option<Function>,
    custom_file_names: Option<Function>,
}

impl WasmConfig {
    /// 从 JsValue 创建 WasmConfig
    fn from_js_value(js_config: JsValue) -> Self {
        let obj = js_sys::Object::from(js_config.clone());

        // 提取基本配置数据
        let data: WasmConfigData =
            serde_wasm_bindgen::from_value(js_config).unwrap_or_else(|_| WasmConfigData {
                namespace: "API".to_string(),
                schema_path: "./openapi.json".to_string(),
                declare_type: "interface".to_string(),
                servers_path: "./servers".to_string(),
                request_lib_path: "import request, { RequestOptions } from '@/utils/request';"
                    .to_string(),
            });

        // 提取 custom_type_name 函数（如果存在）
        let custom_type_name = Reflect::get(&obj, &"custom_type_name".into())
            .ok()
            .and_then(|val| val.dyn_into::<Function>().ok());

        // 提取 custom_file_names 函数（如果存在）
        let custom_file_names = Reflect::get(&obj, &"custom_file_names".into())
            .ok()
            .and_then(|val| val.dyn_into::<Function>().ok());

        WasmConfig {
            data,
            custom_type_name,
            custom_file_names,
        }
    }

    /// 调用 custom_type_name 函数，如果存在
    pub fn call_custom_type_name(&self, input: &str) -> String {
        if let Some(ref func) = self.custom_type_name {
            if let Ok(result) = func.call1(&wasm_bindgen::JsValue::NULL, &JsValue::from_str(input))
            {
                if let Some(s) = result.as_string() {
                    return s;
                }
            }
        }
        input.to_string()
    }

    /// 调用 custom_file_names 函数，如果存在
    pub fn call_custom_file_names(&self, arg1: &str, arg2: &str, arg3: &str) -> String {
        if let Some(ref func) = self.custom_file_names {
            if let Ok(result) = func.call3(
                &wasm_bindgen::JsValue::NULL,
                &JsValue::from_str(arg1),
                &JsValue::from_str(arg2),
                &JsValue::from_str(arg3),
            ) {
                if let Some(s) = result.as_string() {
                    return s;
                }
            }
        }
        format!("{}-{}-{}", arg1, arg2, arg3)
    }
}

// 从 JS 对象创建配置并返回配置的内部 ID
// 这个函数用于测试和演示如何在 Rust 中调用 JS 传递进来的函数
// #[wasm_bindgen]
// pub fn test_call_js_functions(js_config: JsValue) -> String {
//     let config = WasmConfig::from_js_value(js_config);

//     // 测试调用 JS 传入的函数
//     let test_result = config.call_custom_type_name("test_input");
//     format!("JS函数返回: {}", test_result)
// }
