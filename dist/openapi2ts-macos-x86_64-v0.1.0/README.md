# OpenAPI2TypeScript CLI for macOS

版本: 0.1.0
平台: macOS (x86_64)

## 安装方法

### 方法 1: 复制到系统路径（推荐）

```bash
sudo cp openapi2ts /usr/local/bin/
sudo chmod +x /usr/local/bin/openapi2ts
```

### 方法 2: 复制到用户路径

```bash
mkdir -p ~/.local/bin
cp openapi2ts ~/.local/bin/
chmod +x ~/.local/bin/openapi2ts
# 将 ~/.local/bin 添加到 PATH (如果还没有)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 方法 3: 使用 Cargo 安装

```bash
cargo install --path crates/openapi2ts-cli
```

## 使用方法

1. 确保当前目录有 `openapi2ts.config.json5` 配置文件
2. 运行: `openapi2ts`

## 配置文件示例

参考 `openapi2ts.config.json5.example` 文件创建配置文件。

## 系统要求

- macOS 10.13 或更高版本
- x86_64 架构

## 许可证

MIT License
