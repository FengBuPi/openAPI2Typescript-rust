declare namespace MyAPI {
  /** 用户角色 */
  interface User {
    /** 用户唯一标识符 */
    'id': number;
    /** 用户姓名 */
    'name': string;
    /** 用户邮箱地址 */
    'email'?: string;
  }
  /** 用户角色2 */
  const Userrole2: {
    readonly success: "success",
  };
  type Userrole2 = keyof typeof Userrole2;
  /** 用户角色 */
  enum Userrole {
    success = "success",
    data = "data",
  }
  /** API响应 */
  interface Apiresponse {
    /** 是否成功 */
    'success': boolean;
    /** 响应数据 */
    'data'?: User;
  }
}