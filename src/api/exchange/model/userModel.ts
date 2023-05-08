import { BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */

export interface GetUserParams {
  id: number | string;
}

export interface UserInfo {
  account: string;
  readl_name: string;
  login_pass: string;
  trading_pass: string;
  balance: string;
  bank_name: string;
  bank_branch: string;
  bank_acount: string;
  group: string;
}

/**
 * @description: Request list return value
 */
export type UserResultModel = BasicFetchResult<UserInfo>;
