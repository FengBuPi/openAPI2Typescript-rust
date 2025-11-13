#!/bin/bash

set -e

BINARY_NAME="openapi2ts"
INSTALL_DIR="/usr/local/bin"

echo "🚀 安装 ${BINARY_NAME}..."

# 检查是否有 sudo 权限
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  需要管理员权限，将使用 sudo"
    SUDO="sudo"
else
    SUDO=""
fi

# 复制二进制文件
$SUDO cp "${BINARY_NAME}" "${INSTALL_DIR}/"
$SUDO chmod +x "${INSTALL_DIR}/${BINARY_NAME}"

echo "✅ 安装成功！"
echo ""
echo "使用方法:"
echo "  1. 创建配置文件 openapi2ts.config.json5"
echo "  2. 运行: ${BINARY_NAME}"
echo ""
echo "查看版本: ${BINARY_NAME} --version (如果支持)"
