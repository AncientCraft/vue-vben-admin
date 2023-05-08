import { defHttp } from '/@/utils/http/axios';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
import { GetUserParams, UserResultModel } from './model/userModel';

enum Api {
  Notice = '/user/edit',
}

export function getUserApi(params: GetUserParams) {
  return defHttp.request<UserResultModel>({
    url: Api.Notice,
    method: 'POST',
    params,
  });
}
