use openapiv3::{OpenAPI, Operation, ReferenceOr};

use crate::{
    generator_template::{
        interface_template_generator::Property,
        service_controller_template_generator::{
            ApiDefinition, HttpMethod as TemplateHttpMethod, Param, ParamLocation, ParamSchema,
            Params, RequestBody, Response,
        },
    },
    utles::{extract_type_name_from_ref, get_typescript_type_string},
};

pub fn openapi_to_service_controller_template_data_list(
    openapi: &OpenAPI,
) -> Result<Vec<ApiDefinition>, Box<dyn std::error::Error>> {
    let mut api_definitions: Vec<ApiDefinition> = Vec::new();

    for (path, path_item) in &openapi.paths.paths {
        match path_item {
            ReferenceOr::Item(path_item) => {
                // 处理 GET 方法
                if let Some(operation) = &path_item.get {
                    if let Some(api_def) = convert_operation_to_api_definition(
                        path,
                        &TemplateHttpMethod::Get,
                        operation,
                    )? {
                        api_definitions.push(api_def);
                    }
                }

                // 处理 POST 方法
                if let Some(operation) = &path_item.post {
                    if let Some(api_def) = convert_operation_to_api_definition(
                        path,
                        &TemplateHttpMethod::Post,
                        operation,
                    )? {
                        api_definitions.push(api_def);
                    }
                }

                // 处理 PUT 方法
                if let Some(operation) = &path_item.put {
                    if let Some(api_def) = convert_operation_to_api_definition(
                        path,
                        &TemplateHttpMethod::Put,
                        operation,
                    )? {
                        api_definitions.push(api_def);
                    }
                }

                // 处理 DELETE 方法
                if let Some(operation) = &path_item.delete {
                    if let Some(api_def) = convert_operation_to_api_definition(
                        path,
                        &TemplateHttpMethod::Delete,
                        operation,
                    )? {
                        api_definitions.push(api_def);
                    }
                }

                // 处理 PATCH 方法
                if let Some(operation) = &path_item.patch {
                    if let Some(api_def) = convert_operation_to_api_definition(
                        path,
                        &TemplateHttpMethod::Patch,
                        operation,
                    )? {
                        api_definitions.push(api_def);
                    }
                }
            }
            // TODO: 支持路径引用解析
            ReferenceOr::Reference { reference } => {
                println!(
                    "路径: {}属性为Reference对象: {}，暂不支持解析该场景",
                    path, reference
                );
                continue;
            }
        }
    }

    Ok(api_definitions)
}

fn convert_operation_to_api_definition(
    path: &str,
    method: &TemplateHttpMethod,
    operation: &Operation,
) -> Result<Option<ApiDefinition>, Box<dyn std::error::Error>> {
    // 生成函数名: 方法名+Path路径
    let function_name = generate_function_name(method, path);

    // 生成类型名
    let type_name = generate_type_name(&function_name);

    // 转换参数
    let params = convert_parameters(&operation.parameters)?;

    // 转换请求体
    let body = convert_request_body(&operation.request_body)?;

    // 转换响应
    let response = convert_responses(&operation.responses)?;

    // 计算布尔值
    let has_form_data = has_form_data(&body, &operation.request_body);
    let has_path_variables = path.contains('{');
    let has_api_prefix = path.starts_with('/');

    Ok(Some(ApiDefinition {
        desc: operation.description.clone(),
        method: method.clone(),
        path_in_comment: path.to_string(),
        function_name,
        type_name,
        path: path.to_string(),
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

// 生成类型名: 函数名+Params
fn generate_type_name(function_name: &str) -> String {
    format!("{}Params", capitalize(function_name))
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
) -> Result<Option<Params>, Box<dyn std::error::Error>> {
    if !parameters.is_empty() {
        let mut query_params = Vec::new();
        let mut path_params = Vec::new();
        let mut header_params = Vec::new();
        let mut cookie_params = Vec::new();

        for param_ref in parameters {
            match param_ref {
                ReferenceOr::Item(param) => {
                    let param_data = param.clone().parameter_data();
                    let (location, param_type) = match param {
                        openapiv3::Parameter::Query { .. } => {
                            (ParamLocation::Query, "string".to_string())
                        }
                        openapiv3::Parameter::Path { .. } => {
                            (ParamLocation::Path, "string".to_string())
                        }
                        openapiv3::Parameter::Header { .. } => {
                            (ParamLocation::Header, "string".to_string())
                        }
                        openapiv3::Parameter::Cookie { .. } => {
                            (ParamLocation::Cookie, "string".to_string())
                        }
                    };

                    let template_param = Param {
                        name: param_data.name.clone(),
                        alias: Some(param_data.name.clone()),
                        param_type: param_type.clone(),
                        required: param_data.required,
                        description: param_data.description.clone(),
                        location,
                        schema: Some(ParamSchema {
                            param_type,
                            required: param_data.required,
                            default: None, // TODO: 提取默认值
                            description: param_data.description.clone(),
                        }),
                    };

                    match param {
                        openapiv3::Parameter::Query { .. } => query_params.push(template_param),
                        openapiv3::Parameter::Path { .. } => path_params.push(template_param),
                        openapiv3::Parameter::Header { .. } => header_params.push(template_param),
                        openapiv3::Parameter::Cookie { .. } => cookie_params.push(template_param),
                    }
                }
                ReferenceOr::Reference { reference: _ } => {
                    // TODO: 处理参数引用
                    continue;
                }
            }
        }

        if query_params.is_empty()
            && path_params.is_empty()
            && header_params.is_empty()
            && cookie_params.is_empty()
        {
            Ok(None)
        } else {
            Ok(Some(Params {
                query: query_params,
                path: path_params,
                header: header_params,
                cookie: cookie_params,
            }))
        }
    } else {
        Ok(None)
    }
}

fn convert_request_body(
    request_body: &Option<openapiv3::ReferenceOr<openapiv3::RequestBody>>,
) -> Result<Option<RequestBody>, Box<dyn std::error::Error>> {
    if let Some(body_ref) = request_body {
        match body_ref {
            ReferenceOr::Item(body) => {
                let media_type = body.content.keys().next().cloned();
                let properties_list = if let Some(content_type) = media_type.as_ref() {
                    if let Some(media_type_obj) = body.content.get(content_type) {
                        if let Some(schema) = &media_type_obj.schema {
                            convert_schema_to_properties(schema)?
                        } else {
                            None
                        }
                    } else {
                        None
                    }
                } else {
                    None
                };

                Ok(Some(RequestBody {
                    r#type: "RequestBody".to_string(), // TODO: 从schema中提取类型
                    media_type,
                    properties_list,
                }))
            }
            ReferenceOr::Reference { reference } => {
                let type_value = extract_type_name_from_ref(reference);
                Ok(Some(RequestBody {
                    r#type: type_value,
                    media_type: None,
                    properties_list: None,
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
                                ReferenceOr::Item(schema) => get_typescript_type_string(
                                    &ReferenceOr::Item(Box::new(schema.clone())),
                                )?,
                                ReferenceOr::Reference { reference } => {
                                    extract_type_name_from_ref(reference)
                                }
                            }
                        } else {
                            "any".to_string()
                        };
                        return Ok(Response {
                            r#type: response_type,
                        });
                    }
                }
            }
            ReferenceOr::Reference { reference } => {
                let response_type = extract_type_name_from_ref(reference);
                return Ok(Response {
                    r#type: response_type,
                });
            }
        }
    }

    Ok(Response {
        r#type: "any".to_string(),
    })
}

fn has_form_data(
    body: &Option<RequestBody>,
    _request_body: &Option<openapiv3::ReferenceOr<openapiv3::RequestBody>>,
) -> bool {
    if let Some(body) = body {
        if let Some(media_type) = &body.media_type {
            return media_type == "multipart/form-data";
        }
    }
    false
}
