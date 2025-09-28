mod interface_template_generator;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 生成 TypeScript 类型定义文件
    let rendered = interface_template_generator::generate_typescript_types()?;
    
    // 输出结果
    println!("生成的 TypeScript 接口定义：");
    println!("{}", rendered);
    
    // 将结果写入文件
    std::fs::write("types.d.ts", rendered)?;
    println!("\n结果已保存到 types.d.ts 文件");
    Ok(())
}
