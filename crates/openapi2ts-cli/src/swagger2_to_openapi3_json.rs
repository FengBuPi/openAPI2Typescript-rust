use serde_json::Value;

fn rewrite_refs_inplace(value: &mut Value) {
    match value {
        Value::Object(map) => {
            for (_k, v) in map.iter_mut() {
                rewrite_refs_inplace(v);
            }
            if let Some(Value::String(reference)) = map.get_mut("$ref") {
                *reference = reference.replace("#/definitions/", "#/components/schemas/");
            }
        }
        Value::Array(arr) => {
            for v in arr.iter_mut() {
                rewrite_refs_inplace(v);
            }
        }
        _ => {}
    }
}

fn normalize_parameter_schema_inplace(param: &mut serde_json::Map<String, Value>) {
    // OpenAPI3 的 parameter 必须包含 schema 或 content。
    // Swagger2 的 query/path/header 参数通常是把 type/format/items 直接平铺在 parameter 上。
    // 这里把这些字段迁移到 schema 中，避免 openapiv3 反序列化失败。
    if param.contains_key("schema") || param.contains_key("content") {
        return;
    }

    let mut schema = serde_json::Map::<String, Value>::new();
    let schema_keys = [
        "type",
        "format",
        "items",
        "enum",
        "default",
        "maximum",
        "minimum",
        "exclusiveMaximum",
        "exclusiveMinimum",
        "maxLength",
        "minLength",
        "pattern",
        "maxItems",
        "minItems",
        "uniqueItems",
        "multipleOf",
    ];

    for k in schema_keys {
        if let Some(v) = param.remove(k) {
            schema.insert(k.to_string(), v);
        }
    }

    // 如果 swagger2 参数没有提供任何 type 等信息，就不要强行塞 schema。
    if !schema.is_empty() {
        param.insert("schema".to_string(), Value::Object(schema));
    }
}

pub fn swagger2_to_openapi3_json(doc: &mut Value) {
    // 只处理 JSON object 顶层
    let Some(root) = doc.as_object_mut() else {
        return;
    };

    // servers
    let host = root
        .get("host")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());
    let base_path = root
        .get("basePath")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();
    let scheme = root
        .get("schemes")
        .and_then(|v| v.as_array())
        .and_then(|a| a.first())
        .and_then(|v| v.as_str())
        .unwrap_or("http")
        .to_string();
    if let Some(host) = host {
        let url = format!("{}://{}{}", scheme, host, base_path);
        root.insert(
            "servers".to_string(),
            Value::Array(vec![Value::Object(
                [("url".to_string(), Value::String(url))]
                    .into_iter()
                    .collect(),
            )]),
        );
    }

    // swagger -> openapi
    root.remove("swagger");
    root.insert("openapi".to_string(), Value::String("3.0.0".to_string()));

    // definitions -> components.schemas
    let definitions = root.remove("definitions").unwrap_or(Value::Object(Default::default()));
    let mut components = root
        .remove("components")
        .and_then(|v| v.as_object().cloned())
        .unwrap_or_default();
    if let Value::Object(defs) = definitions {
        if !defs.is_empty() {
            components.insert("schemas".to_string(), Value::Object(defs));
        }
    }
    if !components.is_empty() {
        root.insert("components".to_string(), Value::Object(components));
    }

    // paths: body 参数 -> requestBody；responses.schema -> responses.content
    if let Some(Value::Object(paths)) = root.get_mut("paths") {
        for (_path, path_item) in paths.iter_mut() {
            let Some(path_obj) = path_item.as_object_mut() else {
                continue;
            };

            for method in [
                "get", "put", "post", "delete", "options", "head", "patch", "trace",
            ] {
                let Some(op) = path_obj.get_mut(method) else {
                    continue;
                };
                let Some(op_obj) = op.as_object_mut() else {
                    continue;
                };

                // parameters
                let mut body_schema: Option<Value> = None;
                if let Some(Value::Array(params)) = op_obj.get_mut("parameters") {
                    let mut new_params: Vec<Value> = Vec::with_capacity(params.len());
                    for mut p in params.drain(..) {
                        let in_body = p
                            .get("in")
                            .and_then(|v| v.as_str())
                            .map(|s| s == "body")
                            .unwrap_or(false);

                        if in_body {
                            body_schema = p.get_mut("schema").cloned();
                            continue;
                        }

                        // swagger2 风格参数 (query/path/header/...)：type 平铺 -> schema
                        if let Some(obj) = p.as_object_mut() {
                            // swagger2 里还有 in=formData，这里不深度重写为 multipart，只做最小兼容处理
                            if obj
                                .get("in")
                                .and_then(|v| v.as_str())
                                .map(|s| s != "body")
                                .unwrap_or(true)
                            {
                                normalize_parameter_schema_inplace(obj);
                            }
                        }
                        new_params.push(p);
                    }
                    *params = new_params;
                }
                if let Some(schema) = body_schema {
                    let mut content = serde_json::Map::new();
                    content.insert(
                        "application/json".to_string(),
                        Value::Object(
                            [("schema".to_string(), schema)]
                                .into_iter()
                                .collect(),
                        ),
                    );
                    op_obj.insert(
                        "requestBody".to_string(),
                        Value::Object(
                            [("content".to_string(), Value::Object(content))]
                                .into_iter()
                                .collect(),
                        ),
                    );
                }

                // responses
                if let Some(Value::Object(responses)) = op_obj.get_mut("responses") {
                    for (_code, resp) in responses.iter_mut() {
                        let Some(resp_obj) = resp.as_object_mut() else {
                            continue;
                        };
                        if let Some(schema) = resp_obj.remove("schema") {
                            let mut content = serde_json::Map::new();
                            content.insert(
                                "application/json".to_string(),
                                Value::Object(
                                    [("schema".to_string(), schema)]
                                        .into_iter()
                                        .collect(),
                                ),
                            );
                            resp_obj.insert("content".to_string(), Value::Object(content));
                        }
                    }
                }
            }
        }
    }

    // 递归替换所有 $ref
    rewrite_refs_inplace(doc);
}