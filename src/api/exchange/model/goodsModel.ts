import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type GoodsParams = BasicPageParams;

export interface EditParams {
  close_day: string;
  close_time: string;
  open_day: string;
  open_time: string;
}

export interface GoodsListItem {
  id: string;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  no: number;
  status: number;
}

export interface EditGoods {
  name: string;
  no: string;
}

/**
 * @description: Request list return value
 */
export type GoodsResultModel = BasicFetchResult<GoodsListItem>;
export type EditGoodsResultModel = BasicFetchResult<GoodsListItem>;
