use std::fmt::Debug;
use serde::{Deserialize, Serialize};

#[cfg(target_arch = "wasm32")]
pub type StringHook = Box<dyn Fn(&str) -> String>;

#[cfg(not(target_arch = "wasm32"))]
pub type StringHook = Box<dyn Fn(&str) -> String + Send + Sync>;

#[derive(Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Config {
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
    #[serde(skip)]
    pub after_open_api_data_inited: Option<StringHook>,
    /// 自定义请求方法函数名称
    #[serde(skip)]
    pub custom_function_name: Option<StringHook>,
    /// 自定义类型名称
    #[serde(skip)]
    pub custom_type_name: Option<StringHook>,
    /// 自定义类名
    #[serde(skip)]
    pub custom_class_name: Option<StringHook>,
    /// 自定义类型
    #[serde(skip)]
    pub custom_type: Option<StringHook>,
    /// 自定义生成文件名
    #[serde(skip)]
    pub custom_file_names: Option<StringHook>,
    /// 自定义 URL 路径
    #[serde(skip)]
    pub custom_url_path: Option<StringHook>,
    /// 过滤生成的 API 接口函数
    #[serde(skip)]
    pub fileter_gen_api_fn: Option<StringHook>,
}

impl Debug for Config {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Config")
            .field("api_prefix", &self.api_prefix)
            .field("namespace", &self.namespace)
            .field("is_swagger", &self.is_swagger)
            .field("is_camel_case", &self.is_camel_case)
            .field("nullable", &self.nullable)
            .field("declare_type", &self.declare_type)
            .field("enum_style", &self.enum_style)
            .field("project_name", &self.project_name)
            .field("schema_path", &self.schema_path)
            .field("servers_path", &self.servers_path)
            .field("request_import_statement", &self.request_import_statement)
            .field("request_lib_path", &self.request_lib_path)
            .field("request_options_type", &self.request_options_type)
            .field("split_declare", &self.split_declare)
            .finish()
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            api_prefix: "".to_string(),
            namespace: "API".to_string(),
            is_swagger: false,
            is_camel_case: true,
            nullable: false,
            schema_path: "./openapi.json".to_string(),
            declare_type: "interface".to_string(),
            enum_style: "string-literal".to_string(),
            project_name: "".to_string(),
            servers_path: "./api".to_string(),
            request_import_statement: "import request, { RequestOptions } from '@/utils/request';"
                .to_string(),
            request_lib_path: "import request, { RequestOptions } from '@/utils/request';"
                .to_string(),
            request_options_type: "RequestOptions".to_string(),
            split_declare: false,
            custom_url_path: None,
            after_open_api_data_inited: None,
            custom_function_name: None,
            custom_type_name: None,
            custom_class_name: None,
            custom_type: None,
            custom_file_names: None,
            fileter_gen_api_fn: None,
        }
    }
}

impl Clone for Config {
    fn clone(&self) -> Self {
        Self {
            api_prefix: self.api_prefix.clone(),
            namespace: self.namespace.clone(),
            is_swagger: self.is_swagger,
            is_camel_case: self.is_camel_case,
            nullable: self.nullable,
            declare_type: self.declare_type.clone(),
            enum_style: self.enum_style.clone(),
            project_name: self.project_name.clone(),
            schema_path: self.schema_path.clone(),
            servers_path: self.servers_path.clone(),
            request_import_statement: self.request_import_statement.clone(),
            request_lib_path: self.request_lib_path.clone(),
            request_options_type: self.request_options_type.clone(),
            split_declare: self.split_declare,
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
}