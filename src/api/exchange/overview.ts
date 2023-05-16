import { otherHttp } from '/@/utils/http/axios';
// import { mergeOrder } from '/@/utils/lists';

enum Api {
  Dashbord = '/usr/homeData',
}

export function homeApi() {
  return otherHttp.get({
    url: Api.Dashbord,
  });
}
