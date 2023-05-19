import { otherHttp } from '/@/utils/http/axios';
// import {
//   GoodsParams,
//   GoodsResultModel,
//   EditParams,
//   EditGoodsResultModel,
// } from './model/goodsModel';

enum Api {
  Goods = '/usr/searchProduct',
  UpdateGoods = '/admin/updateProduct',
  GetSettings = '/usr/loadSysConfig',
  UpdateSettings = '/usr/updateSysConfig',
}

export function goodsListApi(params: any) {
  return otherHttp
    .request({
      url: Api.Goods,
      method: 'get',
      params,
    })
    .then((respond) => {
      const data = {
        items: respond.products,
        total: respond.total,
      };
      return data;
    });
}

export function updateGoodsApi(params: any) {
  return otherHttp.request({
    url: Api.UpdateGoods,
    method: 'post',
    params,
  });
}

export function getSettingsApi() {
  return otherHttp.request({
    url: Api.GetSettings,
    method: 'get',
  });
}

export function updateSettingsApi(params: any) {
  return otherHttp.request({
    url: Api.UpdateSettings,
    method: 'post',
    params,
  });
}
