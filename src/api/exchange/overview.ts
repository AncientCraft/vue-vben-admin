import { otherHttp } from '/@/utils/http/axios';
// import { mergeOrder } from '/@/utils/lists';

enum Api {
  Dashbord = '/usr/homeData',
}

export function homeApi(params) {
  return otherHttp.get({
    url: Api.Dashbord,
    params,
  });
}
