use serde::{Deserialize, Serialize};
use std::fmt;
use tera::{Context, Tera};

use crate::generator_template::interface_template_generator::Property;

/// 媒体类型枚举
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum MediaTypeKind {
    /// application/json
    #[serde(rename = "application/json")]
    ApplicationJson,
    /// application/xml
    #[serde(rename = "application/xml")]
    ApplicationXml,
    /// multipart/form-data
    #[serde(rename = "multipart/form-data")]
    MultipartFormData,
    /// application/x-www-form-urlencoded
    #[serde(rename = "application/x-www-form-urlencoded")]
    ApplicationFormUrlencoded,
    /// text/plain
    #[serde(rename = "text/plain")]
    TextPlain,
    /// text/html
    #[serde(rename = "text/html")]
    TextHtml,
    /// application/octet-stream
    #[serde(rename = "application/octet-stream")]
    ApplicationOctetStream,
    /// 其他类型
    Other(String),
}

impl MediaTypeKind {
    /// 从字符串创建 MediaTypeKind
    pub fn from_str(s: &str) -> Self {
        match s {
            "application/json" => MediaTypeKind::ApplicationJson,
            "application/xml" => MediaTypeKind::ApplicationXml,
            "multipart/form-data" => MediaTypeKind::MultipartFormData,
            "application/x-www-form-urlencoded" => MediaTypeKind::ApplicationFormUrlencoded,
            "text/plain" => MediaTypeKind::TextPlain,
            "text/html" => MediaTypeKind::TextHtml,
            "application/octet-stream" => MediaTypeKind::ApplicationOctetStream,
            other => MediaTypeKind::Other(other.to_string()),
        }
    }

    /// 转换为字符串
    pub fn as_str(&self) -> &str {
        match self {
            MediaTypeKind::ApplicationJson => "application/json",
            MediaTypeKind::ApplicationXml => "application/xml",
            MediaTypeKind::MultipartFormData => "multipart/form-data",
            MediaTypeKind::ApplicationFormUrlencoded => "application/x-www-form-urlencoded",
            MediaTypeKind::TextPlain => "text/plain",
            MediaTypeKind::TextHtml => "text/html",
            MediaTypeKind::ApplicationOctetStream => "application/octet-stream",
            MediaTypeKind::Other(s) => s.as_str(),
        }
    }
}

impl fmt::Display for MediaTypeKind {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.as_str())
    }
}

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

/// Query 参数类型（内联或引用）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "query_type", content = "value", rename_all = "snake_case")]
pub enum QueryParams {
    /// 内联类型：直接定义参数列表
    Inline { params: Vec<Param> },
    /// 引用类型：使用外部定义的类型名称
    Reference(String),
}

/// Path 参数类型（内联或引用）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "path_type", content = "value", rename_all = "snake_case")]
pub enum PathParams {
    /// 内联类型：直接定义参数列表
    Inline { params: Vec<Param> },
    /// 引用类型：使用外部定义的类型名称
    Reference(String),
}

/// 参数组
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Params {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub query: Option<QueryParams>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub path: Option<PathParams>,
    /// Header 只能是内联类型
    #[serde(skip_serializing_if = "Option::is_none")]
    pub header: Option<Vec<Param>>,
}

/// JSON 内容类型（内联或引用）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "content_type", content = "value", rename_all = "snake_case")]
pub enum JsonContentType {
    /// 内联类型：直接定义对象结构
    Inline { properties: Vec<Property> },
    /// 引用类型：使用外部定义的类型名称
    Reference(String),
}

/// 请求体类型（根据媒体类型区分）
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "body_type", rename_all = "snake_case")]
pub enum RequestBodyType {
    /// application/json
    Json {
        #[serde(flatten)]
        content: JsonContentType,
    },

    /// multipart/form-data - 表单数据
    #[serde(rename = "form_data")]
    FormData { properties: Vec<Property> },

    /// application/x-www-form-urlencoded - URL 编码表单
    #[serde(rename = "form_urlencoded")]
    FormUrlEncoded { properties: Vec<Property> },

    /// 其他类型（XML、纯文本等）
    Other {
        /// 媒体类型
        #[serde(rename = "mediaType")]
        media_type: String,
        /// 类型引用
        #[serde(rename = "typeRef")]
        type_ref: String,
    },
}

impl RequestBodyType {
    /// 判断是否为表单数据类型
    pub fn is_form_data(&self) -> bool {
        matches!(
            self,
            RequestBodyType::FormData { .. } | RequestBodyType::FormUrlEncoded { .. }
        )
    }
}

/// 请求体定义
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct RequestBody {
    /// 请求体描述
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    /// 请求体类型（包含媒体类型信息）
    #[serde(rename = "type")]
    pub body_type: RequestBodyType,
    /// 是否必需
    pub required: bool,
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
    #[serde(rename = "functionName")]
    pub function_name: String,
    pub method: HttpMethod,
    pub desc: Option<String>,
    pub path: String,
    /// 具有内联类型和引用类型的两种形态
    pub params: Option<Params>,
    /// 具有内联类型和引用类型的两种形态
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
                // 示例1: GET 请求，带路径参数
                ApiDefinition {
                    desc: Some("示例1: 获取用户信息".to_string()),
                    method: HttpMethod::Get,
                    function_name: "getUserById".to_string(),
                    path: "/api/users/{id}".to_string(),
                    params: Some(Params {
                        query: None,
                        path: Some(PathParams::Inline {
                            params: vec![Param {
                                name: "id".to_string(),
                                param_type: "string".to_string(),
                                required: true,
                                description: Some("用户ID".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            }],
                        }),
                        header: None,
                    }),
                    body: None,
                    file: None,
                    response: Response::Reference("User".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                // 示例2: POST 请求，JSON body（引用类型）
                ApiDefinition {
                    desc: Some("示例2:创建用户".to_string()),
                    method: HttpMethod::Post,
                    function_name: "createUser".to_string(),
                    path: "/api/users".to_string(),
                    params: None,
                    body: Some(RequestBody {
                        description: Some("创建用户的请求体".to_string()),
                        body_type: RequestBodyType::Json {
                            content: JsonContentType::Reference("CreateUserRequest".to_string()),
                        },
                        required: true,
                    }),
                    file: None,
                    response: Response::Reference("User".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: false,
                    has_api_prefix: true,
                },
                // 示例3: POST 请求，文件上传（单文件）
                ApiDefinition {
                    desc: Some("示例3:上传用户头像".to_string()),
                    method: HttpMethod::Post,
                    function_name: "uploadAvatar".to_string(),
                    path: "/api/users/{id}/avatar".to_string(),
                    params: Some(Params {
                        query: None,
                        path: Some(PathParams::Inline {
                            params: vec![Param {
                                name: "id".to_string(),
                                param_type: "string".to_string(),
                                required: true,
                                description: Some("用户ID".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            }],
                        }),
                        header: None,
                    }),
                    body: None,
                    file: Some(vec![FileParam {
                        title: "avatar".to_string(),
                        multiple: false,
                        required: true,
                    }]),
                    response: Response::Reference("UploadResult".to_string()),
                    options: None,
                    has_form_data: true,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                // 示例4: POST 请求，多文件上传 + 表单数据
                ApiDefinition {
                    desc: Some("示例4:批量上传文件".to_string()),
                    method: HttpMethod::Post,
                    function_name: "uploadFiles".to_string(),
                    path: "/api/files/upload".to_string(),
                    params: None,
                    body: Some(RequestBody {
                        description: Some("上传文件的元数据".to_string()),
                        body_type: RequestBodyType::FormData {
                            properties: vec![
                                Property {
                                    key: "folder".to_string(),
                                    value: "string".to_string(),
                                    is_required: true,
                                    desc: Some("目标文件夹".to_string()),
                                },
                                Property {
                                    key: "public".to_string(),
                                    value: "boolean".to_string(),
                                    is_required: false,
                                    desc: Some("是否公开".to_string()),
                                },
                            ],
                        },
                        required: true,
                    }),
                    file: Some(vec![FileParam {
                        title: "files".to_string(),
                        multiple: true,
                        required: true,
                    }]),
                    response: Response::Reference("UploadResult[]".to_string()),
                    options: None,
                    has_form_data: true,
                    has_path_variables: false,
                    has_api_prefix: true,
                },
                // 示例5: POST 请求，单文件上传 + JSON 数据
                ApiDefinition {
                    desc: Some("示例5:上传文件并提交元数据（JSON）".to_string()),
                    method: HttpMethod::Post,
                    function_name: "uploadFileWithMetadata".to_string(),
                    path: "/api/documents/upload".to_string(),
                    params: None,
                    body: Some(RequestBody {
                        description: Some("文档元数据".to_string()),
                        body_type: RequestBodyType::Json {
                            content: JsonContentType::Inline {
                                properties: vec![
                                    Property {
                                        key: "title".to_string(),
                                        value: "string".to_string(),
                                        is_required: true,
                                        desc: Some("文档标题".to_string()),
                                    },
                                    Property {
                                        key: "category".to_string(),
                                        value: "string".to_string(),
                                        is_required: true,
                                        desc: Some("分类".to_string()),
                                    },
                                    Property {
                                        key: "tags".to_string(),
                                        value: "string[]".to_string(),
                                        is_required: false,
                                        desc: Some("标签列表".to_string()),
                                    },
                                ],
                            },
                        },
                        required: true,
                    }),
                    file: Some(vec![FileParam {
                        title: "document".to_string(),
                        multiple: false,
                        required: true,
                    }]),
                    response: Response::Reference("DocumentInfo".to_string()),
                    options: None,
                    has_form_data: true,
                    has_path_variables: false,
                    has_api_prefix: true,
                },
                // 示例6: POST 请求，多文件上传 + JSON 数据（引用类型）
                ApiDefinition {
                    desc: Some("示例6:批量上传图片并提交相册信息".to_string()),
                    method: HttpMethod::Post,
                    function_name: "uploadPhotosToAlbum".to_string(),
                    path: "/api/albums/{albumId}/photos".to_string(),
                    params: Some(Params {
                        query: None,
                        path: Some(PathParams::Inline {
                            params: vec![Param {
                                name: "albumId".to_string(),
                                param_type: "string".to_string(),
                                required: true,
                                description: Some("相册ID".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            }],
                        }),
                        header: None,
                    }),
                    body: Some(RequestBody {
                        description: Some("相册更新信息".to_string()),
                        body_type: RequestBodyType::Json {
                            content: JsonContentType::Reference("AlbumUpdateInfo".to_string()),
                        },
                        required: true,
                    }),
                    file: Some(vec![FileParam {
                        title: "photos".to_string(),
                        multiple: true,
                        required: true,
                    }]),
                    response: Response::Reference("Album".to_string()),
                    options: None,
                    has_form_data: true,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                // 示例7: GET 请求，包含所有类型的参数（query、path、header）
                ApiDefinition {
                    desc: Some("示例7:获取商品详情（完整参数示例）".to_string()),
                    method: HttpMethod::Get,
                    function_name: "getProductDetail".to_string(),
                    path: "/api/products/{id}".to_string(),
                    params: Some(Params {
                        // Query 参数 - 内联
                        query: Some(QueryParams::Inline {
                            params: vec![
                                Param {
                                    name: "include".to_string(),
                                    param_type: "string".to_string(),
                                    required: false,
                                    description: Some("包含的关联数据".to_string()),
                                    schema: Some(ParamSchema {
                                        default: Some("images,reviews".to_string()),
                                    }),
                                },
                                Param {
                                    name: "locale".to_string(),
                                    param_type: "string".to_string(),
                                    required: false,
                                    description: Some("语言环境".to_string()),
                                    schema: Some(ParamSchema {
                                        default: Some("zh-CN".to_string()),
                                    }),
                                },
                                Param {
                                    name: "fields".to_string(),
                                    param_type: "string".to_string(),
                                    required: false,
                                    description: Some("指定返回的字段".to_string()),
                                    schema: Some(ParamSchema { default: None }),
                                },
                            ],
                        }),
                        // Path 参数 - 内联
                        path: Some(PathParams::Inline {
                            params: vec![Param {
                                name: "id".to_string(),
                                param_type: "string".to_string(),
                                required: true,
                                description: Some("商品ID".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            }],
                        }),
                        // Header 参数 - 内联（Header 只能是内联）
                        header: Some(vec![
                            Param {
                                name: "Authorization".to_string(),
                                param_type: "string".to_string(),
                                required: true,
                                description: Some("授权令牌".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            },
                            Param {
                                name: "X-Request-ID".to_string(),
                                param_type: "string".to_string(),
                                required: false,
                                description: Some("请求追踪ID".to_string()),
                                schema: Some(ParamSchema { default: None }),
                            },
                        ]),
                    }),
                    body: None,
                    file: None,
                    response: Response::Reference("ProductDetail".to_string()),
                    options: None,
                    has_form_data: false,
                    has_path_variables: true,
                    has_api_prefix: true,
                },
                // 示例8: GET 请求，使用 Query 引用类型
                ApiDefinition {
                    desc: Some("示例8:搜索产品（Query 引用类型）".to_string()),
                    method: HttpMethod::Get,
                    function_name: "searchProducts".to_string(),
                    path: "/api/products/search".to_string(),
                    params: Some(Params {
                        // Query 参数 - 引用类型
                        query: Some(QueryParams::Reference("ProductSearchQuery".to_string())),
                        path: None,
                        header: None,
                    }),
                    body: None,
                    file: None,
                    response: Response::Reference("ProductList".to_string()),
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
