use openapi2ts_core::{ServiceIndexTemplateData, TemplateData, generator_template, path_to_service_controller_template_data, path_to_service_index_template_data, schema_to_interface_template_data};
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::JsCast;
use web_sys::console;
use openapiv3::OpenAPI;
#[cfg(target_arch = "wasm32")]
use js_sys::Array;

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

#[cfg(target_arch = "wasm32")]
pub fn wasm_config_to_core_config(wasm_config: WasmConfig) -> openapi2ts_core::Config {
    let after_open_api_data_inited = wasm_config.after_open_api_data_inited.clone().map(|f| {
        Box::new(move |data: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(data))
                .ok()
                .and_then(|v| v.as_string())
                .unwrap_or_else(|| data.to_string())
        }) as openapi2ts_core::StringHook
    });

    let custom_function_name = wasm_config.custom_function_name.clone().map(|f| {
        Box::new(move |method: &str, path: &str| {
            f.call2(
                &JsValue::NULL,
                &JsValue::from_str(method),
                &JsValue::from_str(path),
            )
            .ok()
            .and_then(|v| v.as_string())
            .unwrap_or_else(|| format!("{}{}", method, path))
        }) as openapi2ts_core::FunctionNameHook
    });

    let custom_type_name = wasm_config.custom_type_name.clone().map(|f| {
        Box::new(move |data: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(data))
                .ok()
                .and_then(|v| v.as_string())
                .unwrap_or_else(|| data.to_string())
        }) as openapi2ts_core::StringHook
    });

    let custom_class_name = wasm_config.custom_class_name.clone().map(|f| {
        Box::new(move |data: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(data))
                .ok()
                .and_then(|v| v.as_string())
                .unwrap_or_else(|| data.to_string())
        }) as openapi2ts_core::StringHook
    });

    let custom_type = wasm_config.custom_type.clone().map(|f| {
        Box::new(move |schema_object: &str, namespace: &str, origin_get_type: &str| {
            f.call3(
                &JsValue::NULL,
                &JsValue::from_str(schema_object),
                &JsValue::from_str(namespace),
                &JsValue::from_str(origin_get_type),
            )
            .ok()
            .and_then(|v| v.as_string())
            .unwrap_or_else(|| origin_get_type.to_string())
        }) as openapi2ts_core::CustomTypeHook
    });

    let custom_file_names = wasm_config.custom_file_names.clone().map(|f| {
        Box::new(move |operation_object: &str, api_path: &str, api_method: &str| {
            let v = f
                .call3(
                    &JsValue::NULL,
                    &JsValue::from_str(operation_object),
                    &JsValue::from_str(api_path),
                    &JsValue::from_str(api_method),
                )
                .ok()
                .unwrap_or(JsValue::UNDEFINED);
            let Ok(arr) = v.dyn_into::<Array>() else {
                return vec![];
            };
            arr.iter().filter_map(|x| x.as_string()).collect::<Vec<String>>()
        }) as openapi2ts_core::FileNamesHook
    });

    let custom_url_path = wasm_config.custom_url_path.clone().map(|f| {
        Box::new(move |api_path: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(api_path))
                .ok()
                .and_then(|v| v.as_string())
                .unwrap_or_else(|| api_path.to_string())
        }) as openapi2ts_core::StringHook
    });

    let fileter_gen_api_fn = wasm_config.fileter_gen_api_fn.clone().map(|f| {
        Box::new(move |api_path: &str, api_method: &str| {
            f.call2(
                &JsValue::NULL,
                &JsValue::from_str(api_path),
                &JsValue::from_str(api_method),
            )
            .ok()
            .and_then(|v| v.as_bool())
            .unwrap_or(true)
        }) as openapi2ts_core::FileFilterHook
    });

    openapi2ts_core::Config {
        api_prefix: wasm_config.api_prefix,
        namespace: wasm_config.namespace,
        is_swagger: wasm_config.is_swagger,
        is_camel_case: wasm_config.is_camel_case,
        nullable: wasm_config.nullable,
        declare_type: wasm_config.declare_type,
        enum_style: wasm_config.enum_style,
        project_name: wasm_config.project_name,
        schema_path: wasm_config.schema_path,
        servers_path: wasm_config.servers_path,
        request_import_statement: wasm_config.request_import_statement,
        request_lib_path: wasm_config.request_lib_path,
        request_options_type: wasm_config.request_options_type,
        split_declare: wasm_config.split_declare,
        after_open_api_data_inited,
        custom_function_name,
        custom_type_name,
        custom_class_name,
        custom_type,
        custom_file_names,
        custom_url_path,
        fileter_gen_api_fn,
    }
}

#[cfg(not(target_arch = "wasm32"))]
pub fn wasm_config_to_core_config(wasm_config: WasmConfig) -> openapi2ts_core::Config {
    openapi2ts_core::Config {
        api_prefix: wasm_config.api_prefix,
        namespace: wasm_config.namespace,
        is_swagger: wasm_config.is_swagger,
        is_camel_case: wasm_config.is_camel_case,
        nullable: wasm_config.nullable,
        declare_type: wasm_config.declare_type,
        enum_style: wasm_config.enum_style,
        project_name: wasm_config.project_name,
        schema_path: wasm_config.schema_path,
        servers_path: wasm_config.servers_path,
        request_import_statement: wasm_config.request_import_statement,
        request_lib_path: wasm_config.request_lib_path,
        request_options_type: wasm_config.request_options_type,
        split_declare: wasm_config.split_declare,
        after_open_api_data_inited: None,
        custom_function_name: None,
        custom_type_name: None,
        custom_class_name: None,
        custom_type: None,
        custom_file_names: None,
        custom_url_path: None,
        fileter_gen_api_fn: None,
    }
}

pub fn generate_types(
    openapi_content: &OpenAPI,
    config: &openapi2ts_core::Config,
) -> Result<(), Box<dyn std::error::Error>> {
    // 将 OpenAPI 规范转换为类型模板数据列表
    let template_data_list =
        schema_to_interface_template_data::openapi_to_interface_template_data_list(
            &openapi_content,
            config,
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

pub fn generate_service_controllers(
    openapi_content: &OpenAPI,
    config: &openapi2ts_core::Config,
) -> Result<(), Box<dyn std::error::Error>> {
    let service_controller_template_data_group_list =
        path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
            &openapi_content,
            config,
        )?;

    for (tag, service_controller_template_data) in service_controller_template_data_group_list {
        let file_path = format!("{}/{}.ts", config.servers_path, tag);
        let rendered =  generator_template::service_controller_template_generator::generate_service_controller_typescript_string(service_controller_template_data)?;
        write_file_sync(&file_path, &rendered);
        println!("\n✅ 结果已保存到 {file_path} 文件");
    }
    Ok(())
}

pub fn generate_service_index(
    openapi_content: &OpenAPI,
    config: &openapi2ts_core::Config,
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
    write_file_sync(&service_index_file_path, &rendered);
    println!("\n✅ 结果已保存到 {service_index_file_path} 文件");
    Ok(())
}

#[wasm_bindgen]
pub async fn openapi2ts(openapi_json: String, js_config: &JsValue) -> Result<bool, JsValue> {
    let wasm_config: WasmConfig = WasmConfig::from_js_object(js_config);
    let processed_openapi_json = wasm_config
        .after_open_api_data_inited
        .as_ref()
        .map(|f| {
            f.call1(&JsValue::NULL, &JsValue::from_str(&openapi_json))
                .ok()
                .and_then(|v| v.as_string())
                .unwrap_or_else(|| openapi_json.clone())
        })
        .unwrap_or(openapi_json);

    let openapi_content: openapiv3::OpenAPI = serde_json::from_str(&processed_openapi_json).expect("解析 OpenAPI JSON 失败, 检查是否是 swagger 格式的json, 如果是请设置isSwagger为true");
    console::log_1(&format!("当前 OpenAPI 版本: {:?}", openapi_content.openapi).into());
    // 将 wasm 配置转换为 core 配置
    let core_config = wasm_config_to_core_config(wasm_config);  
    // --------------------------- 将 OpenAPI 规范转换为类型模板数据列表 -------------------------
    generate_types(&openapi_content, &core_config).map_err(|e| JsValue::from_str(&format!("转换为类型模板数据失败: {:?}", e))).unwrap();

    // --------------------------- 将 OpenAPI 规范转换为接口模板数据列表 --------------------------
    generate_service_controllers(&openapi_content, &core_config).map_err(|e| JsValue::from_str(&format!("转换为接口模板失败: {:?}", e))).unwrap();

    // --------------------------- 将 OpenAPI 规范转换为服务索引模板数据列表 ------------------------
    generate_service_index(&openapi_content, &core_config).map_err(|e| JsValue::from_str(&format!("转换为服务索引模板失败: {:?}", e))).unwrap();

    Ok(true)
}
