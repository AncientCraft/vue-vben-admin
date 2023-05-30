import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Users = '/usr/searchUser',
  Add = 'usr/addUser',
  Update = '/usr/updateUser',
  LoginLog = '/usr/listUserRecord',
}

export function usersApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Users,
      params,
    })
    .then((res) => {
      const r = mergeUser(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeUser(data) {
  const users = data.users;
  const balances = data.balances;
  const online = data.online;
  const result = users.map((item) => {
    const item1 = balances[item.tid];
    const fundsFree = item1?.[100]?.free ?? '0';
    const fundsLocked = item1?.[100]?.locked ?? '0';
    const spotFree = item1?.[200]?.free ?? '0';
    const spotLocked = item1?.[200]?.locked ?? '0';
    const optionFree = item1?.[400]?.free ?? '0';
    const optionLocked = item1?.[400]?.locked ?? '0';
    const balance = {
      fundsFree,
      fundsLocked,
      spotFree,
      spotLocked,
      optionFree,
      optionLocked,
      totalFree: parseFloat(fundsFree) + parseFloat(spotFree) + parseFloat(optionFree),
      totalLocked: parseFloat(fundsLocked) + parseFloat(spotLocked) + parseFloat(optionLocked),
    };
    const isOnline = online[item.tid] ? '在线' : '不在线';
    return { ...item, ...balance, isOnline };
  });
  return result;
}

export function addUsersApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Add,
    params,
  });
}

export function updateUsersApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Update,
    params,
  });
}

export function loginLogApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.LoginLog,
      params,
    })
    .then((res) => {
      const r = mergeLog(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeLog(data) {
  const users = data.users;
  const list = data.records;
  const result = list.map((item) => {
    const item1 = users[item.user_id];
    return { ...item, ...item1 };
  });
  return result;
}