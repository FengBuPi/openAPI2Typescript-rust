use js_sys::{Array, Function, Reflect};
use wasm_bindgen::{JsCast, JsValue};

pub struct WasmConfig {
    /// API 前缀
    pub api_prefix: String,
    /// 命名空间名称
    pub namespace: String,
    /// 是否是swagger2 格式的文件，如果不配置则默认是openapi3，有可能导致解析失败
    pub is_swagger: bool,
    /// 小驼峰命名文件和请求函数
    pub is_camel_case: bool,
    /// 使用 null 代替可选
    pub nullable: bool,
    /// interface 声明类型
    pub declare_type: String,
    /// 枚举样式
    pub enum_style: String,
    /// 项目名称
    pub project_name: String,
    /// Swagger 2.0 或 OpenAPI 3.0 的地址
    pub schema_path: String,
    /// 生成文件夹的路径
    pub servers_path: String,
    /// 自定义请求方法表达式
    pub request_import_statement: String,
    /// 自定义请求方法路径
    pub request_lib_path: String,
    /// 自定义请求方法 options 参数类型
    pub request_options_type: String,
    /// 每个tag组一个独立的.d.ts.
    pub split_declare: bool,
    /// OpenAPI 数据初始化后的钩子
    pub after_open_api_data_inited: Function,
    /// 自定义请求方法函数名称
    pub custom_function_name: Option<Function>,
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
    fn get_js_value(js_config: &JsValue, key: &str) -> JsValue {
        Reflect::get(js_config, &JsValue::from_str(key)).unwrap_or(JsValue::UNDEFINED)
    }

    fn get_string(js_config: &JsValue, key: &str, default: &str) -> String {
        let v = Self::get_js_value(js_config, key);
        v.as_string().unwrap_or_else(|| default.to_string())
    }

    fn get_bool(js_config: &JsValue, key: &str, default: bool) -> bool {
        let v = Self::get_js_value(js_config, key);
        v.as_bool().unwrap_or(default)
    }

    fn get_string_array(js_config: &JsValue, key: &str) -> Vec<String> {
        let v = Self::get_js_value(js_config, key);
        if v.is_undefined() || v.is_null() {
            return vec![];
        }
        let Ok(arr) = v.dyn_into::<Array>() else {
            return vec![];
        };
        arr.iter()
            .filter_map(|x| x.as_string())
            .collect()
    }

    fn get_function(js_config: &JsValue, key: &str) -> Function {
        let v = Self::get_js_value(js_config, key);
        v.dyn_into::<Function>()
            .unwrap_or_else(|_| Function::new_no_args(""))
    }

    fn get_optional_function(js_config: &JsValue, key: &str) -> Option<Function> {
        let v = Self::get_js_value(js_config, key);
        if v.is_undefined() || v.is_null() {
            return None;
        }
        v.dyn_into::<Function>().ok()
    }

    /// 从 JsObject config 对象转换为 WasmConfig
    pub fn from_js_object(js_config: &JsValue) -> WasmConfig {
        let api_prefix = Self::get_string(js_config, "apiPrefix", "");
        let namespace = Self::get_string(js_config, "namespace", "API");
        let is_swagger = Self::get_bool(js_config, "isSwagger", false);
        let is_camel_case = Self::get_bool(js_config, "isCamelCase", true);
        let nullable = Self::get_bool(js_config, "nullable", false);
        let declare_type = Self::get_string(js_config, "declareType", "interface");
        let enum_style = Self::get_string(js_config, "enumStyle", "string-literal");
        let project_name = Self::get_string(js_config, "projectName", "");
        let schema_path = Self::get_string(js_config, "schemaPath", "");
        let servers_path = Self::get_string(js_config, "serversPath", "");
        let request_import_statement = Self::get_string(js_config, "requestImportStatement", "");
        let request_lib_path = Self::get_string(js_config, "requestLibPath", "");
        let request_options_type =
            Self::get_string(js_config, "requestOptionsType", "RequestOptions");
        let split_declare = Self::get_bool(js_config, "splitDeclare", false);
        let after_open_api_data_inited = Self::get_function(js_config, "afterOpenApiDataInited");
        let custom_function_name = Self::get_optional_function(js_config, "customFunctionName");
        let custom_type_name = Self::get_function(js_config, "customTypeName");
        let custom_class_name = Self::get_function(js_config, "customClassName");
        let custom_type = Self::get_function(js_config, "customType");
        let custom_file_names = Self::get_function(js_config, "customFileNames");
        let custom_url_path = Self::get_function(js_config, "customUrlPath");
        let fileter_gen_api_fn = Self::get_function(js_config, "fileterGenAPIFn");

        WasmConfig {
            api_prefix,
            namespace,
            is_swagger,
            is_camel_case,
            nullable,
            enum_style,
            project_name,
            schema_path,
            declare_type,
            servers_path,
            request_import_statement,
            request_lib_path,
            request_options_type,
            split_declare,
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

    /// OpenAPI 数据初始化后的钩子 (openAPIData: OpenAPIObject) => OpenAPIObject
    pub fn call_after_open_api_data_inited(&self, openapi_data: &JsValue) {
        self.after_open_api_data_inited
            .call1(&JsValue::NULL, openapi_data)
            .unwrap();
    }

    /// 自定义请求方法函数名称 (data) => string
    pub fn call_custom_function_name(&self, data: &JsValue) -> Option<String> {
        self.custom_function_name.as_ref().map(|f| {
            f.call1(&JsValue::NULL, data)
                .unwrap()
                .as_string()
                .unwrap()
        })
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
