use js_sys::{Function, Reflect};
use wasm_bindgen::{JsCast, JsValue};

pub struct WasmConfig {
    pub namespace: String,
    pub schema_path: String,
    pub declare_type: String,
    pub servers_path: String,
    pub request_lib_path: String,
    pub custom_class_name: Function,
}

impl WasmConfig {
    /// 从 JsObject config 对象转换为 WasmConfig
    pub fn from_js_object(js_config: &JsValue) -> WasmConfig {
        let obj = Reflect::get(js_config, &JsValue::from_str("namespace")).unwrap();
        let namespace = obj.as_string().unwrap();
        let schema_path = Reflect::get(js_config, &JsValue::from_str("schema_path")).unwrap();
        let schema_path = schema_path.as_string().unwrap();
        let declare_type = Reflect::get(js_config, &JsValue::from_str("declare_type")).unwrap();
        let declare_type = declare_type.as_string().unwrap();
        let servers_path = Reflect::get(js_config, &JsValue::from_str("servers_path")).unwrap();
        let servers_path = servers_path.as_string().unwrap();
        let request_lib_path =
            Reflect::get(js_config, &JsValue::from_str("request_lib_path")).unwrap();
        let request_lib_path = request_lib_path.as_string().unwrap();
        let custom_class_name =
            Reflect::get(js_config, &JsValue::from_str("custom_class_name")).unwrap();
        let custom_class_name = custom_class_name.dyn_into::<Function>().unwrap();

        WasmConfig {
            namespace,
            schema_path,
            declare_type,
            servers_path,
            request_lib_path,
            custom_class_name,
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
}
