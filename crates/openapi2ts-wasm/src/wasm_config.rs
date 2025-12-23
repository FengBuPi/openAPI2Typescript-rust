use js_sys::{Function, Reflect};
use wasm_bindgen::{JsCast, JsValue};

pub struct WasmConfig {
    pub namespace: String,
    pub schema_path: String,
    pub declare_type: String,
    pub servers_path: String,
    pub request_lib_path: String,
    pub custom_class_name: Function,
    pub custom_url_path: Function,
}

impl WasmConfig {
    /// 从 JsObject config 对象转换为 WasmConfig
    pub fn from_js_object(js_config: &JsValue) -> WasmConfig {
        let namespace = Reflect::get(js_config, &JsValue::from_str("namespace")).unwrap();
        let namespace = namespace.as_string().unwrap();

        let schema_path = Reflect::get(js_config, &JsValue::from_str("schemaPath")).unwrap();
        let schema_path = schema_path.as_string().unwrap();

        let declare_type = Reflect::get(js_config, &JsValue::from_str("declareType")).unwrap();
        let declare_type = declare_type.as_string().unwrap();

        let servers_path = Reflect::get(js_config, &JsValue::from_str("serversPath")).unwrap();
        let servers_path = servers_path.as_string().unwrap();

        let request_lib_path =
            Reflect::get(js_config, &JsValue::from_str("requestLibPath")).unwrap();
        let request_lib_path = request_lib_path.as_string().unwrap();

        let custom_class_name =
            Reflect::get(js_config, &JsValue::from_str("customClassName")).unwrap();
        let custom_class_name = custom_class_name.dyn_into::<Function>().unwrap();

        let custom_url_path =
            Reflect::get(js_config, &JsValue::from_str("customUrlPath")).unwrap();
        let custom_url_path = custom_url_path.dyn_into::<Function>().unwrap();

        WasmConfig {
            namespace,
            schema_path,
            declare_type,
            servers_path,
            request_lib_path,
            custom_class_name,  
            custom_url_path,
        }
    }

    /// 调用 custom_type_name 函数，如果存在
    pub fn call_custom_type_name(&self, input: &str) -> String {
        let custom_class_name_result = self
            .custom_class_name
            .call1(&JsValue::NULL, &JsValue::from_str(input))
            .unwrap();
        custom_class_name_result.as_string().unwrap()
    }

    /// 调用 custom_url_path 函数，如果存在
    pub fn call_custom_url_path(&self, url_path: &str) -> String {
        let custom_url_path_result = self
            .custom_url_path
            .call1(&JsValue::NULL, &JsValue::from_str(url_path))
            .unwrap();
        custom_url_path_result.as_string().unwrap()
    }
}
