export type Config = {
  /** OpenAPI JSON文件路径或网络地址 */
  schemaPath: string;
  /** 文件输出路径 */
  serversPath: string;
  /** 命名空间名称 */
  namespace?: string;
  /** 声明类型 */
  declareType?: string;
  /** 请求库路径 */
  requestLibPath?: string;
  /** 是否是Swagger 默认为false */
  isSwagger?: boolean;
  /** OpenAPI 数据初始化后的钩子 (openAPIData) => openAPIData */
  afterOpenApiDataInited?: (openAPIData: any) => any;
  /** 自定义请求方法函数名称 (data) => string */
  customFunctionName?: (data: any) => string;
  /** 自定义类型名称 (data) => string */
  customTypeName?: (data: any) => string;
  /** 自定义类名 (tagName) => string */
  customClassName?: (tagName: string) => string;
  /** 自定义获取类型 (schemaObject, namespace, originGetType) => string */
  customType?: (
    schemaObject: any,
    namespace: string,
    originGetType: any
  ) => string;
  /** 自定义生成文件名 (operationObject, apiPath, apiMethod) => string[] */
  customFileNames?: (operationObject: any, apiPath: string, apiMethod?: string) => string[];
  /** 接口url地址钩子 (apiPath) => string */
  customUrlPath?: (apiPath: string) => string;
  /** 筛选是否生成接口函数 (apiPath, apiMethod) => boolean */
  fileterGenAPIFn?: (apiPath: string, apiMethod?: string) => boolean;
};