import { defHttp } from '/@/utils/http/axios';
// import { NoticeParams, NoticeResultModel } from './model/noticeModel';
import { NoticeResultModel } from './model/noticeModel';

enum Api {
  Notice = '/notice/list',
}

// export function NoticeListApi(params: NoticeParams) {
//   return defHttp.request<NoticeResultModel>({
//     url: Api.Notice,
//     method: 'POST',
//     params,
//   });
// }

export function NoticeListApi() {
  return defHttp.request<NoticeResultModel>({
    url: Api.Notice,
    method: 'POST',
  });
}
