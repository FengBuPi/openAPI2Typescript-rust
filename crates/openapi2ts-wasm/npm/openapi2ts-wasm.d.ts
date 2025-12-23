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
  /** 自定义类名 */
  customClassName?: (className: string) => string;
  /** 是否是Swagger 默认为false */
  isSwagger?: boolean;
};