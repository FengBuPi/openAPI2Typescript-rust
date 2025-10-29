use wasm_bindgen::prelude::*;
use web_sys::console;
use js_sys::Function;

use openapi2ts_core::{
    Config, TemplateData, ServiceIndexTemplateData,
    generator_template, path_to_service_controller_template_data,
    path_to_service_index_template_data, schema_to_interface_template_data,
};
use openapiv3::OpenAPI;

// 当wasm模块被加载时调用
#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    console::log_1(&"OpenAPI2TypeScript WASM模块已加载".into());
}

// 导出配置结构体到JavaScript
#[wasm_bindgen]
pub struct WasmConfig {
    namespace: String,
    schema_path: String,
    declare_type: String,
    servers_path: String,
    request_lib_path: String,
}

#[wasm_bindgen]
impl WasmConfig {
    #[wasm_bindgen(constructor)]
    pub fn new(
        namespace: String,
        schema_path: String,
        declare_type: String,
        servers_path: String,
        request_lib_path: String,
    ) -> WasmConfig {
        WasmConfig {
            namespace,
            schema_path,
            declare_type,
            servers_path,
            request_lib_path,
        }
    }

    #[wasm_bindgen(getter)]
    pub fn namespace(&self) -> String {
        self.namespace.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn schema_path(&self) -> String {
        self.schema_path.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn declare_type(&self) -> String {
        self.declare_type.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn servers_path(&self) -> String {
        self.servers_path.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn request_lib_path(&self) -> String {
        self.request_lib_path.clone()
    }
}

// 从JavaScript传入的OpenAPI JSON字符串生成代码
#[wasm_bindgen]
pub async fn generate_from_openapi_json(
    config: WasmConfig,
    openapi_json: String,
) -> Result<String, JsValue> {
    console::log_1(&"从OpenAPI JSON字符串生成代码".into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 将WasmConfig转换为内部Config
    let internal_config = Config {
        namespace: config.namespace,
        schema_path: config.schema_path,
        declare_type: config.declare_type,
        servers_path: config.servers_path,
        request_lib_path: config.request_lib_path,
    };

    // 生成类型定义
    let template_data_list = match schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("转换接口模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("转换接口模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    let template_data = TemplateData {
        namespace: internal_config.namespace.clone(),
        declare_type: internal_config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成服务控制器
    let service_controller_template_data_group_list = match path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
        &openapi_spec, 
        &internal_config.request_lib_path,
        &internal_config.namespace, 
        "ts", 
        "RequestOptions"
    ) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("生成服务控制器模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成服务控制器模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 生成服务索引
    let service_index_template_data_list = match path_to_service_index_template_data::openapi_to_service_index_template_data_list(&openapi_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("生成服务索引模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成服务索引模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg.clone()));
        }
    };

    let service_index_template_data = ServiceIndexTemplateData {
        api_resource_modify_time: chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string(),
        list: service_index_template_data_list,
    };

    // 返回生成结果摘要
    let result = format!(
        "代码生成完成！\n类型定义数量: {}\n服务控制器数量: {}\n服务索引数量: {}",
        template_data.list.len(),
        service_controller_template_data_group_list.len(),
        service_index_template_data.list.len()
    );

    let result_clone = result.clone();
    console::log_1(&result_clone.into());
    Ok(result)
}

// 生成TypeScript类型定义文件内容
#[wasm_bindgen]
pub fn generate_typescript_types(
    config: WasmConfig,
    openapi_json: String,
) -> Result<String, JsValue> {
    console::log_1(&"生成TypeScript类型定义".into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 生成类型定义
    let template_data_list = match schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("转换接口模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("转换接口模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成TypeScript代码
    match generator_template::interface_template_generator::generate_typescript_types_string(template_data) {
        Ok(types_content) => {
            console::log_1(&"TypeScript类型定义生成成功".into());
            Ok(types_content)
        },
        Err(e) => {
            let error_msg = format!("生成TypeScript类型定义失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成TypeScript类型定义失败: {}", e);
            Err(JsValue::from_str(&error_msg))
        }
    }
}

// 生成服务控制器文件内容
#[wasm_bindgen]
pub fn generate_service_controller(
    config: WasmConfig,
    openapi_json: String,
    tag: String,
) -> Result<String, JsValue> {
    console::log_1(&format!("生成服务控制器: {}", tag).into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 生成服务控制器模板数据
    let service_controller_template_data_group_list = match path_to_service_controller_template_data::openapi_to_service_controller_template_data_group_list(
        &openapi_spec, 
        &config.request_lib_path,
        &config.namespace, 
        "ts", 
        "RequestOptions"
    ) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("生成服务控制器模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成服务控制器模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 查找指定tag的模板数据
    if let Some(template_data) = service_controller_template_data_group_list.get(&tag) {
        match generator_template::service_controller_template_generator::generate_service_controller_typescript_string(template_data.clone()) {
            Ok(content) => {
                console::log_1(&format!("服务控制器 {} 生成成功", tag).into());
                Ok(content)
            },
            Err(e) => {
                let error_msg = format!("生成服务控制器失败: {}", e);
                console::error_1(&error_msg.clone().into());
                let error_msg = format!("生成服务控制器失败: {}", e);
                Err(JsValue::from_str(&error_msg))
            }
        }
    } else {
        let error_msg = format!("未找到标签为 {} 的服务控制器", tag);
        console::error_1(&error_msg.clone().into());
        let error_msg = format!("未找到标签为 {} 的服务控制器", tag);
        Err(JsValue::from_str(&error_msg))
    }
}

// 生成服务索引文件内容
#[wasm_bindgen]
pub fn generate_service_index(
    config: WasmConfig,
    openapi_json: String,
) -> Result<String, JsValue> {
    console::log_1(&"生成服务索引".into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 生成服务索引模板数据
    let service_index_template_data_list = match path_to_service_index_template_data::openapi_to_service_index_template_data_list(&openapi_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("生成服务索引模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成服务索引模板数据失败: {}", e);
            return Err(JsValue::from_str(&error_msg));
        }
    };

    let service_index_template_data = ServiceIndexTemplateData {
        api_resource_modify_time: chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string(),
        list: service_index_template_data_list,
    };

    // 生成服务索引代码
    match generator_template::service_index_template_generator::generate_service_index_typescript_string(service_index_template_data) {
        Ok(content) => {
            console::log_1(&"服务索引生成成功".into());
            Ok(content)
        },
        Err(e) => {
            let error_msg = format!("生成服务索引失败: {}", e);
            console::error_1(&error_msg.clone().into());
            let error_msg = format!("生成服务索引失败: {}", e);
            Err(JsValue::from_str(&error_msg))
        }
    }
}

// 支持自定义处理函数的代码生成
#[wasm_bindgen]
pub fn generate_with_custom_processor(
    config: WasmConfig,
    openapi_json: String,
    custom_processor: &Function,
) -> Result<String, JsValue> {
    console::log_1(&"使用自定义处理器生成代码".into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 调用自定义处理器处理 OpenAPI 规范
    let processed_spec = match custom_processor.call1(
        &JsValue::NULL, 
        &JsValue::from_str(&serde_json::to_string(&openapi_spec).unwrap_or_default())
    ) {
        Ok(result) => {
            // 将处理后的结果解析回 OpenAPI 结构
            match serde_json::from_str(&result.as_string().unwrap_or_default()) {
                Ok(spec) => spec,
                Err(e) => {
                    let error_msg = format!("自定义处理器返回的数据格式错误: {}", e);
                    console::error_1(&error_msg.clone().into());
                    return Err(JsValue::from_str(&error_msg));
                }
            }
        },
        Err(e) => {
            let error_msg = format!("自定义处理器执行失败: {:?}", e);
            console::error_1(&error_msg.clone().into());
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 使用处理后的规范生成代码
    let template_data_list = match schema_to_interface_template_data::openapi_to_interface_template_data_list(&processed_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("转换接口模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            return Err(JsValue::from_str(&error_msg));
        }
    };

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成TypeScript代码
    match generator_template::interface_template_generator::generate_typescript_types_string(template_data) {
        Ok(types_content) => {
            console::log_1(&"使用自定义处理器生成TypeScript类型定义成功".into());
            Ok(types_content)
        },
        Err(e) => {
            let error_msg = format!("生成TypeScript类型定义失败: {}", e);
            console::error_1(&error_msg.clone().into());
            Err(JsValue::from_str(&error_msg))
        }
    }
}

// 支持自定义类型名称转换器
#[wasm_bindgen]
pub fn generate_with_custom_type_converter(
    config: WasmConfig,
    openapi_json: String,
    type_converter: &Function,
) -> Result<String, JsValue> {
    console::log_1(&"使用自定义类型转换器生成代码".into());

    // 解析OpenAPI JSON
    let openapi_spec: OpenAPI = match serde_json::from_str(&openapi_json) {
        Ok(spec) => spec,
        Err(e) => {
            let error_msg = format!("解析OpenAPI JSON失败: {}", e);
            console::error_1(&error_msg.clone().into());
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 生成类型定义
    let mut template_data_list = match schema_to_interface_template_data::openapi_to_interface_template_data_list(&openapi_spec) {
        Ok(list) => list,
        Err(e) => {
            let error_msg = format!("转换接口模板数据失败: {}", e);
            console::error_1(&error_msg.clone().into());
            return Err(JsValue::from_str(&error_msg));
        }
    };

    // 对每个类型定义应用自定义转换器
    for type_def in &mut template_data_list {
        let current_name = type_def.type_name();
        if let Ok(converted_name) = type_converter.call1(
            &JsValue::NULL,
            &JsValue::from_str(&current_name)
        ) {
            if let Some(new_name) = converted_name.as_string() {
                // 更新类型名称
                match type_def {
                    openapi2ts_core::generator_template::interface_template_generator::TypeDefinition::Object { type_name, .. } => {
                        *type_name = new_name;
                    },
                    openapi2ts_core::generator_template::interface_template_generator::TypeDefinition::Enum { type_name, .. } => {
                        *type_name = new_name;
                    },
                    openapi2ts_core::generator_template::interface_template_generator::TypeDefinition::Basic { type_name, .. } => {
                        *type_name = new_name;
                    },
                }
            }
        }
    }

    let template_data = TemplateData {
        namespace: config.namespace.clone(),
        declare_type: config.declare_type.clone(),
        list: template_data_list,
    };

    // 生成TypeScript代码
    match generator_template::interface_template_generator::generate_typescript_types_string(template_data) {
        Ok(types_content) => {
            console::log_1(&"使用自定义类型转换器生成TypeScript类型定义成功".into());
            Ok(types_content)
        },
        Err(e) => {
            let error_msg = format!("生成TypeScript类型定义失败: {}", e);
            console::error_1(&error_msg.clone().into());
            Err(JsValue::from_str(&error_msg))
        }
    }
}
