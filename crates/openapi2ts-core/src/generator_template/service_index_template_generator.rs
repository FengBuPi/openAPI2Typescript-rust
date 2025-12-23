use serde::{Deserialize, Serialize};
use tera::{Context, Tera};

// 内嵌模板内容
const TEMPLATE: &str = include_str!(concat!(
    env!("CARGO_MANIFEST_DIR"),
    "/templates/serviceIndex.tera"
));

/// 服务控制器信息
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Import {
    /// 控制器名称（用于导入）
    #[serde(rename = "controllerName")]
    pub controller_name: String,
    /// 文件名（不含扩展名）
    #[serde(rename = "fileName")]
    pub file_name: String,
}

/// 服务索引模板数据
#[derive(Serialize, Deserialize, Debug)]
pub struct ServiceIndexTemplateData {
    /// 服务控制器列表
    pub list: Vec<Import>,
}

/// 生成服务索引 TypeScript 代码
///
/// # 功能说明
/// 根据模板数据生成 TypeScript 服务索引文件，用于统一导出所有服务控制器。
/// 生成的文件会包含：
/// - API 更新时间（用于缓存控制）
/// - 所有服务控制器的 import 语句
/// - 统一的 export default 对象
///
/// # 参数
/// * `template_data` - 服务索引模板数据
///
/// # 返回值
/// * `Ok(())` - 生成成功
/// * `Err(Box<dyn std::error::Error>)` - 生成失败
///
/// # 生成的文件
/// 输出文件：`service_index.ts`
///
/// # 示例
/// ```rust
/// use chrono::Utc;
///
/// let template_data = ServiceIndexTemplateData {
///     api_resource_modify_time: Utc::now().format("%Y-%m-%d %H:%M:%S").to_string(),
///     list: vec![
///         ServiceController {
///             controller_name: "userController".to_string(),
///             file_name: "user".to_string(),
///         },
///         ServiceController {
///             controller_name: "orderController".to_string(),
///             file_name: "order".to_string(),
///         },
///     ],
/// };
///
/// generate_service_index_typescript_string(template_data)?;
/// ```
/// 生成服务索引 TypeScript 代码字符串
pub fn generate_service_index_typescript_string(
    template_data: ServiceIndexTemplateData,
) -> Result<String, Box<dyn std::error::Error>> {
    // 初始化 Tera 模板引擎
    let mut tera = Tera::default();
    tera.add_raw_template("serviceIndex.tera", TEMPLATE)?;

    // 创建上下文并添加数据
    let mut context = Context::new();
    context.insert(
        "time",
        &chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string(),
    );
    context.insert("list", &template_data.list);

    // 渲染模板
    let rendered = tera.render("serviceIndex.tera", &context)?;
    Ok(rendered)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn normalize_generated_typescript(rendered: &str) -> String {
        rendered
            .lines()
            .map(|line| {
                if line.trim_start().starts_with("// generateTime:") {
                    "// generateTime: __IGNORED__".to_string()
                } else {
                    line.to_string()
                }
            })
            .collect::<Vec<_>>()
            .join("\n")
            + "\n"
    }

    #[test]
    fn test_generate_service_index_single_controller() -> Result<(), Box<dyn std::error::Error>> {
        let template_data = ServiceIndexTemplateData {
            list: vec![Import {
                controller_name: "userController".to_string(),
                file_name: "user".to_string(),
            }],
        };

        let rendered = generate_service_index_typescript_string(template_data)?;
        let content = normalize_generated_typescript(&rendered);

        assert!(content.contains("// generateTime: __IGNORED__"));
        assert!(content.contains("import * as userController from 'user'"));
        assert!(content.contains("export default"));
        assert!(content.contains("userController,"));

        Ok(())
    }

    #[test]
    fn test_generate_service_index_multiple_controllers() -> Result<(), Box<dyn std::error::Error>>
    {
        let template_data = ServiceIndexTemplateData {
            list: vec![
                Import {
                    controller_name: "userController".to_string(),
                    file_name: "user".to_string(),
                },
                Import {
                    controller_name: "orderController".to_string(),
                    file_name: "order".to_string(),
                },
                Import {
                    controller_name: "productController".to_string(),
                    file_name: "product".to_string(),
                },
            ],
        };

        let rendered = generate_service_index_typescript_string(template_data)?;
        let content = normalize_generated_typescript(&rendered);

        // 验证所有导入语句（注意：不同控制器导入语句在同一行）
        assert!(content.contains("import * as userController from 'user'"));
        assert!(content.contains("import * as orderController from 'order'"));
        assert!(content.contains("import * as productController from 'product'"));

        // 验证导出对象
        assert!(content.contains("export default"));
        assert!(content.contains("userController,"));
        assert!(content.contains("orderController,"));
        assert!(content.contains("productController,"));

        // 验证元数据（忽略具体时间值）
        assert!(content.contains("// generateTime: __IGNORED__"));

        Ok(())
    }

    #[test]
    fn test_generate_service_index_empty_list() -> Result<(), Box<dyn std::error::Error>> {
        let template_data = ServiceIndexTemplateData {
            list: vec![],
        };

        let rendered = generate_service_index_typescript_string(template_data)?;
        let content = normalize_generated_typescript(&rendered);

        assert!(content.contains("export default"));
        assert!(content.contains("// generateTime: __IGNORED__"));
        assert!(!content.contains("import * as"));

        Ok(())
    }

    #[test]
    fn test_service_controller_structure() {
        let controller = Import {
            controller_name: "testController".to_string(),
            file_name: "test".to_string(),
        };

        assert_eq!(controller.controller_name, "testController");
        assert_eq!(controller.file_name, "test");
    }

    #[test]
    fn test_service_index_template_data_serialization() -> Result<(), Box<dyn std::error::Error>> {
        let template_data = ServiceIndexTemplateData {
            list: vec![Import {
                controller_name: "userController".to_string(),
                file_name: "user".to_string(),
            }],
        };

        // 测试序列化
        let json = serde_json::to_string(&template_data)?;
        assert!(json.contains("controllerName"));
        assert!(json.contains("fileName"));

        Ok(())
    }
}
