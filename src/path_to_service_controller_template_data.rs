use heck::ToPascalCase;
use openapiv3::{OpenAPI, Operation, ReferenceOr};

use crate::{
    generator_template::{
        interface_template_generator::Property,
        service_controller_template_generator::{
            ApiDefinition, HttpMethod as TemplateHttpMethod, JsonContentType, MediaTypeKind, Param,
            Params, PathParams, QueryParams, RequestBody, RequestBodyType, Response,
        },
    },
    utles::{
        extract_type_name_from_ref, get_typescript_type_string, is_typescript_builtin_type,
        needs_quotes_for_param_name,
    },
};

/// 为类型名称添加 namespace 前缀（如果需要）
/// 对于 TypeScript 内置类型，不添加前缀；对于自定义类型，添加 namespace 前缀
/// 支持数组类型和泛型类型
fn add_namespace_if_needed(type_name: String, namespace: &str) -> String {
    // 如果是内置类型，直接返回
    if is_typescript_builtin_type(&type_name) {
        return type_name;
    }

    // 处理数组类型，如 "MyType[]" -> "API.MyType[]"
    if type_name.ends_with("[]") {
        let base_type = &type_name[..type_name.len() - 2];
        if is_typescript_builtin_type(base_type) {
            return type_name;
        }
        return format!("{}.{}[]", namespace, base_type);
    }

    // 处理泛型类型，如 "Array<MyType>" -> "Array<API.MyType>"
    if let Some(start_idx) = type_name.find('<') {
        if let Some(end_idx) = type_name.rfind('>') {
            let generic_name = &type_name[..start_idx];
            let inner_type = &type_name[start_idx + 1..end_idx];

            // 对于常见的泛型容器类型，递归处理内部类型
            if matches!(
                generic_name,
                "Array"
                    | "Record"
                    | "Promise"
                    | "Map"
                    | "Set"
                    | "Partial"
                    | "Required"
                    | "Readonly"
                    | "Pick"
                    | "Omit"
            ) {
                let processed_inner = add_namespace_if_needed(inner_type.to_string(), namespace);
                return format!("{}<{}>", generic_name, processed_inner);
            }
        }
    }

    // 普通自定义类型，直接添加 namespace
    format!("{}.{}", namespace, type_name)
}

/// 将 OpenAPI 路径格式转换为 TypeScript 模板字符串格式
/// 例如：/user/{id}/profile -> /user/${id}/profile
///
/// # 功能说明
/// 只转换**完整的**花括号对 `{variable}`，避免误转换不完整的花括号。
/// 这样可以处理 OpenAPI 文档中可能存在的格式错误。
///
/// # 示例
/// - `/user/{id}/profile` -> `/user/${id}/profile` ✅
/// - `/user/{id}/tag/{tag_id}/update` -> `/user/${id}/tag/${tag_id}/update` ✅
/// - `/user/{id}/tag/{tag_id/error` -> `/user/${id}/tag/{tag_id/error` ⚠️ 保持原样
///
/// # 参数
/// * `path` - 原始路径字符串
///
/// # 返回值
/// 转换后的路径字符串
fn convert_path_to_template_string(path: &str) -> String {
    let mut result = String::with_capacity(path.len() + 10);
    let chars: Vec<char> = path.chars().collect();
    let mut i = 0;

    while i < chars.len() {
        if chars[i] == '{' {
            // 找到开始的花括号，寻找匹配的结束花括号
            if let Some(end_pos) = chars[i + 1..].iter().position(|&c| c == '}') {
                let close_pos = i + 1 + end_pos;
                // 确保花括号之间有内容
                if close_pos > i + 1 {
                    // 这是一个完整的路径变量，转换为 ${variable}
                    result.push('$');
                    result.push('{');
                    // 复制变量名
                    for j in (i + 1)..close_pos {
                        result.push(chars[j]);
                    }
                    result.push('}');
                    i = close_pos + 1;
                    continue;
                }
            }
        }
        // 不是完整的路径变量，直接复制字符
        result.push(chars[i]);
        i += 1;
    }

    result
}

/// 将 OpenAPI 定义转换为服务控制器模板数据列表
///
/// # 功能说明
/// 遍历 OpenAPI 文档中的所有操作（API端点），将每个操作转换为
/// TypeScript 服务控制器函数定义所需的数据结构。
///
/// # 参数
/// * `openapi` - OpenAPI 文档对象
/// * `namespace` - TypeScript 类型的命名空间（如 "API"）
///
/// # 返回值
/// * `Ok(Vec<ApiDefinition>)` - API 定义列表
/// * `Err(Box<dyn std::error::Error>)` - 转换过程中的错误
pub fn openapi_to_service_controller_template_data_list(
    openapi: &OpenAPI,
    namespace: &str,
) -> Result<Vec<ApiDefinition>, Box<dyn std::error::Error>> {
    let api_definitions = openapi
        .operations()
        .filter_map(|(path, method, operation)| {
            let method = TemplateHttpMethod::from_string(method).ok()?;
            convert_operation_to_api_definition(path, &method, operation, namespace)
                .ok()
                .flatten()
        })
        .collect();

    Ok(api_definitions)
}

/// 将单个 OpenAPI 操作转换为 API 定义
///
/// # 功能说明
/// 解析 OpenAPI 的 Operation 对象，提取其中的参数、请求体、响应等信息，
/// 转换为生成 TypeScript 服务控制器函数所需的数据结构。
///
/// # 参数
/// * `path` - API 路径（如 "/user/{id}/profile"）
/// * `method` - HTTP 方法
/// * `operation` - OpenAPI 操作对象
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// * `Ok(Some(ApiDefinition))` - 转换成功的 API 定义
/// * `Ok(None)` - 操作无效，跳过
/// * `Err(...)` - 转换失败
fn convert_operation_to_api_definition(
    path: &str,
    method: &TemplateHttpMethod,
    operation: &Operation,
    namespace: &str,
) -> Result<Option<ApiDefinition>, Box<dyn std::error::Error>> {
    // 生成函数名: 方法名+Path路径
    let function_name = generate_function_name(method, path);

    // 转换各个部分
    let params = convert_parameters(&operation.parameters, namespace)?;
    let body = convert_request_body(&operation.request_body, namespace)?;
    let response = convert_responses(&operation.responses, namespace)?;

    // 计算元数据标志
    let has_path_variables = path.contains('{');
    let has_form_data = body
        .as_ref()
        .map(|b| b.body_type.is_form_data())
        .unwrap_or(false);
    let has_api_prefix = path.starts_with('/');

    // 将路径中的 {variable} 转换为 ${variable}，用于 TypeScript 模板字符串
    let converted_path = if has_path_variables {
        convert_path_to_template_string(path)
    } else {
        path.to_string()
    };

    Ok(Some(ApiDefinition {
        function_name,
        desc: operation.description.clone(),
        method: method.clone(),
        path: converted_path,
        origin_path: path.to_string(),
        params,
        body,
        file: None, // TODO: 实现文件参数转换
        response,
        options: None,
        has_form_data,
        has_path_variables,
        has_api_prefix,
    }))
}

/// 生成函数名: 方法名 + 路径资源名（camelCase）
///
/// # 功能说明
/// 根据 HTTP 方法和 API 路径生成符合 TypeScript 命名规范的函数名。
///
/// # 生成规则
/// 1. 按 '/' 分割路径
/// 2. 过滤空字符串和路径参数（如 {id}）
/// 3. 按 '-' 分割每个段落
/// 4. 将所有单词拼接
/// 5. 组合：方法名（小写）+ 资源名（首字母大写）
///
/// # 示例
/// - `POST /api/users` -> `postApiUsers`
/// - `GET /user/{id}/profile` -> `getUserProfile`
/// - `DELETE /api/create-order` -> `deleteApiCreateOrder`
///
/// # 参数
/// * `method` - HTTP 方法
/// * `path` - API 路径
///
/// # 返回值
/// 生成的函数名（camelCase 格式）
fn generate_function_name(method: &TemplateHttpMethod, path: &str) -> String {
    // 从路径中提取资源名，消除 '/', '-','{}'
    let resource = path
        .split('/')
        .filter(|s| !s.is_empty() && !s.starts_with('{')) // 过滤空字符串和路径参数
        .flat_map(|segment| segment.split('-')) // 按短横线分割
        .filter(|s| !s.is_empty()) // 过滤空字符串
        .collect::<Vec<_>>()
        .join(""); // 拼接所有单词

    format!("{}{}", method.to_string(), resource.to_pascal_case())
}

/// 从参数的 ParameterSchemaOrContent 中提取 TypeScript 类型
///
/// # 功能说明
/// 根据 OpenAPI 参数的 schema 定义，提取对应的 TypeScript 类型字符串。
/// 支持 Schema 和 Content 两种参数格式。
///
/// # 参数
/// * `param_format` - 参数的 schema 或 content 定义
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// TypeScript 类型字符串（如 "string", "number", "API.User" 等）
fn extract_param_type(
    param_format: &openapiv3::ParameterSchemaOrContent,
    namespace: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    match param_format {
        openapiv3::ParameterSchemaOrContent::Schema(schema_ref) => {
            // 将 ReferenceOr<Schema> 转换为 ReferenceOr<Box<Schema>>
            let boxed_schema = match schema_ref {
                ReferenceOr::Reference { reference } => ReferenceOr::Reference {
                    reference: reference.clone(),
                },
                ReferenceOr::Item(schema) => ReferenceOr::Item(Box::new(schema.clone())),
            };
            let type_name = get_typescript_type_string(&boxed_schema)?;
            Ok(add_namespace_if_needed(type_name, namespace))
        }
        openapiv3::ParameterSchemaOrContent::Content(_content) => {
            // Content 类型比较复杂，暂时使用 any
            Ok("any".to_string())
        }
    }
}

/// 转换 OpenAPI 参数列表为模板参数结构
///
/// # 功能说明
/// 将 OpenAPI 的参数列表转换为模板所需的参数结构，
/// 按类型分类为 query、path、header 三种参数。
///
/// # 参数
/// * `parameters` - OpenAPI 参数列表
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// * `Ok(Some(Params))` - 转换后的参数结构
/// * `Ok(None)` - 没有参数
/// * `Err(...)` - 转换失败
fn convert_parameters(
    parameters: &Vec<openapiv3::ReferenceOr<openapiv3::Parameter>>,
    namespace: &str,
) -> Result<Option<Params>, Box<dyn std::error::Error>> {
    if parameters.is_empty() {
        return Ok(None);
    }

    let mut query_params = Vec::new();
    let mut path_params = Vec::new();
    let mut header_params = Vec::new();

    for param_ref in parameters {
        match param_ref {
            ReferenceOr::Item(param) => {
                let param_data = param.parameter_data_ref();

                // 从 schema 中提取参数类型
                let param_type = extract_param_type(&param_data.format, namespace)?;

                // 检查参数名是否需要引号
                let needs_quotes = needs_quotes_for_param_name(&param_data.name);

                let template_param = Param {
                    name: param_data.name.clone(),
                    param_type,
                    required: param_data.required,
                    description: param_data.description.clone(),
                    needs_quotes,
                };

                match param {
                    openapiv3::Parameter::Query { .. } => query_params.push(template_param),
                    openapiv3::Parameter::Path { .. } => path_params.push(template_param),
                    openapiv3::Parameter::Header { .. } => header_params.push(template_param),
                    // Cookie 参数会被浏览器自动携带，前端代码无需处理
                    openapiv3::Parameter::Cookie { .. } => continue,
                }
            }
            ReferenceOr::Reference { .. } => {
                // 参数引用类型比较少见，暂时跳过
                continue;
            }
        }
    }

    if query_params.is_empty() && path_params.is_empty() && header_params.is_empty() {
        return Ok(None);
    }

    Ok(Some(Params {
        query: create_query_params(query_params),
        path: create_path_params(path_params),
        header: create_header_params(header_params),
    }))
}

/// 创建 Query 参数（如果有）
fn create_query_params(params: Vec<Param>) -> Option<QueryParams> {
    if params.is_empty() {
        None
    } else {
        Some(QueryParams::Inline { params })
    }
}

/// 创建 Path 参数（如果有）
fn create_path_params(params: Vec<Param>) -> Option<PathParams> {
    if params.is_empty() {
        None
    } else {
        Some(PathParams::Inline { params })
    }
}

/// 创建 Header 参数（如果有）
fn create_header_params(params: Vec<Param>) -> Option<Vec<Param>> {
    if params.is_empty() {
        None
    } else {
        Some(params)
    }
}

/// 将 Schema 转换为 JSON 内容类型
///
/// # 功能说明
/// 将 OpenAPI Schema 转换为 JSON 请求体的内容类型定义。
/// 区分内联定义（Inline）和引用类型（Reference）。
///
/// # 参数
/// * `schema` - OpenAPI Schema 对象
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// JsonContentType 枚举（Inline 或 Reference）
fn convert_schema_to_json_content(
    schema: &ReferenceOr<openapiv3::Schema>,
    namespace: &str,
) -> Result<JsonContentType, Box<dyn std::error::Error>> {
    match schema {
        ReferenceOr::Item(_) => {
            // 尝试提取 properties
            if let Some(properties) = convert_schema_to_properties(schema)? {
                Ok(JsonContentType::Inline { properties })
            } else {
                // 如果没有提取到 properties，使用 any 引用类型
                Ok(JsonContentType::Reference("any".to_string()))
            }
        }
        ReferenceOr::Reference { reference } => {
            let type_name = extract_type_name_from_ref(reference);
            let type_name = add_namespace_if_needed(type_name, namespace);
            Ok(JsonContentType::Reference(type_name))
        }
    }
}

/// 根据媒体类型和 schema 转换为 RequestBodyType
///
/// # 功能说明
/// 根据不同的媒体类型（JSON、FormData、FormUrlEncoded 等），
/// 将 OpenAPI Schema 转换为对应的请求体类型定义。
///
/// # 支持的媒体类型
/// - `application/json` -> RequestBodyType::Json
/// - `multipart/form-data` -> RequestBodyType::FormData
/// - `application/x-www-form-urlencoded` -> RequestBodyType::FormUrlEncoded
/// - 其他类型 -> RequestBodyType::Other
///
/// # 参数
/// * `media_type` - 媒体类型枚举
/// * `media_type_str` - 媒体类型字符串
/// * `schema` - OpenAPI Schema 对象
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// RequestBodyType 枚举
fn convert_media_type_to_body_type(
    media_type: &MediaTypeKind,
    media_type_str: &str,
    schema: &ReferenceOr<openapiv3::Schema>,
    namespace: &str,
) -> Result<RequestBodyType, Box<dyn std::error::Error>> {
    match media_type {
        MediaTypeKind::ApplicationJson => {
            let content = convert_schema_to_json_content(schema, namespace)?;
            Ok(RequestBodyType::Json { content })
        }
        MediaTypeKind::MultipartFormData => {
            let properties = convert_schema_to_properties(schema)?.unwrap_or_default();
            Ok(RequestBodyType::FormData { properties })
        }
        MediaTypeKind::ApplicationFormUrlencoded => {
            let properties = convert_schema_to_properties(schema)?.unwrap_or_default();
            Ok(RequestBodyType::FormUrlEncoded { properties })
        }
        _ => {
            let type_ref = match schema {
                ReferenceOr::Reference { reference } => {
                    let type_name = extract_type_name_from_ref(reference);
                    add_namespace_if_needed(type_name, namespace)
                }
                ReferenceOr::Item(_) => "any".to_string(),
            };
            Ok(RequestBodyType::Other {
                media_type: media_type_str.to_string(),
                type_ref,
            })
        }
    }
}

/// 转换 OpenAPI 请求体定义
///
/// # 功能说明
/// 将 OpenAPI RequestBody 转换为模板所需的请求体定义，
/// 包括媒体类型、schema、是否必需等信息。
///
/// # 参数
/// * `request_body` - OpenAPI 请求体定义（可选）
/// * `namespace` - TypeScript 类型命名空间
///
/// # 返回值
/// * `Ok(Some(RequestBody))` - 转换后的请求体定义
/// * `Ok(None)` - 没有请求体
/// * `Err(...)` - 转换失败
fn convert_request_body(
    request_body: &Option<openapiv3::ReferenceOr<openapiv3::RequestBody>>,
    namespace: &str,
) -> Result<Option<RequestBody>, Box<dyn std::error::Error>> {
    let body_ref = match request_body {
        Some(body) => body,
        None => return Ok(None),
    };

    match body_ref {
        ReferenceOr::Item(body) => {
            // 获取第一个 content type 的 schema
            let (media_type_str, media_type_obj) = match body.content.iter().next() {
                Some(content) => content,
                None => return Ok(None),
            };

            let media_type = MediaTypeKind::from_str(media_type_str);
            let body_type = if let Some(schema) = &media_type_obj.schema {
                convert_media_type_to_body_type(&media_type, media_type_str, schema, namespace)?
            } else {
                // 没有 schema，默认使用 any 类型
                RequestBodyType::Json {
                    content: JsonContentType::Reference("any".to_string()),
                }
            };

            Ok(Some(RequestBody {
                description: body.description.clone(),
                body_type,
                required: body.required,
            }))
        }
        ReferenceOr::Reference { reference } => {
            let type_name = extract_type_name_from_ref(reference);
            let type_name = add_namespace_if_needed(type_name, namespace);
            Ok(Some(RequestBody {
                description: None,
                body_type: RequestBodyType::Json {
                    content: JsonContentType::Reference(type_name),
                },
                required: true,
            }))
        }
    }
}

/// 将 OpenAPI Schema 转换为属性列表
///
/// # 功能说明
/// 从 OpenAPI Schema 对象中提取属性定义，包括每个属性的：
/// - 属性名
/// - TypeScript 类型
/// - 是否必需
/// - 描述信息
///
/// # 参数
/// * `schema` - OpenAPI Schema 对象（引用或内联）
///
/// # 返回值
/// * `Ok(Some(Vec<Property>))` - 属性列表
/// * `Ok(None)` - 不是对象类型或是引用类型
/// * `Err(...)` - 转换失败
fn convert_schema_to_properties(
    schema: &openapiv3::ReferenceOr<openapiv3::Schema>,
) -> Result<Option<Vec<Property>>, Box<dyn std::error::Error>> {
    match schema {
        ReferenceOr::Item(schema) => match &schema.schema_kind {
            openapiv3::SchemaKind::Type(openapiv3::Type::Object(object_type)) => {
                let mut prop_list = Vec::new();
                for (key, prop_schema) in &object_type.properties {
                    // 提取属性的类型
                    let value = match prop_schema {
                        ReferenceOr::Reference { reference } => {
                            // 引用类型：直接使用类型名
                            extract_type_name_from_ref(reference)
                        }
                        ReferenceOr::Item(prop_box) => {
                            // 内联类型：递归转换，prop_box 已经是 Box<Schema>
                            get_typescript_type_string(&ReferenceOr::Item(prop_box.clone()))?
                        }
                    };

                    // 提取属性的描述
                    let desc = match prop_schema {
                        ReferenceOr::Item(prop_box) => prop_box.schema_data.description.clone(),
                        ReferenceOr::Reference { .. } => None,
                    };

                    prop_list.push(Property {
                        key: key.clone(),
                        value,
                        is_required: object_type.required.contains(key),
                        desc,
                    });
                }
                Ok(Some(prop_list))
            }
            _ => Ok(None),
        },
        ReferenceOr::Reference { .. } => {
            // 引用类型：无法直接展开为属性列表，返回 None
            // 调用方应该使用引用类型而不是内联属性
            Ok(None)
        }
    }
}

/// 判断状态码是否为成功响应
fn is_success_status_code(code: &openapiv3::StatusCode) -> bool {
    matches!(
        code,
        openapiv3::StatusCode::Code(200)
            | openapiv3::StatusCode::Code(201)
            | openapiv3::StatusCode::Range(2..=2)
    )
}

/// 从响应 schema 中提取类型字符串
fn extract_response_type_from_schema(
    schema: &ReferenceOr<openapiv3::Schema>,
    namespace: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    match schema {
        ReferenceOr::Item(schema) => {
            let type_name =
                get_typescript_type_string(&ReferenceOr::Item(Box::new(schema.clone())))?;
            Ok(add_namespace_if_needed(type_name, namespace))
        }
        ReferenceOr::Reference { reference } => {
            let type_name = extract_type_name_from_ref(reference);
            Ok(add_namespace_if_needed(type_name, namespace))
        }
    }
}

/// 处理响应的类型
fn convert_responses(
    responses: &openapiv3::Responses,
    namespace: &str,
) -> Result<Response, Box<dyn std::error::Error>> {
    // 获取第一个成功响应
    let success_response = responses
        .responses
        .iter()
        .find(|(code, _)| is_success_status_code(code));

    let (_, response_ref) = match success_response {
        Some(resp) => resp,
        None => return Ok(Response::Reference("any".to_string())),
    };

    match response_ref {
        ReferenceOr::Item(response) => {
            // 获取第一个 content type
            let content_type = match response.content.keys().next() {
                Some(ct) => ct,
                None => return Ok(Response::Reference("any".to_string())),
            };

            let media_type_obj = match response.content.get(content_type) {
                Some(obj) => obj,
                None => return Ok(Response::Reference("any".to_string())),
            };

            let response_type = if let Some(schema) = &media_type_obj.schema {
                extract_response_type_from_schema(schema, namespace)?
            } else {
                "any".to_string()
            };

            Ok(Response::Reference(response_type))
        }
        ReferenceOr::Reference { reference } => {
            let response_type = extract_type_name_from_ref(reference);
            let response_type = add_namespace_if_needed(response_type, namespace);
            Ok(Response::Reference(response_type))
        }
    }
}
