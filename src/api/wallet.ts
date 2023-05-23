import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Wallet = '/usr/loadBalanceOverview',
}

export function usersApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Wallet,
      params,
    })
    .then((res) => {
      const r = mergeUser(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeUser(data) {
  const users = data.users;
  const balances = data.balances;
  const online = data.online;
  const result = users.map((item) => {
    const item1 = balances[item.tid];
    const balance = {
      balance: item1?.[200]?.free ?? 0,
      locked: item1?.[200]?.locked ?? 0,
    };
    const isOnline = online[item.tid] ? '在线' : '不在线';
    return { ...item, ...balance, isOnline };
  });
  return result;
}
