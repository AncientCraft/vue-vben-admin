import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Order = '/usr/searchOrder',
}

export function orderApi(params) {
  return otherHttp
    .get({
      url: Api.Order,
      params,
    })
    .then((respond) => {
      const data = {
        items: respond.order,
        total: respond.total,
      };
      return data;
    });
}
