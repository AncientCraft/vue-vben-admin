import { otherHttp } from '/@/utils/http/axios';
import { mergeOrder, mergeWithdraw, mergeTrading } from '/@/utils/lists';

enum Api {
  Order = '/usr/searchOrder',
  Flow = '/usr/searchWithdraw',
  Controll = '/admin/updateOrderTriggerType',
  Commit = '/admin/doneWithdraw',
  Trading = '/usr/searchBalanceRecord',
}

export function orderApi(params) {
  return otherHttp
    .get({
      url: Api.Order,
      params,
    })
    .then((respond) => {
      const { orders, users, balanceRecords, total } = respond;
      const r = mergeOrder(orders, users, balanceRecords);
      const data = {
        items: r,
        total: total,
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
      const { withdraws, users, total } = respond;
      const r = mergeWithdraw(withdraws, users);
      const data = {
        items: r,
        total: total,
      };
      return data;
    });
}

export function tradingApi(params) {
  return otherHttp
    .get({
      url: Api.Trading,
      params,
    })
    .then((respond) => {
      const { records, orders, users, withdraws, total } = respond;
      const r = mergeTrading(records, orders, users, withdraws);
      const data = {
        items: r,
        total: total,
      };
      return data;
    });
}

export function controllApi(params) {
  return otherHttp.get({
    url: Api.Controll,
    params,
  });
}

export function commitApi(params) {
  return otherHttp.get({
    url: Api.Commit,
    params,
  });
}
