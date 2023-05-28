import { otherHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/pub/login',
  Logout = '/usr/logout',
  UserInfo = '/usr/userInfo',
}

export function loginApi(params: LoginParams) {
  return otherHttp
    .request<LoginResultModel>({
      method: 'GET',
      url: Api.Login,
      params,
    })
    .then((res) => {
      const data = {
        token: res.session_id,
      };
      return data;
    });
}

export function userInfoApi() {
  return otherHttp.get({ url: Api.UserInfo }).then((res) => {
    // const user = res.user;
    // user.roles = [
    //   {
    //     // roleName: 'Super Admin',
    //     value: 'super',
    //   },
    // ];
    return res.user;
  });
}

export function logoutApi() {
  return otherHttp.get({ url: Api.Logout });
}
