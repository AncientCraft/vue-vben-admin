import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Assets = '/usr/listBalanceCount',
}

export function assetsApi() {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Assets,
    })
    .then((res) => {
      const data = {
        items: res.balances,
      };
      return data;
    });
}
