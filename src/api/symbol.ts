import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Symbol = '/usr/searchCurrency',
  Update = '/admin/updateCurrency',
  Add = '/admin/addCurrency',
}

export function symbolsApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Symbol,
      params,
    })
    .then((res) => {
      const data = {
        items: res.currencys,
        total: res.total,
      };
      return data;
    });
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
