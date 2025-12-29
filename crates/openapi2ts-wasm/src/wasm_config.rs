use js_sys::{Array, Function, Reflect};
use wasm_bindgen::{JsCast, JsValue};

pub struct WasmConfig {
    /// 命名空间名称
    pub namespace: String,
    /// Swagger 2.0 或 OpenAPI 3.0 的地址
    pub schema_path: String,
    /// 声明类型
    pub declare_type: String,
    /// 生成文件夹的路径
    pub servers_path: String,
    /// 请求库路径
    pub request_lib_path: String,
    /// OpenAPI 数据初始化后的钩子
    pub after_open_api_data_inited: Function,
    /// 自定义请求方法函数名称
    pub custom_function_name: Function,
    /// 自定义类型名称
    pub custom_type_name: Function,
    /// 自定义类名
    pub custom_class_name: Function,
    /// 自定义类型
    pub custom_type: Function,
    /// 自定义生成文件名
    pub custom_file_names: Function,
    /// 自定义 URL 路径
    pub custom_url_path: Function,
    /// 过滤生成的 API 接口函数
    pub fileter_gen_api_fn: Function,
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

        let after_open_api_data_inited =
            Reflect::get(js_config, &JsValue::from_str("afterOpenApiDataInited")).unwrap();
        let after_open_api_data_inited = after_open_api_data_inited.dyn_into::<Function>().unwrap();

        let custom_class_name =
            Reflect::get(js_config, &JsValue::from_str("customClassName")).unwrap();
        let custom_class_name = custom_class_name.dyn_into::<Function>().unwrap();

        let custom_url_path =
            Reflect::get(js_config, &JsValue::from_str("customUrlPath")).unwrap();
        let custom_url_path = custom_url_path.dyn_into::<Function>().unwrap();

        let custom_function_name =
            Reflect::get(js_config, &JsValue::from_str("customFunctionName")).unwrap();
        let custom_function_name = custom_function_name.dyn_into::<Function>().unwrap();

        let custom_type_name =
            Reflect::get(js_config, &JsValue::from_str("customTypeName")).unwrap();
        let custom_type_name = custom_type_name.dyn_into::<Function>().unwrap();

        let custom_type =
            Reflect::get(js_config, &JsValue::from_str("customType")).unwrap();
        let custom_type = custom_type.dyn_into::<Function>().unwrap();

        let custom_file_names =
            Reflect::get(js_config, &JsValue::from_str("customFileNames")).unwrap();
        let custom_file_names = custom_file_names.dyn_into::<Function>().unwrap();

        let fileter_gen_api_fn =
            Reflect::get(js_config, &JsValue::from_str("fileterGenAPIFn")).unwrap();
        let fileter_gen_api_fn = fileter_gen_api_fn.dyn_into::<Function>().unwrap();

        WasmConfig {
            namespace,
            schema_path,
            declare_type,
            servers_path,
            request_lib_path,
            after_open_api_data_inited,
            custom_class_name,  
            custom_url_path,
            custom_function_name,
            custom_type_name,
            custom_type,
            custom_file_names,
            fileter_gen_api_fn,
        }
    }

    /// OpenAPI 数据初始化后的钩子 (openAPIData: OpenAPIObject) => OpenAPIObject
    pub fn call_after_open_api_data_inited(&self, openapi_data: &JsValue) {
        self.after_open_api_data_inited
            .call1(&JsValue::NULL, openapi_data)
            .unwrap();
    }

    /// 自定义请求方法函数名称 (data) => string
    pub fn call_custom_function_name(&self, data: &JsValue) -> String {
        self.custom_function_name
            .call1(&JsValue::NULL, data)
            .unwrap()
            .as_string()
            .unwrap()
    }

    /// 自定义类型名称 (data) => string
    pub fn call_custom_type_name(&self, data: &JsValue) -> String {
        self.custom_type_name
            .call1(&JsValue::NULL, data)
            .unwrap()
            .as_string()
            .unwrap()
    }

    /// 自定义类名 (tagName) => string
    pub fn call_custom_class_name(&self, tag_name: &str) -> String {
        self.custom_class_name
            .call1(&JsValue::NULL, &JsValue::from_str(tag_name))
            .unwrap()
            .as_string()
            .unwrap()
    }

    /// 自定义获取类型 (schemaObject, namespace, originGetType) => string
    pub fn call_custom_type(
        &self,
        schema_object: &JsValue,
        namespace: &str,
        origin_get_type: &Function,
    ) -> String {
        self.custom_type
            .call3(
                &JsValue::NULL,
                schema_object,
                &JsValue::from_str(namespace),
                origin_get_type,
            )
            .unwrap()
            .as_string()
            .unwrap()
    }

    /// 自定义生成文件名 (operationObject, apiPath, apiMethod) => string[]
    pub fn call_custom_file_names(
        &self,
        operation_object: &JsValue,
        api_path: &str,
        api_method: &str,
    ) -> Vec<String> {
        let v = self
            .custom_file_names
            .call3(
                &JsValue::NULL,
                operation_object,
                &JsValue::from_str(api_path),
                &JsValue::from_str(api_method),
            )
            .unwrap();
        let arr: Array = v.dyn_into::<Array>().unwrap();
        arr.iter().map(|x| x.as_string().unwrap()).collect()
    }

    /// 自定义 URL 路径 (apiPath) => string
    pub fn call_custom_url_path(&self, api_path: &str) -> String {
        let custom_url_path_result = self
            .custom_url_path
            .call1(&JsValue::NULL, &JsValue::from_str(api_path))
            .unwrap();
        custom_url_path_result.as_string().unwrap()
    }

    /// 筛选是否生成接口函数 (apiPath, apiMethod) => boolean
    pub fn call_fileter_gen_api_fn(&self, api_path: &str, api_method: Option<&str>) -> bool {
        let v = self
            .fileter_gen_api_fn
            .call2(
                &JsValue::NULL,
                &JsValue::from_str(api_path),
                &api_method
                    .map(JsValue::from_str)
                    .unwrap_or(JsValue::UNDEFINED),
            )
            .unwrap();
        v.as_bool().unwrap()
    }
}
