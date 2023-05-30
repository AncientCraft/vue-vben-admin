import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Dashbord = '/usr/homeData',
}

export function homeApi() {
  return otherHttp.get({
    url: Api.Dashbord,
  });
}
