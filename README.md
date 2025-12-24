# openAPI2Typescript-rust

将 OpenAPI（或 Swagger v2）接口文档转换为 TypeScript 类型定义与请求代码的小工具

本仓库包含：

- **Rust Core**：核心生成逻辑（crate：`openapi2ts-core`）
- **CLI**：命令行工具（bin：`openapi2ts`）
- **WASM**：可在 Node.js 中使用的 wasm 模块（crate：`openapi2ts-wasm`，npm 包目录：`crates/openapi2ts-wasm/npm`）

## 依赖环境

- **Rust**（建议使用最新 stable）
- **wasm-pack**（用于构建 wasm）
- **Node.js**（建议 18+）
- **pnpm**（用于 `test/` 目录安装依赖；也可以用 npm/yarn 自行替换）

## 使用 `./build.sh` 编译

项目根目录提供了统一构建脚本 `build.sh`：

```bash
./build.sh --all
```

可选参数：

- **`--all`**：构建所有组件（默认行为）
- **`--cli`**：仅构建 CLI
- **`--wasm`**：仅构建 WASM

构建产物：

- **CLI**：`./target/release/openapi2ts`
- **WASM（nodejs target）**：`./crates/openapi2ts-wasm/npm/pkg/`

如果遇到权限问题先执行：

```bash
chmod +x ./build.sh
```

## 在 `test/` 目录测试 WASM

`test/` 目录通过本地依赖的方式引用 wasm npm 包：

- `test/package.json` 依赖 `openapi2ts-wasm: file:../crates/openapi2ts-wasm/npm`

注意：为了避免把本地测试用的 OpenAPI 文件与配置提交到仓库，以下文件在 `.gitignore` 中被忽略：

- `test/openapi.json`
- `test/openapi2ts.config.js`
- `test/servers/`

### 1) 构建 wasm

在项目根目录运行：

```bash
./build.sh --wasm
```

### 2) 安装 `test/` 依赖

```bash
cd test
pnpm install
```

### 3) 准备测试配置与 OpenAPI 文件

在 `test/` 目录创建：

- `openapi.json`：你的 OpenAPI v3 JSON（或 swagger v2 JSON）
- `openapi2ts.config.js`：配置文件（可从 `openapi2ts.config.js.example` 拷贝修改）

示例（从模板拷贝）：

```bash
cp ./openapi2ts.config.js.example ./openapi2ts.config.js
```

### 4) 运行 wasm 转换

在 `test/` 目录执行（Node ESM）：

```bash
npx openapi2ts-wasm
```

成功后会在 `serversPath` 对应的目录（例如 `./servers`）输出：

- `types.d.ts`
- `index.ts`
- 各 tag 对应的 `*.ts` controller 文件

## 参与贡献（Contributing）

欢迎提交 Issue / PR，一起把工具打磨得更好。

### 开发流程建议

- **Fork** 本仓库并新建分支：`feat/xxx`、`fix/xxx`、`chore/xxx`
- 尽量保持 PR **小而专注**：一个 PR 解决一个问题
- 提交前确保本地检查通过

### 本地检查（建议）

在仓库根目录：

```bash
cargo fmt
cargo clippy --all-targets --all-features
cargo test
```

如涉及 wasm/npm 侧改动，请同时验证：

```bash
./build.sh --wasm
```

并按上文在 `test/` 目录跑一次 wasm 调用。

### 提交信息与代码风格

- 提交信息建议使用清晰的动词开头，例如：`feat: ...` / `fix: ...` / `chore: ...`
- Rust 代码以 `cargo fmt` 结果为准

### 反馈与需求

- **Bug**：请提供复现步骤、输入的 OpenAPI（可脱敏）、以及报错日志
- **新功能**：请描述使用场景、期望的输出与兼容性要求

### 配置选项

| 属性 | 必填 | 说明 | 类型 | 默认值 | 当前支持情况 |
|------|------|------|------|--------|--------|
| apiPrefix | 否 | API 前缀 | string | - | 1.0 |
| authorization | 否 | 文档登录凭证 | string | - | 不准备支持, 我们只关注如何转换 |
| dataFields | 否 | response 中数据字段 | string[] | - | 即将支持 |
| declareType | 否 | interface 声明类型 | type/interface | interface | 现在只支持了interface |
| enumStyle | 否 | 枚举样式 | string-literal \| enum | string-literal | 两个的支持了, 但是配置无法配置 |
| isCamelCase | 否 | 小驼峰命名文件和请求函数 | boolean | true | 即将支持 |
| isSwagger | 否 | 是否是swagger2 格式的文件，如果不配置则默认是openapi3，有可能导致解析失败 | boolean | false | 1.0 |
| mockFolder | 否 | mock 目录 | string | - | 不准备支持 |
| namespace | 否 | 命名空间名称 | string | API | 1.0 |
| nullable | 否 | 使用 null 代替可选 | boolean | false | 即将支持 |
| projectName | 否 | 项目名称 | string | - | 这是啥配置啊 |
| requestImportStatement | 否 | 自定义请求方法表达式 | string | - | - |
| requestLibPath | 否 | 自定义请求方法路径 | string | - | 1.0 |
| requestOptionsType | 否 | 自定义请求方法 options 参数类型 | string | {[key: string]: any} | 即将支持 |
| schemaPath | 否 | Swagger 2.0 或 OpenAPI 3.0 的地址 | string | - | 1.0 |
| serversPath | 否 | 生成文件夹的路径 | string | - | 1.0 |
| splitDeclare | 否 | 每个tag组一个独立的.d.ts. | boolean | - | 即将支持 |

### 自定义钩子

| 属性 | 类型 | 说明 | 当前支持情况 |
|------|------|------|------|
| afterOpenApiDataInited | (openAPIData: OpenAPIObject) => OpenAPIObject | OpenAPI 数据初始化后的钩子 | 即将支持 |
| customFunctionName | (data: APIDataType) => string | 自定义请求方法函数名称 | 即将支持 |
| customTypeName | (data: APIDataType) => string | 自定义类型名称 | 即将支持 |
| customClassName | (tagName: string) => string | 自定义类名 | 即将支持 |
| customType | (schemaObject, namespace, originGetType) => string | 自定义获取类型 | 即将支持 |
| customFileNames | (operationObject, apiPath, _apiMethod) => string[] | 自定义生成文件名 | 即将支持 |
| customUrlPath | (apiPath: string) => string | 自定义 URL 路径 | 1.0 |
| fileterGenAPIFn | (apiPath: string, apiMethod: string) => boolean | 过滤生成的 API 接口函数 | 即将支持 |