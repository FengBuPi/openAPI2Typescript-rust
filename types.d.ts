
declare namespace MyAPI {
      /** 用户信息 */
      interface User {
            /** 用户唯一标识符 */
            id: number;
            /** 用户姓名 */
            name: string;
            /** 用户邮箱地址 */
            email?: string;
      }
      /** 配置对象 */
      type Config = {
            /** 调试模式 */
            'debug': boolean;
            /** 超时时间 */
            'timeout': number;
      };
      /** 状态枚举 */
      enum Status {
            PENDING = "pending",
            SUCCESS = "success",
            FAILED = "failed",
      }
      /** 优先级枚举 */
      enum Priority {
            LOW = 1,
            MEDIUM = 2,
            HIGH = 3,
      }
      /** 主题常量 */
      const Theme: {
            readonly LIGHT: "light",
            readonly DARK: "dark",
      };
      type Theme = keyof typeof Theme;
      /** 语言联合类型 */
      type Language =
            "zh-CN" |
            "en-US" |
            "ja-JP";
        /** API密钥类型 */type ApiKey = string;
        /** 用户ID类型 */type UserId = number;
        /** 激活状态类型 */type IsActive = boolean;
}