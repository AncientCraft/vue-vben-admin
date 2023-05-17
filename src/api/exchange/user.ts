import { defHttp, otherHttp } from '/@/utils/http/axios';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
import { GetUserParams, LoginParams, LoginResult } from './model/userModel';

enum Api {
  User = '/user/edit',
  Login = '/pub/login',
  Logout = '/usr/logout',
  UserInfo = '/usr/adminUserInfo',
  Users = '/usr/searchUser',
}

export function getUserApi(params: GetUserParams) {
  return defHttp.request({
    url: Api.User,
    method: 'POST',
    params,
  });
}

export function loginApi(params: LoginParams) {
  return otherHttp
    .request<LoginResult>({
      method: 'GET',
      url: Api.Login,
      params,
    })
    .then((data) => {
      return data.session_id;
    });
}

export function userInfoApi() {
  return otherHttp.get({ url: Api.UserInfo }).then((data) => {
    return data.result;
  });
}

export function logoutApi() {
  return otherHttp.get({ url: Api.Logout });
}

export function usersApi(params) {
  return otherHttp.get({
    url: Api.Users,
    params,
  });
}
