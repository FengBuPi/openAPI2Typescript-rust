use serde::{Deserialize, Serialize};
use std::fmt;
use tera::{Context, Tera};

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
    pub param_type: String,
    pub required: bool,
    pub description: Option<String>,
    pub schema: Option<ParamSchema>,
}

/// 参数模式定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ParamSchema {
    pub default: Option<String>,
}

/// 参数组
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Params {
    pub query: Vec<Param>,
    pub path: Vec<Param>,
    /// 只能是内联类型形态
    pub header: Vec<Param>,
    pub cookie: Vec<Param>,
}

/// 请求体定义（枚举）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "body_type", content = "content", rename_all = "snake_case")]
pub enum RequestBody {
    /// 内联类型：直接在函数参数中定义对象结构
    Inline { properties: Vec<Property> },
    /// 引用类型：使用外部定义的类型名称
    Reference(String),
}

/// 文件参数定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct FileParam {
    pub title: String,
    pub multiple: bool,
    pub required: bool,
}

/// 响应定义（枚举）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "response_type", content = "content", rename_all = "snake_case")]
pub enum Response {
    /// 内联类型：直接定义响应对象结构
    Inline { properties: Vec<Property> },
    /// 引用类型：使用外部定义的类型名称
    Reference(String),
}

/// API 定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ApiDefinition {
    pub desc: Option<String>,
    pub method: HttpMethod,
    #[serde(rename = "functionName")]
    pub function_name: String,
    #[serde(rename = "typeName")]
    pub type_name: String,
    pub path: String,
    /// 具有内联类型和引用类型文件类型的两种形态
    pub params: Option<Params>,
    /// 具有内联类型和引用类型文件类型的两种形态
    pub body: Option<RequestBody>,
    pub file: Option<Vec<FileParam>>,
    pub response: Response,
    pub options: Option<serde_json::Value>,
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
                    function_name: "getUserById".to_string(),
                    type_name: "GetUserByIdParams".to_string(),
                    path: "/api/users/&{id}".to_string(),
                    params: Some(Params {
                        query: vec![],
                        path: vec![Param {
                            name: "id".to_string(),
                            param_type: "string".to_string(),
                            required: true,
                            description: Some("用户ID".to_string()),
                            schema: Some(ParamSchema { default: None }),
                        }],
                        header: vec![],
                        cookie: vec![],
                    }),
                    body: None,
                    file: None,
                    response: Response::Reference("User".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                ApiDefinition {
                    desc: Some("创建用户".to_string()),
                    method: HttpMethod::Post,
                    function_name: "createUser".to_string(),
                    type_name: "CreateUserParams".to_string(),
                    path: "/api/users".to_string(),
                    params: None,
                    body: Some(RequestBody::Inline {
                        properties: vec![
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
                        ],
                    }),
                    file: None,
                    response: Response::Reference("User".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: false,
                    has_api_prefix: true,
                },
                ApiDefinition {
                    desc: Some("更新用户信息".to_string()),
                    method: HttpMethod::Put,
                    function_name: "updateUserById".to_string(),
                    type_name: "UpdateUserByIdParams".to_string(),
                    path: "/api/users/{id}".to_string(),
                    params: Some(Params {
                        query: vec![
                            Param {
                                name: "include".to_string(),
                                param_type: "string".to_string(),
                                required: false,
                                description: Some("包含的字段".to_string()),
                                schema: Some(ParamSchema {
                                    default: Some("id,name,email".to_string()),
                                }),
                            },
                            Param {
                                name: "fields".to_string(),
                                param_type: "string".to_string(),
                                required: false,
                                description: Some("指定返回字段".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            },
                        ],
                        path: vec![Param {
                            name: "id".to_string(),
                            param_type: "string".to_string(),
                            required: true,
                            description: Some("用户ID".to_string()),
                            schema: Some(ParamSchema { default: None }),
                        }],
                        header: vec![Param {
                            name: "Authorization".to_string(),
                            param_type: "string".to_string(),
                            required: true,
                            description: Some("认证令牌".to_string()),
                            schema: Some(ParamSchema { default: None }),
                        }],
                        cookie: vec![],
                    }),
                    body: Some(RequestBody::Inline {
                        properties: vec![
                            Property {
                                key: "name".to_string(),
                                value: "string".to_string(),
                                is_required: false,
                                desc: Some("用户姓名".to_string()),
                            },
                            Property {
                                key: "email".to_string(),
                                value: "string".to_string(),
                                is_required: false,
                                desc: Some("用户邮箱".to_string()),
                            },
                            Property {
                                key: "age".to_string(),
                                value: "number".to_string(),
                                is_required: false,
                                desc: Some("用户年龄".to_string()),
                            },
                        ],
                    }),
                    file: None,
                    response: Response::Reference("User".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
            ],
        };

        let result = generate_service_controller_typescript(template_data)?;
        std::fs::write("service_controller.ts", result)?;
        Ok(())
    }
}
