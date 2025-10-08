use serde::{Deserialize, Serialize};
use std::fmt;
use tera::{Context, Tera};

// 导入 interface_template_generator 中的 Property 定义
use crate::generator_template::interface_template_generator::Property;

/// HTTP 方法枚举
#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum HttpMethod {
    #[serde(rename = "get")]
    Get,
    #[serde(rename = "post")]
    Post,
    #[serde(rename = "put")]
    Put,
    #[serde(rename = "delete")]
    Delete,
    #[serde(rename = "patch")]
    Patch,
    #[serde(rename = "head")]
    Head,
    #[serde(rename = "options")]
    Options,
}

impl fmt::Display for HttpMethod {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            HttpMethod::Get => write!(f, "get"),
            HttpMethod::Post => write!(f, "post"),
            HttpMethod::Put => write!(f, "put"),
            HttpMethod::Delete => write!(f, "delete"),
            HttpMethod::Patch => write!(f, "patch"),
            HttpMethod::Head => write!(f, "head"),
            HttpMethod::Options => write!(f, "options"),
        }
    }
}

impl HttpMethod {
    pub fn from_string(method: &str) -> Result<HttpMethod, Box<dyn std::error::Error>> {
        match method {
            "get" => Ok(HttpMethod::Get),
            "post" => Ok(HttpMethod::Post),
            "put" => Ok(HttpMethod::Put),
            "delete" => Ok(HttpMethod::Delete),
            "patch" => Ok(HttpMethod::Patch),
            "head" => Ok(HttpMethod::Head),
            "options" => Ok(HttpMethod::Options),
            _ => Ok(HttpMethod::Post), // 不支持的http方法，降级为post请求
        }
    }
}

/// 参数类型枚举
#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum ParamLocation {
    #[serde(rename = "query")]
    Query,
    #[serde(rename = "path")]
    Path,
    #[serde(rename = "header")]
    Header,
    #[serde(rename = "cookie")]
    Cookie,
}

/// 参数定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Param {
    pub name: String,
    pub alias: Option<String>,
    pub param_type: String,
    pub required: bool,
    pub description: Option<String>,
    pub location: ParamLocation,
    pub schema: Option<ParamSchema>,
}

/// 参数模式定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ParamSchema {
    pub param_type: String,
    pub required: bool,
    pub default: Option<String>,
    pub description: Option<String>,
}

/// 参数组
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Params {
    pub query: Vec<Param>,
    pub path: Vec<Param>,
    pub header: Vec<Param>,
    pub cookie: Vec<Param>,
}

impl Params {
    #[allow(dead_code)]
    pub fn has_params(&self) -> bool {
        !self.query.is_empty()
            || !self.path.is_empty()
            || !self.header.is_empty()
            || !self.cookie.is_empty()
    }
}

/// 请求体定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct RequestBody {
    pub r#type: String,
    pub media_type: Option<String>,
    pub properties_list: Option<Vec<Property>>,
}

/// 文件参数定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct FileParam {
    pub title: String,
    pub multiple: bool,
    pub required: bool,
}

/// 响应定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Response {
    pub r#type: String,
}

/// API 定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ApiDefinition {
    pub desc: Option<String>,
    pub method: HttpMethod,
    #[serde(rename = "pathInComment")]
    pub path_in_comment: String,
    #[serde(rename = "functionName")]
    pub function_name: String,
    #[serde(rename = "typeName")]
    pub type_name: String,
    pub path: String,
    pub params: Option<Params>,
    pub body: Option<RequestBody>,
    pub file: Option<Vec<FileParam>>,
    pub response: Response,
    pub options: Option<serde_json::Value>,
    // #[serde(rename = "hasParams")]
    // pub has_params: bool,
    // #[serde(rename = "hasHeader")]
    // pub has_header: bool,
    #[serde(rename = "hasFormData")]
    pub has_form_data: bool,
    #[serde(rename = "hasPathVariables")]
    pub has_path_variables: bool,
    #[serde(rename = "hasApiPrefix")]
    pub has_api_prefix: bool,
}

/// 服务控制器模板数据
#[derive(Serialize, Deserialize, Debug)]
pub struct ServiceControllerTemplateData {
    pub request_import_statement: String,
    pub namespace: String,
    pub gen_type: String,
    pub request_options_type: String,
    pub list: Vec<ApiDefinition>,
}

/// 生成服务控制器 TypeScript 代码
#[allow(dead_code)]
pub fn generate_service_controller_typescript(
    template_data: ServiceControllerTemplateData,
) -> Result<String, Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let tera = Tera::new("templates/**/*.tera")?;

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert(
        "requestImportStatement",
        &template_data.request_import_statement,
    );
    context.insert("namespace", &template_data.namespace);
    context.insert("gen_type", &template_data.gen_type);
    context.insert("request_options_type", &template_data.request_options_type);
    context.insert("list", &template_data.list);

    // 渲染模板
    let rendered = tera.render("service_controller.tera", &context)?;

    Ok(rendered)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_generate_service_controller() -> Result<(), Box<dyn std::error::Error>> {
        let template_data = ServiceControllerTemplateData {
            request_import_statement: "import request, { RequestOptions } from '@/utils/request';"
                .to_string(),
            namespace: "MyAPI".to_string(),
            gen_type: "ts".to_string(),
            request_options_type: "RequestOptions".to_string(),
            list: vec![
                ApiDefinition {
                    desc: Some("获取用户信息".to_string()),
                    method: HttpMethod::Get,
                    path_in_comment: "/api/users/{id}".to_string(),
                    function_name: "getUserById".to_string(),
                    type_name: "GetUserByIdParams".to_string(),
                    path: "/api/users/{id}".to_string(),
                    params: Some(Params {
                        query: vec![],
                        path: vec![Param {
                            name: "id".to_string(),
                            alias: Some("id".to_string()),
                            param_type: "string".to_string(),
                            required: true,
                            description: Some("用户ID".to_string()),
                            location: ParamLocation::Path,
                            schema: Some(ParamSchema {
                                param_type: "string".to_string(),
                                required: true,
                                default: None,
                                description: Some("用户ID".to_string()),
                            }),
                        }],
                        header: vec![],
                        cookie: vec![],
                    }),
                    body: None,
                    file: None,
                    response: Response {
                        r#type: "User".to_string(),
                    },
                    options: None,
                    // has_params: true,
                    // has_header: false,
                    has_form_data: false,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                ApiDefinition {
                    desc: Some("创建用户".to_string()),
                    method: HttpMethod::Post,
                    path_in_comment: "/api/users".to_string(),
                    function_name: "createUser".to_string(),
                    type_name: "CreateUserParams".to_string(),
                    path: "/api/users".to_string(),
                    params: None,
                    body: Some(RequestBody {
                        r#type: "CreateUserRequest".to_string(),
                        media_type: Some("application/json".to_string()),
                        properties_list: Some(vec![
                            Property {
                                key: "name".to_string(),
                                value: "string".to_string(),
                                is_required: true,
                                desc: Some("用户姓名".to_string()),
                            },
                            Property {
                                key: "email".to_string(),
                                value: "string".to_string(),
                                is_required: false,
                                desc: Some("用户邮箱".to_string()),
                            },
                        ]),
                    }),
                    file: None,
                    response: Response {
                        r#type: "User".to_string(),
                    },
                    options: None,
                    has_form_data: false,
                    has_path_variables: false,
                    has_api_prefix: true,
                },
            ],
        };

        let result = generate_service_controller_typescript(template_data)?;
        std::fs::write("service_controller.ts", result)?;
        Ok(())
    }
}
