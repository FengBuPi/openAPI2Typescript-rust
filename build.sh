#!/bin/bash

# OpenAPI2TypeScript 综合构建脚本

echo "🚀 开始构建 OpenAPI2TypeScript 项目..."

# 检查参数
BUILD_CLI=false
BUILD_WASM=false
BUILD_ALL=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --cli)
            BUILD_CLI=true
            shift
            ;;
        --wasm)
            BUILD_WASM=true
            shift
            ;;
        --all)
            BUILD_ALL=true
            shift
            ;;
        -h|--help)
            echo "使用方法: $0 [选项]"
            echo "选项:"
            echo "  --cli     构建 CLI 工具"
            echo "  --wasm    构建 WASM 模块"
            echo "  --all     构建所有组件"
            echo "  -h, --help 显示此帮助信息"
            echo ""
            echo "示例:"
            echo "  $0 --all          # 构建所有组件"
            echo "  $0 --cli           # 只构建 CLI 工具"
            echo "  $0 --wasm          # 只构建 WASM 模块"
            exit 0
            ;;
        *)
            echo "未知选项: $1"
            echo "使用 -h 或 --help 查看帮助信息"
            exit 1
            ;;
    esac
done

# 如果没有指定任何选项，默认构建所有组件
if [ "$BUILD_CLI" = false ] && [ "$BUILD_WASM" = false ] && [ "$BUILD_ALL" = false ]; then
    BUILD_ALL=true
fi

# 构建核心库
echo "🔨 构建核心库..."
cargo build --release -p openapi2ts-core

if [ $? -ne 0 ]; then
    echo "❌ 核心库构建失败！"
    exit 1
fi

# 构建 CLI 工具
if [ "$BUILD_CLI" = true ] || [ "$BUILD_ALL" = true ]; then
    echo "🔨 构建 CLI 工具..."
    cargo build --release --bin openapi2ts
    
    if [ $? -eq 0 ]; then
        echo "✅ CLI 工具构建成功！"
        echo "📁 可执行文件位置: ./target/release/openapi2ts"
    else
        echo "❌ CLI 工具构建失败！"
        exit 1
    fi
fi

# 构建 WASM 模块
if [ "$BUILD_WASM" = true ] || [ "$BUILD_ALL" = true ]; then
    echo "🔨 构建 WASM 模块..."
    cd crates/openapi2ts-wasm
    wasm-pack build --target web --out-dir ../../pkg --dev
    cd ../..
    
    if [ $? -eq 0 ]; then
        echo "✅ WASM 模块构建成功！"
        echo "📁 输出目录: ./pkg/"
    else
        echo "❌ WASM 模块构建失败！"
        exit 1
    fi
fi

echo ""
echo "🎉 构建完成！"
echo ""
echo "📋 使用说明:"
echo "CLI 工具:"
echo "  1. 确保当前目录有 openapi2ts.config.json5 配置文件"
echo "  2. 运行: ./target/release/openapi2ts"
echo "  3. 或者安装到系统: cargo install --path crates/openapi2ts-cli"
echo ""
echo "WASM 模块:"
echo "  1. 将 pkg/ 目录复制到您的 Web 项目中"
echo "  2. 在 HTML 中引入: <script type=\"module\" src=\"./pkg/openapi2ts_wasm.js\"></script>"
echo "  3. 在 JavaScript 中使用:"
echo "     import init, { WasmConfig, generate_from_openapi_json } from './pkg/openapi2ts_wasm.js';"
echo "     await init();"
echo "     const config = new WasmConfig('API', './openapi.json', 'interface', './api', 'import request from \"@/utils/request\"');"
echo "     const result = await generate_from_openapi_json(config, openapiJsonString);"
