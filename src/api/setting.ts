import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Options = '/usr/loadCurrency',
  Currency = '/usr/searchCurrency',
  Update = '/admin/updateCurrency',
  GetSys = '/usr/loadSysConfig',
  UpdateSys = '/usr/updateSysConfig',
}

export function optionSettingApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Options,
      params,
    })
    .then((res) => {
      const data = {
        tid: res.currency.tid,
        items: res.currency.trade_rule,
      };
      return data;
    });
}

export function updateOptionApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Update,
    params,
  });
}

export function currencyApi() {
  const params = { type: 100 };
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Currency,
      params,
    })
    .then((res) => {
      return res.names;
    });
}

export function getSysApi() {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.GetSys,
    })
    .then((res) => {
      return res.config;
    });
}

export function updateSysApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.UpdateSys,
    params,
  });
}
