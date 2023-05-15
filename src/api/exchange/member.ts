import { otherHttp } from '/@/utils/http/axios';
import { mergeList } from '/@/utils/lists';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
enum Api {
  Members = 'usr/searchUser',
  ChangeBalance = 'admin/withdrawUserBalance',
  Certified = '/usr/updateUserIDCard',
}

export function membersApi(params) {
  return otherHttp
    .get({
      url: Api.Members,
      params,
    })
    .then((respond) => {
      const { users, balances, total } = respond;
      const r = mergeList(users, balances);

      const data = {
        items: r,
        total: total,
      };
      return data;
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
