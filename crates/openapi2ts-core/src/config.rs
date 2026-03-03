use std::fmt::Debug;
use heck::ToPascalCase;
use serde::{Deserialize, Serialize};

#[cfg(target_arch = "wasm32")]
pub type StringHook = Box<dyn for<'a> Fn(&'a str) -> String>;

#[cfg(not(target_arch = "wasm32"))]
pub type StringHook = Box<dyn for<'a> Fn(&'a str) -> String + Send + Sync>;

#[cfg(target_arch = "wasm32")]
pub type FunctionNameHook = Box<dyn for<'a, 'b> Fn(&'a str, &'b str) -> String>;

#[cfg(not(target_arch = "wasm32"))]
pub type FunctionNameHook = Box<dyn for<'a, 'b> Fn(&'a str, &'b str) -> String + Send + Sync>;

#[cfg(target_arch = "wasm32")]
pub type FileFilterHook = Box<dyn for<'a, 'b> Fn(&'a str, &'b str) -> bool>;

#[cfg(not(target_arch = "wasm32"))]
pub type FileFilterHook = Box<dyn for<'a, 'b> Fn(&'a str, &'b str) -> bool + Send + Sync>;

#[cfg(target_arch = "wasm32")]
pub type FileNamesHook =
    Box<dyn for<'a, 'b, 'c> Fn(&'a str, &'b str, &'c str) -> Vec<String>>;

#[cfg(not(target_arch = "wasm32"))]
pub type FileNamesHook =
    Box<dyn for<'a, 'b, 'c> Fn(&'a str, &'b str, &'c str) -> Vec<String> + Send + Sync>;

#[cfg(target_arch = "wasm32")]
pub type CustomTypeHook =
    Box<dyn for<'a, 'b, 'c> Fn(&'a str, &'b str, &'c str) -> String>;

#[cfg(not(target_arch = "wasm32"))]
pub type CustomTypeHook =
    Box<dyn for<'a, 'b, 'c> Fn(&'a str, &'b str, &'c str) -> String + Send + Sync>;


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
    pub custom_function_name: Option<FunctionNameHook>,
    /// 自定义类型名称
    #[serde(skip)]
    pub custom_type_name: Option<StringHook>,
    /// 自定义类名
    #[serde(skip)]
    pub custom_class_name: Option<StringHook>,
    /// 自定义类型
    #[serde(skip)]
    pub custom_type: Option<CustomTypeHook>,
    /// 自定义生成文件名
    #[serde(skip)]
    pub custom_file_names: Option<FileNamesHook>,
    /// 自定义 URL 路径
    #[serde(skip)]
    pub custom_url_path: Option<StringHook>,
    /// 过滤生成的 API 接口函数
    #[serde(skip)]
    pub fileter_gen_api_fn: Option<FileFilterHook>,
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

impl Config {
    /// 解析 API 请求函数名称（functionName）。
    ///
    /// # 处理规则
    /// 1. 如果配置了 `custom_function_name`，优先使用用户自定义结果。
    /// 2. 否则使用内置默认策略：
    ///    - 移除路径中的 `{`、`}`、`:` 等占位符符号
    ///    - 以 `/` 和 `-` 分段
    ///    - 各段首字母大写并拼接
    ///    - 最终与 `method` 前缀拼接，形成小驼峰风格名称
    ///
    /// # 参数
    /// * `method` - HTTP 方法字符串（如 `get`、`post`）
    /// * `path` - OpenAPI 原始路径（如 `/admin/v1/user/{id}`）
    ///
    /// # 返回值
    /// 解析后的函数名；当用户钩子存在时，返回钩子结果。
    pub fn resolve_function_name(&self, method: &str, path: &str) -> String {
        if let Some(f) = self.custom_function_name.as_ref() {
            return f(method, path);
        }

        let cleaned_path = path.replace('{', "").replace('}', "").replace(':', "");
        let resource = cleaned_path
            .split('/')
            .filter(|s| !s.is_empty() && !s.trim().is_empty())
            .flat_map(|segment| segment.split('-'))
            .filter(|s| !s.is_empty() && !s.trim().is_empty())
            .map(|segment| {
                let mut chars = segment.chars();
                match chars.next() {
                    Some(first) => first.to_uppercase().to_string() + chars.as_str(),
                    None => String::new(),
                }
            })
            .collect::<Vec<String>>()
            .concat();

        format!("{}{}", method, resource)
    }

    /// 解析 service 文件名（controller 文件名）。
    ///
    /// # 处理规则
    /// 1. 如果未配置 `custom_file_names`，直接返回 `default_name`。
    /// 2. 如果配置了 `custom_file_names`：
    ///    - 调用钩子并获取 `Vec<String>`
    ///    - 仅消费第一个名称（当前 simple-rename 策略）
    ///    - 对名称做标准化（去 `.ts`、清洗非法字符、统一分隔符）
    /// 3. 钩子返回空数组或标准化后为空时，回退到 `default_name`。
    ///
    /// # 参数
    /// * `operation_json` - 当前 operation 的 JSON 字符串
    /// * `path` - API 路径
    /// * `method` - HTTP 方法
    /// * `default_name` - 默认文件名（通常由 tag 推导）
    ///
    /// # 返回值
    /// 最终可落盘使用的文件名（不包含 `.ts` 扩展名）。
    pub fn resolve_service_file_name(
        &self,
        operation_json: &str,
        path: &str,
        method: &str,
        default_name: &str,
    ) -> String {
        let Some(custom_file_names) = self.custom_file_names.as_ref() else {
            return default_name.to_string();
        };
        let custom_file_names = custom_file_names(operation_json, path, method);
        let Some(first_name) = custom_file_names.first() else {
            return default_name.to_string();
        };
        normalize_service_file_name(first_name, default_name)
    }

    /// 解析接口 URL 路径。
    ///
    /// # 处理规则
    /// - 配置了 `custom_url_path` 时，使用用户钩子结果。
    /// - 未配置时，返回输入 `path`（默认不改写）。
    ///
    /// # 参数
    /// * `path` - OpenAPI 中的原始接口路径
    ///
    /// # 返回值
    /// 经过自定义或默认规则处理后的路径字符串。
    pub fn resolve_url_path(&self, path: &str) -> String {
        match self.custom_url_path.as_ref() {
            Some(f) => f(path),
            None => path.to_string(),
        }
    }

    /// 判定是否需要生成某个 API 方法。
    ///
    /// # 处理规则
    /// - 配置了 `fileter_gen_api_fn` 时，调用钩子进行判定。
    /// - 未配置时默认返回 `true`，表示该 API 参与生成。
    ///
    /// # 参数
    /// * `path` - API 路径
    /// * `method` - HTTP 方法
    ///
    /// # 返回值
    /// `true` 表示生成，`false` 表示跳过。
    pub fn resolve_should_generate_api(&self, path: &str, method: &str) -> bool {
        match self.fileter_gen_api_fn.as_ref() {
            Some(f) => f(path, method),
            None => true,
        }
    }

    /// 解析类型名称（通常用于 `$ref` 或 schema key）。
    ///
    /// # 处理规则
    /// 1. 配置了 `custom_type_name` 时，优先使用用户钩子结果。
    /// 2. 未配置时使用默认规则：
    ///    - 取路径最后一段
    ///    - 转换为 PascalCase
    ///
    /// # 参数
    /// * `ref_path` - 引用路径或 schema key（如 `#/components/schemas/user_profile`）
    ///
    /// # 返回值
    /// 类型名字符串（如 `UserProfile`）。
    pub fn resolve_type_name(&self, ref_path: &str) -> String {
        if let Some(f) = self.custom_type_name.as_ref() {
            return f(ref_path);
        }
        let final_name = ref_path.split('/').next_back().unwrap_or(ref_path);
        final_name.to_pascal_case()
    }

    /// 解析最终类型字符串（支持 customType 对默认推导结果做覆盖）。
    ///
    /// # 处理规则
    /// 1. `origin_type` 代表内置算法计算出的默认类型结果。
    /// 2. 若未配置 `custom_type`，直接返回 `origin_type`。
    /// 3. 若配置了 `custom_type`：
    ///    - 调用钩子：`custom_type(schema_json, namespace, origin_type)`
    ///    - 当返回空白字符串时回退 `origin_type`
    ///    - 否则使用钩子返回值
    ///
    /// # 参数
    /// * `schema_json` - 当前 schema 的 JSON 字符串
    /// * `namespace` - 类型命名空间
    /// * `origin_type` - 默认推导出的类型字符串
    ///
    /// # 返回值
    /// 最终用于模板渲染的类型字符串。
    pub fn resolve_type_string(
        &self,
        schema_json: &str,
        namespace: &str,
        origin_type: &str,
    ) -> String {
        let Some(custom_type_hook) = self.custom_type.as_ref() else {
            return origin_type.to_string();
        };
        let custom = custom_type_hook(schema_json, namespace, origin_type);
        if custom.trim().is_empty() {
            origin_type.to_string()
        } else {
            custom
        }
    }
}

fn normalize_service_file_name(file_name: &str, default_name: &str) -> String {
    let mut raw = file_name.trim().to_string();
    if raw.ends_with(".ts") {
        raw = raw.trim_end_matches(".ts").to_string();
    }

    let mut out = String::with_capacity(raw.len());
    let mut last_was_sep = false;

    for c in raw.chars() {
        let mapped = if c.is_ascii_alphanumeric() {
            Some(c.to_ascii_lowercase())
        } else if c == '-' || c == '_' {
            Some('-')
        } else {
            None
        };

        if let Some(ch) = mapped {
            let is_sep = ch == '-';
            if is_sep {
                if !out.is_empty() && !last_was_sep {
                    out.push('-');
                }
            } else {
                out.push(ch);
            }
            last_was_sep = is_sep;
        }
    }

    let normalized = out.trim_matches('-').to_string();
    if normalized.is_empty() {
        default_name.to_string()
    } else {
        normalized
    }
}

#[cfg(test)]
mod tests {
    use super::Config;

    #[test]
    fn test_resolve_function_name_default() {
        let cfg = Config::default();
        let name = cfg.resolve_function_name("post", "/admin/v1/user/{id}/detail-info");
        assert_eq!(name, "postAdminV1UserIdDetailInfo");
    }

    #[test]
    fn test_resolve_function_name_custom_hook() {
        let mut cfg = Config::default();
        cfg.custom_function_name = Some(Box::new(|method: &str, path: &str| {
            format!("{}_{}", method, path.replace('/', "_"))
        }));
        let name = cfg.resolve_function_name("get", "/v1/user/list");
        assert_eq!(name, "get__v1_user_list");
    }

    #[test]
    fn test_resolve_service_file_name_default_fallback() {
        let cfg = Config::default();
        let name = cfg.resolve_service_file_name("{}", "/v1/user/list", "get", "moren");
        assert_eq!(name, "moren");
    }

    #[test]
    fn test_resolve_service_file_name_custom_and_normalize() {
        let mut cfg = Config::default();
        cfg.custom_file_names = Some(Box::new(|_operation_json, _path, _method| {
            vec!["User_List.ts".to_string(), "ignored".to_string()]
        }));
        let name = cfg.resolve_service_file_name("{}", "/v1/user/list", "get", "moren");
        assert_eq!(name, "user-list");
    }

    #[test]
    fn test_resolve_service_file_name_custom_empty_list_fallback() {
        let mut cfg = Config::default();
        cfg.custom_file_names = Some(Box::new(|_operation_json, _path, _method| vec![]));
        let name = cfg.resolve_service_file_name("{}", "/v1/user/list", "get", "moren");
        assert_eq!(name, "moren");
    }

    #[test]
    fn test_resolve_url_path_default_and_custom() {
        let cfg = Config::default();
        assert_eq!(cfg.resolve_url_path("/v1/user/list"), "/v1/user/list");

        let mut cfg2 = Config::default();
        cfg2.custom_url_path = Some(Box::new(|path| format!("/admin{}", path)));
        assert_eq!(cfg2.resolve_url_path("/v1/user/list"), "/admin/v1/user/list");
    }

    #[test]
    fn test_resolve_should_generate_api_default_and_custom() {
        let cfg = Config::default();
        assert!(cfg.resolve_should_generate_api("/v1/user/list", "get"));

        let mut cfg2 = Config::default();
        cfg2.fileter_gen_api_fn = Some(Box::new(|path, _method| !path.contains("internal")));
        assert!(!cfg2.resolve_should_generate_api("/v1/internal/user/list", "get"));
        assert!(cfg2.resolve_should_generate_api("/v1/user/list", "get"));
    }

    #[test]
    fn test_resolve_type_name_default_and_custom() {
        let cfg = Config::default();
        assert_eq!(
            cfg.resolve_type_name("#/components/schemas/user_profile"),
            "UserProfile"
        );

        let mut cfg2 = Config::default();
        cfg2.custom_type_name = Some(Box::new(|ref_path| format!("X{}", ref_path.len())));
        assert_eq!(
            cfg2.resolve_type_name("#/components/schemas/user_profile"),
            "X33"
        );
    }

    #[test]
    fn test_resolve_type_string_default_and_custom() {
        let cfg = Config::default();
        assert_eq!(
            cfg.resolve_type_string(r#"{"type":"string"}"#, "API", "string"),
            "string"
        );

        let mut cfg2 = Config::default();
        cfg2.custom_type = Some(Box::new(|_schema_json, namespace, origin_type| {
            format!("{}.Wrapped<{}>", namespace, origin_type)
        }));
        assert_eq!(
            cfg2.resolve_type_string(r#"{"type":"string"}"#, "API", "string"),
            "API.Wrapped<string>"
        );
    }

    #[test]
    fn test_resolve_type_string_custom_empty_fallback() {
        let mut cfg = Config::default();
        cfg.custom_type = Some(Box::new(|_schema_json, _namespace, _origin_type| {
            "   ".to_string()
        }));
        assert_eq!(
            cfg.resolve_type_string(r#"{"type":"string"}"#, "API", "string"),
            "string"
        );
    }
}