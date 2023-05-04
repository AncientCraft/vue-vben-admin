import { defHttp } from '/@/utils/http/axios';
import {
  GoodsParams,
  GoodsResultModel,
  EditParams,
  EditGoodsResultModel,
} from './model/goodsModel';

enum Api {
  Goods = '/goods/list',
  EditGoods = '/goods/edit',
}

export function goodsListApi(params: GoodsParams) {
  return defHttp.request<GoodsResultModel>({
    url: Api.Goods,
    method: 'POST',
    params,
  });
}

export function getGoodsApi(params: EditParams) {
  return defHttp.request<EditGoodsResultModel>({
    url: Api.EditGoods,
    method: 'POST',
    params,
  });
}
