use openapiv3::{OpenAPI, Operation, ReferenceOr};

use crate::{
    generator_template::{
        interface_template_generator::Property,
        service_controller_template_generator::{
            ApiDefinition, HttpMethod as TemplateHttpMethod, JsonContentType, MediaTypeKind, Param,
            ParamSchema, Params, PathParams, QueryParams, RequestBody, RequestBodyType, Response,
        },
    },
    utles::{extract_type_name_from_ref, get_typescript_type_string},
};

/// 判断类型名称是否是 TypeScript 内置类型
fn is_typescript_builtin_type(type_name: &str) -> bool {
    matches!(
        type_name,
        "string"
            | "number"
            | "boolean"
            | "any"
            | "void"
            | "null"
            | "undefined"
            | "never"
            | "unknown"
            | "object"
            | "symbol"
            | "bigint"
    )
}

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
/// 只有完整的花括号对才会被转换，避免误转换
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
        // 不是路径变量，直接复制字符
        result.push(chars[i]);
        i += 1;
    }

    result
}

pub fn openapi_to_service_controller_template_data_list(
    openapi: &OpenAPI,
    namespace: &str,
) -> Result<Vec<ApiDefinition>, Box<dyn std::error::Error>> {
    let mut api_definitions: Vec<ApiDefinition> = Vec::new();

    for (path, method, operation) in openapi.operations() {
        let method = TemplateHttpMethod::from_string(method)?;
        let api_definition =
            convert_operation_to_api_definition(path, &method, operation, namespace)?;
        if let Some(api_definition) = api_definition {
            api_definitions.push(api_definition);
        }
    }

    Ok(api_definitions)
}

fn convert_operation_to_api_definition(
    path: &str,
    method: &TemplateHttpMethod,
    operation: &Operation,
    namespace: &str,
) -> Result<Option<ApiDefinition>, Box<dyn std::error::Error>> {
    // 生成函数名: 方法名+Path路径
    let function_name = generate_function_name(method, path);

    // 转换参数
    let params = convert_parameters(&operation.parameters, namespace)?;

    // 转换请求体
    let body = convert_request_body(&operation.request_body, namespace)?;

    // 转换响应
    let response = convert_responses(&operation.responses, namespace)?;

    // 计算布尔值
    let has_form_data = has_form_data(&body, &operation.request_body);
    let has_path_variables = path.contains('{');
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

// 生成函数名: 方法名+Path路径
fn generate_function_name(method: &TemplateHttpMethod, path: &str) -> String {
    // 从路径中提取资源名，消除 '/', '-','{}'
    let resource = path
        .split('/')
        .filter(|s| !s.is_empty() && !s.starts_with('{')) // 过滤空字符串和路径参数
        .flat_map(|segment| segment.split('-')) // 按短横线分割
        .filter(|s| !s.is_empty()) // 过滤空字符串
        .collect::<Vec<_>>()
        .join(""); // 拼接所有单词

    format!("{}{}", method.to_string(), capitalize(&resource))
}

fn capitalize(s: &str) -> String {
    let mut chars = s.chars();
    match chars.next() {
        None => String::new(),
        Some(first) => first.to_uppercase().collect::<String>() + chars.as_str(),
    }
}

fn convert_parameters(
    parameters: &Vec<openapiv3::ReferenceOr<openapiv3::Parameter>>,
    _namespace: &str,
) -> Result<Option<Params>, Box<dyn std::error::Error>> {
    if !parameters.is_empty() {
        let mut query_params = Vec::new();
        let mut path_params = Vec::new();
        let mut header_params = Vec::new();

        for param_ref in parameters {
            match param_ref {
                ReferenceOr::Item(param) => {
                    let param_data = param.clone().parameter_data();
                    let param_type = "string".to_string();

                    let template_param = Param {
                        name: param_data.name.clone(),
                        param_type: param_type.clone(),
                        required: param_data.required,
                        description: param_data.description.clone(),
                        schema: Some(ParamSchema {
                            default: None, // TODO: 提取默认值
                        }),
                    };

                    match param {
                        openapiv3::Parameter::Query { .. } => query_params.push(template_param),
                        openapiv3::Parameter::Path { .. } => path_params.push(template_param),
                        openapiv3::Parameter::Header { .. } => header_params.push(template_param),
                        // Cookie 参数会被浏览器自动携带，前端代码无需处理
                        openapiv3::Parameter::Cookie { .. } => {
                            // 忽略 Cookie 参数，浏览器会自动携带
                            continue;
                        }
                    }
                }
                ReferenceOr::Reference { reference: _ } => {
                    // TODO: 处理参数引用
                    continue;
                }
            }
        }

        if query_params.is_empty() && path_params.is_empty() && header_params.is_empty() {
            Ok(None)
        } else {
            Ok(Some(Params {
                query: if !query_params.is_empty() {
                    Some(QueryParams::Inline {
                        params: query_params,
                    })
                } else {
                    None
                },
                path: if !path_params.is_empty() {
                    Some(PathParams::Inline {
                        params: path_params,
                    })
                } else {
                    None
                },
                header: if !header_params.is_empty() {
                    Some(header_params)
                } else {
                    None
                },
            }))
        }
    } else {
        Ok(None)
    }
}

fn convert_request_body(
    request_body: &Option<openapiv3::ReferenceOr<openapiv3::RequestBody>>,
    namespace: &str,
) -> Result<Option<RequestBody>, Box<dyn std::error::Error>> {
    if let Some(body_ref) = request_body {
        match body_ref {
            ReferenceOr::Item(body) => {
                // 获取第一个 content type 的 schema
                if let Some((media_type_str, media_type_obj)) = body.content.iter().next() {
                    let media_type = MediaTypeKind::from_str(media_type_str);

                    // 根据媒体类型和 schema 决定 body_type
                    let body_type = if let Some(schema) = &media_type_obj.schema {
                        match &media_type {
                            MediaTypeKind::ApplicationJson => {
                                // JSON 类型：区分内联和引用
                                let content = match schema {
                                    ReferenceOr::Item(_) => {
                                        // 尝试提取 properties
                                        let properties_list = convert_schema_to_properties(schema)?;
                                        if let Some(properties) = properties_list {
                                            JsonContentType::Inline { properties }
                                        } else {
                                            // 如果没有提取到 properties，使用 any 引用类型
                                            JsonContentType::Reference("any".to_string())
                                        }
                                    }
                                    ReferenceOr::Reference { reference } => {
                                        let type_name = extract_type_name_from_ref(reference);
                                        let type_name =
                                            add_namespace_if_needed(type_name, namespace);
                                        JsonContentType::Reference(type_name)
                                    }
                                };
                                RequestBodyType::Json { content }
                            }
                            MediaTypeKind::MultipartFormData => {
                                // 表单数据：通常是内联定义
                                let properties =
                                    convert_schema_to_properties(schema)?.unwrap_or_else(Vec::new);
                                RequestBodyType::FormData { properties }
                            }
                            MediaTypeKind::ApplicationFormUrlencoded => {
                                // URL 编码表单：通常是内联定义
                                let properties =
                                    convert_schema_to_properties(schema)?.unwrap_or_else(Vec::new);
                                RequestBodyType::FormUrlEncoded { properties }
                            }
                            _ => {
                                // 其他类型：使用引用
                                let type_ref = match schema {
                                    ReferenceOr::Reference { reference } => {
                                        let type_name = extract_type_name_from_ref(reference);
                                        add_namespace_if_needed(type_name, namespace)
                                    }
                                    ReferenceOr::Item(_) => "any".to_string(),
                                };
                                RequestBodyType::Other {
                                    media_type: media_type_str.clone(),
                                    type_ref,
                                }
                            }
                        }
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
                } else {
                    Ok(None)
                }
            }
            ReferenceOr::Reference { reference } => {
                let type_name = extract_type_name_from_ref(reference);
                let type_name = add_namespace_if_needed(type_name, namespace);
                // 对于引用类型，默认使用 application/json
                Ok(Some(RequestBody {
                    description: None,
                    body_type: RequestBodyType::Json {
                        content: JsonContentType::Reference(type_name),
                    },
                    required: true,
                }))
            }
        }
    } else {
        Ok(None)
    }
}

fn convert_schema_to_properties(
    schema: &openapiv3::ReferenceOr<openapiv3::Schema>,
) -> Result<Option<Vec<Property>>, Box<dyn std::error::Error>> {
    match schema {
        ReferenceOr::Item(schema) => {
            match &schema.schema_kind {
                openapiv3::SchemaKind::Type(openapiv3::Type::Object(object_type)) => {
                    let mut prop_list = Vec::new();
                    for (key, _prop_schema) in &object_type.properties {
                        prop_list.push(Property {
                            key: key.clone(),
                            value: "any".to_string(), // TODO: 更好的类型转换
                            is_required: object_type.required.contains(key),
                            desc: None, // TODO: 提取描述
                        });
                    }
                    Ok(Some(prop_list))
                }
                _ => Ok(None),
            }
        }
        ReferenceOr::Reference { reference: _ } => {
            // TODO: 处理schema引用
            Ok(None)
        }
    }
}

// 处理响应的类型
fn convert_responses(
    responses: &openapiv3::Responses,
    namespace: &str,
) -> Result<Response, Box<dyn std::error::Error>> {
    // 获取第一个成功响应
    let success_response = responses.responses.iter().find(|(code, _)| match code {
        openapiv3::StatusCode::Code(200) | openapiv3::StatusCode::Code(201) => true,
        openapiv3::StatusCode::Range(2..=2) => true,
        _ => false,
    });

    if let Some((_, response_ref)) = success_response {
        match response_ref {
            ReferenceOr::Item(response) => {
                if let Some(content_type) = response.content.keys().next() {
                    if let Some(media_type_obj) = response.content.get(content_type) {
                        let response_type = if let Some(schema) = &media_type_obj.schema {
                            match schema {
                                ReferenceOr::Item(schema) => {
                                    let type_name = get_typescript_type_string(
                                        &ReferenceOr::Item(Box::new(schema.clone())),
                                    )?;
                                    add_namespace_if_needed(type_name, namespace)
                                }
                                ReferenceOr::Reference { reference } => {
                                    let type_name = extract_type_name_from_ref(reference);
                                    add_namespace_if_needed(type_name, namespace)
                                }
                            }
                        } else {
                            "any".to_string()
                        };
                        return Ok(Response::Reference(response_type));
                    }
                }
            }
            ReferenceOr::Reference { reference } => {
                let response_type = extract_type_name_from_ref(reference);
                let response_type = add_namespace_if_needed(response_type, namespace);
                return Ok(Response::Reference(response_type));
            }
        }
    }

    Ok(Response::Reference("any".to_string()))
}

fn has_form_data(
    body: &Option<RequestBody>,
    _request_body: &Option<openapiv3::ReferenceOr<openapiv3::RequestBody>>,
) -> bool {
    // 使用 RequestBodyType 的 is_form_data 方法来判断
    if let Some(request_body) = body {
        request_body.body_type.is_form_data()
    } else {
        false
    }
}
