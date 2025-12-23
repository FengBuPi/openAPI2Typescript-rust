use serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub namespace: String,
    pub schema_path: String,
    pub declare_type: String,
    pub servers_path: String,
    pub request_lib_path: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            namespace: "API".to_string(),
            schema_path: "./openapi.json".to_string(),
            declare_type: "interface".to_string(),
            servers_path: "./api".to_string(),
            request_lib_path: "import request, { RequestOptions } from '@/utils/request';"
                .to_string(),
        }
    }
}
