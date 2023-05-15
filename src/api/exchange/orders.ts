import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Order = '/usr/searchOrder',
  Flow = 'usr/searchWithdraw',
}

export function orderApi(params) {
  return otherHttp
    .get({
      url: Api.Order,
      params,
    })
    .then((respond) => {
      const data = {
        items: respond.orders,
        total: respond.total,
      };
      return data;
    });
}

export function flowApi(params) {
  return otherHttp
    .get({
      url: Api.Flow,
      params,
    })
    .then((respond) => {
      const data = {
        items: respond.withdraws,
        total: respond.total,
      };
      return data;
    });
}
