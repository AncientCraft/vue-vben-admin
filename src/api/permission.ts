import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Groups = '/admin/listAdminGroup',
  Update = '/admin/updateCurrency',
  Add = '/admin/addCurrency',
}

export function permissionGroupsApi() {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Groups,
    })
    .then((res) => {
      // const r = mergeOptions(res);
      const data = {
        items: res.groups,
        total: res.total,
      };
      return data;
    });
}

export function updateSymbolsApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Update,
    params,
  });
}

export function addSymbolsApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Add,
    params,
  });
}
