import { BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */

export interface GetUserParams {
  id: number | string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface CustomerInfo {
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

export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface UserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

export interface LoginResult {
  session_id: string;
}

/**
 * @description: Request list return value
 */
export type UserResultModel = BasicFetchResult<CustomerInfo>;
