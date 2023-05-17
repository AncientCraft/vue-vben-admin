import { otherHttp } from '/@/utils/http/axios';
import { mergeUser } from '/@/utils/lists';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
enum Api {
  Members = '/usr/searchUser',
  ChangeBalance = '/admin/withdrawUserBalance',
  Certified = '/usr/updateUserIDCard',
  Update = '/usr/updateUser',
}

export function membersApi(params) {
  return otherHttp
    .get({
      url: Api.Members,
      params,
    })
    .then((respond) => {
      const { users, balances, orders, withdraws, online, total } = respond;
      const r = mergeUser(users, balances, withdraws, orders, online);

      const data = {
        items: r,
        total: total,
      };
      return data;
    });
}

export function updateApi(params) {
  return otherHttp.post({
    url: Api.Update,
    params,
  });
}

export function changeBalnceApi(params) {
  return otherHttp.get({
    url: Api.ChangeBalance,
    params,
  });
}

export function certifiedApi(params) {
  return otherHttp.get({
    url: Api.Certified,
    params,
  });
}
