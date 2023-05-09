import { defHttp, otherHttp } from '/@/utils/http/axios';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
import { GetUserParams, LoginParams } from './model/userModel';

enum Api {
  User = '/user/edit',
  Login = '/pub/login',
  Users = 'usr/searchUser',
}

export function getUserApi(params: GetUserParams) {
  return defHttp.request({
    url: Api.User,
    method: 'POST',
    params,
  });
}

export function loginApi(params: LoginParams) {
  return otherHttp.get({
    url: Api.Login,
    params,
  });
  // .then((response) => {
  //   console.log(1111111);
  //   // console.log(response);
  //   // 访问 headers 对象并获取 cookie 值
  //   // const setCookieHeader = response.headers['set-cookie'];
  //   // const sessionID = parseCookieValue(setCookieHeader);
  //   // 返回响应数据和会话 ID
  //   // return response;
  //   // return {
  //   //   data: response.data,
  //   //   sessionId: sessionID,
  //   // };
  // });
}

// const parseCookieValue = (header: string | string[]) => {
//   if (!Array.isArray(header)) {
//     header = [header];
//   }

//   for (let i = 0; i < header.length; i++) {
//     const cookie = header[i].split(';')[0];
//     if (cookie.indexOf('session_id=') === 0) {
//       return cookie.split('=')[1];
//     }
//   }

//   return null;
// };

export function usersApi(params) {
  return otherHttp.get({
    url: Api.Users,
    params,
  });
}
