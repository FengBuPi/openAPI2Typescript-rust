# 项目优化记录

## 1. 类型命名空间处理优化

### 问题描述

之前生成的 TypeScript 代码中，所有类型（包括内置类型和自定义类型）都没有区分，导致需要在模板中手动添加 namespace 前缀。

### 解决方案

在 `path_to_service_controller_template_data.rs` 中添加了智能类型处理逻辑：

### 1. 新增辅助函数

#### `is_typescript_builtin_type(type_name: &str) -> bool`
判断类型是否是 TypeScript 内置类型，包括：
- 基本类型：`string`, `number`, `boolean`, `any`, `void`, `null`, `undefined`, `never`, `unknown`, `object`, `symbol`, `bigint`

#### `add_namespace_if_needed(type_name: String, namespace: &str) -> String`
智能添加 namespace 前缀，支持：
- **内置类型**：不添加前缀
  - `string` → `string`
  - `number` → `number`
  - `any` → `any`
  
- **普通自定义类型**：添加 namespace 前缀
  - `CreateUserReq` → `API.CreateUserReq`
  
- **数组类型**：只为自定义类型添加前缀
  - `string[]` → `string[]`
  - `UserInfo[]` → `API.UserInfo[]`
  
- **泛型类型**：递归处理内部类型
  - `Array<string>` → `Array<string>`
  - `Array<UserInfo>` → `Array<API.UserInfo>`
  - `Promise<UserData>` → `Promise<API.UserData>`

### 2. 修改的函数

1. **`openapi_to_service_controller_template_data_list`**
   - 添加 `namespace: &str` 参数

2. **`convert_operation_to_api_definition`**
   - 添加 `namespace: &str` 参数
   - 将 namespace 传递给子函数

3. **`convert_parameters`**
   - 添加 `_namespace: &str` 参数（预留用于未来扩展）

4. **`convert_request_body`**
   - 添加 `namespace: &str` 参数
   - 在生成引用类型时使用 `add_namespace_if_needed`

5. **`convert_responses`**
   - 添加 `namespace: &str` 参数
   - 在生成响应类型时使用 `add_namespace_if_needed`

### 3. 模板修改

在 `templates/service_controller.tera` 中移除了手动添加的 namespace 前缀：
```diff
- : {{namespace}}.{{ api.params.query.value }}
+ : {{ api.params.query.value }}
```

### 4. 调用方修改

在 `main.rs` 中传递 namespace 参数：
```rust
let interface_template_data_list =
    path_to_service_controller_template_data::openapi_to_service_controller_template_data_list(
        &openapi_spec,
        &config.namespace,  // 新增参数
    )?;
```

## 效果对比

### 修改前
```typescript
// 所有类型都没有 namespace
function getUser(): UserInfo { }
function getUsers(): UserInfo[] { }
function getName(): string { }
```

### 修改后
```typescript
// 自动区分内置类型和自定义类型
function getUser(): API.UserInfo { }       // 自定义类型添加前缀
function getUsers(): API.UserInfo[] { }    // 数组类型正确处理
function getName(): string { }              // 内置类型不添加前缀
```

## 测试结果

✅ 内置类型（string、number 等）不添加前缀
✅ 自定义类型添加 namespace 前缀
✅ 数组类型正确处理（如 `API.UserInfo[]`）
✅ 泛型类型正确处理（如 `Array<API.UserInfo>`）
✅ 参数类型正确处理
✅ 返回类型正确处理
✅ 请求体类型正确处理

---

## 2. 路径变量处理优化

### 问题描述

之前路径变量的转换（`{id}` → `${id}`）是在模板中通过简单的字符串替换实现的：
```
{{ api.path | replace(from="{", to="${") }}
```

这种方式存在以下问题：
1. **不够精确**：无法区分完整的路径变量和不完整的花括号
2. **容易出错**：如果路径中有不完整的 `{` 或 `}`，会导致错误的转换
3. **逻辑分散**：业务逻辑在模板中，不利于测试和维护

### 解决方案

在 `path_to_service_controller_template_data.rs` 中实现了精确的路径转换逻辑：

#### 新增函数

**`convert_path_to_template_string(path: &str) -> String`**

- 只转换完整的路径变量对（必须同时有开始和结束的花括号）
- 确保花括号之间有内容才进行转换
- 处理各种边界情况，避免运行时错误

#### 实现特点

```rust
// 精确匹配完整的花括号对
if chars[i] == '{' {
    if let Some(end_pos) = chars[i + 1..].iter().position(|&c| c == '}') {
        let close_pos = i + 1 + end_pos;
        if close_pos > i + 1 {
            // 这是一个完整的路径变量
            result.push('$');
            result.push('{');
            // 复制变量名...
        }
    }
}
```

#### 修改的代码

1. **在 `convert_operation_to_api_definition` 中应用转换**：
```rust
let converted_path = if has_path_variables {
    convert_path_to_template_string(path)
} else {
    path.to_string()
};
```

2. **简化模板逻辑**：
```diff
- {{ api.path | replace(from="{", to="${") | replace(from="&{", to="${") | safe }}
+ {{ api.path | safe }}
```

### 测试用例

添加了完整的单元测试，覆盖各种场景：

```rust
#[test]
fn test_convert_path_to_template_string() {
    // 单个路径变量
    assert_eq!(
        convert_path_to_template_string("/user/{id}"),
        "/user/${id}"
    );
    
    // 多个路径变量
    assert_eq!(
        convert_path_to_template_string("/user/{id}/post/{postId}"),
        "/user/${id}/post/${postId}"
    );
    
    // 不完整的花括号（安全处理）
    assert_eq!(
        convert_path_to_template_string("/user/{incomplete"),
        "/user/{incomplete"
    );
    
    // 空花括号（安全处理）
    assert_eq!(
        convert_path_to_template_string("/user/{}"),
        "/user/{}"
    );
}
```

### 效果对比

#### 修改前
- 在模板中简单替换所有 `{` 为 `${`
- 无法处理边界情况
- 难以测试和维护

#### 修改后
- 在 Rust 代码中精确匹配完整的路径变量
- 安全处理各种边界情况
- 有完整的单元测试保证质量

### 测试结果

✅ 单个路径变量正确转换
✅ 多个路径变量正确转换  
✅ 连续路径变量正确转换
✅ 不完整花括号安全处理
✅ 空花括号安全处理
✅ 没有路径变量的路径不受影响
✅ 所有单元测试通过

---

## 3. 代码清理：删除未使用的 schema 相关代码

### 问题描述

在 `Param` 结构体中存在 `schema` 字段和 `ParamSchema` 结构体，用于存储参数的默认值等信息。但是：
1. 代码中所有地方都标记为 `TODO: 提取默认值`，从未实际实现
2. 虽然模板中引用了 `query.schema.default`，但生成的数据始终为 `None`
3. 这些未使用的代码增加了维护成本

### 解决方案

删除所有未使用的 schema 相关代码：

#### 修改的结构体

**之前：**
```rust
pub struct Param {
    pub name: String,
    pub param_type: String,
    pub required: bool,
    pub description: Option<String>,
    pub schema: Option<ParamSchema>,  // ❌ 删除
}

pub struct ParamSchema {  // ❌ 整个结构体删除
    pub default: Option<String>,
}
```

**之后：**
```rust
pub struct Param {
    pub name: String,
    pub param_type: String,
    pub required: bool,
    pub description: Option<String>,
}
```

#### 修改的文件

1. **`service_controller_template_generator.rs`**
   - 删除 `ParamSchema` 结构体定义
   - 从 `Param` 结构体中删除 `schema` 字段
   - 更新所有测试代码中的 `Param` 创建

2. **`path_to_service_controller_template_data.rs`**
   - 从导入中移除 `ParamSchema`
   - 创建 `Param` 时不再设置 `schema` 字段

3. **`service_controller.tera`**
   - 删除对 `query.schema.default` 的引用
   - 移除默认值处理逻辑

### 效果对比

#### 修改前
```rust
let template_param = Param {
    name: param_data.name.clone(),
    param_type: param_type.clone(),
    required: param_data.required,
    description: param_data.description.clone(),
    schema: Some(ParamSchema {
        default: None, // TODO: 提取默认值
    }),
};
```

#### 修改后
```rust
let template_param = Param {
    name: param_data.name.clone(),
    param_type: param_type.clone(),
    required: param_data.required,
    description: param_data.description.clone(),
};
```

### 模板变化

#### 修改前
```tera
params: {
  {#- Query 参数默认值 -#}
  {%- if api.params.query and api.params.query.query_type == "inline" %}
    {%- for query in api.params.query.value.params %}
      {% if query.schema.default -%}
        // {{query.name | safe}} has a default value: {{ query.schema.default | safe }}
        '{{query.name | safe}}': '{{query.schema.default | safe}}',
      {%- endif -%}
    {%- endfor -%}
  {%- endif -%}
  {% if api.params.path %}...queryParams{% else %}...params{% endif %},
```

#### 修改后
```tera
params: {
  {#- 参数展开：有path参数时使用queryParams，否则使用params -#}
  {% if api.params.path %}...queryParams{% else %}...params{% endif %},
```

### 测试结果

✅ 所有测试通过
✅ 编译无错误
✅ 生成的代码功能正常
✅ 代码更简洁，易于维护

### 收益

1. **代码简化**：删除了未使用的结构体和字段
2. **减少混淆**：移除了标记为 TODO 但从未实现的功能
3. **提高可维护性**：减少了需要维护的代码量
4. **性能优化**：减少了不必要的 `Option` 包装和内存分配

