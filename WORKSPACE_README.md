# OpenAPI2TypeScript Rust 工作区

这是一个使用 Rust 工作区模式组织的项目，将 OpenAPI 规范转换为 TypeScript 代码生成器。

## 项目结构

```
openAPI2Typescript-rust/
├── Cargo.toml                    # 工作区根配置文件
├── crates/
│   ├── openapi2ts-core/         # 共享核心库
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── config.rs
│   │       ├── generator_template/
│   │       ├── path_to_service_controller_template_data.rs
│   │       ├── path_to_service_index_template_data.rs
│   │       ├── schema_to_interface_template_data.rs
│   │       └── utles.rs
│   ├── openapi2ts-cli/          # CLI 命令行工具
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── main.rs
│   └── openapi2ts-wasm/         # WebAssembly 绑定
│       ├── Cargo.toml
│       └── src/
│           └── lib.rs
├── templates/                   # 模板文件
├── build.sh                     # 综合构建脚本
├── build-cli.sh                 # CLI 构建脚本
├── build-wasm.sh                # WASM 构建脚本
└── pkg/                         # WASM 输出目录
```

## 工作区优势

### 1. 代码复用
- **共享核心库** (`openapi2ts-core`): 包含所有核心逻辑，被 CLI 和 WASM 包共同使用
- **避免重复代码**: 模板生成、数据转换等逻辑只需维护一份

### 2. 独立构建目标
- **CLI 工具** (`openapi2ts-cli`): 独立的命令行工具，支持网络请求和文件系统操作
- **WASM 模块** (`openapi2ts-wasm`): 浏览器环境下的 WebAssembly 模块，不依赖网络和文件系统

### 3. 依赖管理
- **条件依赖**: 核心库根据目标平台（WASM vs 原生）使用不同的依赖
- **版本统一**: 工作区级别的依赖版本管理，确保所有包使用相同版本

## 构建和使用

### 构建所有组件
```bash
./build.sh --all
```

### 只构建 CLI 工具
```bash
./build.sh --cli
```

### 只构建 WASM 模块
```bash
./build.sh --wasm
```

### CLI 工具使用
```bash
# 确保有配置文件
cp openapi2ts.config.json5.example openapi2ts.config.json5

# 运行 CLI 工具
./target/release/openapi2ts

# 或安装到系统
cargo install --path crates/openapi2ts-cli
```

### WASM 模块使用
```javascript
// 在 Web 项目中使用
import init, { WasmConfig, generate_from_openapi_json } from './pkg/openapi2ts_wasm.js';

await init();

const config = new WasmConfig(
    'API',                                    // namespace
    './openapi.json',                        // schema_path
    'interface',                             // declare_type
    './api',                                 // servers_path
    'import request from "@/utils/request"'  // request_lib_path
);

const result = await generate_from_openapi_json(config, openapiJsonString);
```

## 技术特点

### 条件编译
- 核心库使用 `#[cfg(not(target_arch = "wasm32"))]` 来区分 WASM 和原生环境
- WASM 环境不支持网络请求和文件系统操作
- 原生环境支持完整的 HTTP 客户端功能

### 依赖优化
- WASM 包使用 `getrandom` 的 `js` 特性来支持浏览器环境
- 避免了 `tokio` 和 `mio` 在 WASM 环境中的兼容性问题

### 构建脚本
- 智能构建脚本支持选择性构建
- 自动处理依赖关系和构建顺序
- 提供详细的使用说明

## 开发建议

1. **修改核心逻辑**: 在 `crates/openapi2ts-core/` 中进行
2. **添加 CLI 功能**: 在 `crates/openapi2ts-cli/src/main.rs` 中扩展
3. **添加 WASM 绑定**: 在 `crates/openapi2ts-wasm/src/lib.rs` 中添加新的 `#[wasm_bindgen]` 函数
4. **测试**: 使用 `cargo test` 在根目录运行所有测试

这种工作区结构使得项目更加模块化、可维护，并且能够很好地支持不同的部署目标。
