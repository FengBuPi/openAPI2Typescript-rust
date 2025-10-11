use openapiv3::OpenAPI;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub namespace: String,
    pub schema_path: String,
    pub declare_type: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            namespace: "API".to_string(),
            schema_path: "./openapi.json".to_string(),
            declare_type: "interface".to_string(),
        }
    }
}

// 根据用配置中的 schema_path 判断如何获取 openapi.json 文件
// 1. 网络请求获取
// 2. 本地文件获取
pub async fn get_openapi_spec(config: &Config) -> Result<OpenAPI, Box<dyn std::error::Error>> {
    if config.schema_path.starts_with("http") {
        let response = reqwest::get(&config.schema_path).await?;
        let openapi_spec: OpenAPI = response.json().await?;
        Ok(openapi_spec)
    } else {
        let openapi_spec: OpenAPI =
            serde_json::from_str(&std::fs::read_to_string(&config.schema_path)?)?;
        Ok(openapi_spec)
    }
}
