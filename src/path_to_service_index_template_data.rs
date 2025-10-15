use openapiv3::OpenAPI;

use crate::generator_template::service_index_template_generator::Import;

pub fn openapi_to_service_index_template_data_list(
    openapi: &OpenAPI,
) -> Result<Vec<Import>, Box<dyn std::error::Error>> {
    Ok(vec![])
}
