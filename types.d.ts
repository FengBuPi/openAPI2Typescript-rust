declare namespace MyAPI {

  interface User  {
      /** 用户唯一标识符 */
      'id': number;
      /** 用户姓名 */
      'name': string;
      /** 用户邮箱地址 */
      'email': string | null;
  }

  interface UserRole  {
      'success': boolean;
  }

  interface ApiResponse  {
      'success': boolean;
      /** 响应数据 */
      'data': User | null;
  }

}