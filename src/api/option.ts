import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Option = '/usr/searchOrder',
  Update = '/admin/updateCurrency',
  Add = '/admin/addCurrency',
}

export function optionsApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Option,
      params,
    })
    .then((res) => {
      const r = mergeOptions(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeOptions(data) {
  const users = data.users;
  const list = data.orders;
  const result = list.map((item) => {
    const item1 = users[item.user_id];
    const others = {
      user_id: item.user_id,
      account: item1.account,
      name: item1.name,
    };

    return { ...others, ...item };
  });
  return result;
}

export function updateSymbolsApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Update,
    params,
  });
}

export function addSymbolsApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Add,
    params,
  });
}
