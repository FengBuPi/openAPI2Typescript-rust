use openapiv3::OpenAPI;

use crate::utles::{sanitize_ts_identifier, tag_to_file_name};
use crate::generator_template::service_index_template_generator::Import;
use std::collections::HashSet;

/// 文件生成的逻辑就是tag变成拼音
pub fn openapi_to_service_index_template_data_list(
    openapi: &OpenAPI,
) -> Result<Vec<Import>, Box<dyn std::error::Error>> {
    let mut tag_groups: HashSet<String> = HashSet::new();
    let mut list = vec![];
    for (_, _, operation) in openapi.operations() {
        let tag = operation.tags.first().map(|t| t.as_str()).unwrap_or("moren");
        let tag = tag_to_file_name(tag, "moren");

        if tag_groups.contains(&tag) {
            continue;
        }
        tag_groups.insert(tag.clone());

        list.push(Import {
            controller_name: sanitize_ts_identifier(&tag),
            file_name: format!("./{}", tag),
        });
    }
    Ok(list)
}
