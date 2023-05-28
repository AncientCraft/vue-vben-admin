import { otherHttp } from '/@/utils/http/axios';

enum Api {
  Wallet = '/usr/searchBalance',
  Change = '/admin/changeUserBalance',
  Assets = '/usr/searchBalanceRecord',
  Flow = '/usr/searchWithdraw',
  DepositAuth = '/admin/doneTopup',
  WithdrawAuth = '/admin/doneWithdraw',
}

export function walletApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Wallet,
      params,
    })
    .then((res) => {
      const r = mergeWallet(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeWallet(data) {
  const users = data.users;
  const list = data.balances;
  const result = list.map((item) => {
    const item1 = users[item.user_id];
    const balances = item.balance;
    const balance = {
      fundsFree: balances?.[100]?.free ?? 0,
      fundsLocked: balances?.[100]?.locked ?? 0,
      spotFree: balances?.[200]?.free ?? 0,
      spotLocked: balances?.[200]?.locked ?? 0,
      optionFree: balances?.[300]?.free ?? 0,
      optionLocked: balances?.[300]?.locked ?? 0,
    };
    const others = {
      symbol: item.asset,
      user_id: item.user_id,
      account: item1.account,
    };

    return { ...others, ...balance };
  });
  return result;
}

export function changeApi(params: any) {
  return otherHttp.request({
    method: 'POST',
    url: Api.Change,
    params,
  });
}

export function assetsChangdRecordApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Assets,
      params,
    })
    .then((res) => {
      const r = mergeAssets(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeAssets(data) {
  const users = data.users;
  const list = data.records;
  // const balances = data.balances;
  const result = list.map((item) => {
    const item1 = users[item.user_id];
    // const item2 = balances[item.tid];
    // const fundsFree = item1?.[100]?.free ?? '0';
    // const fundsLocked = item1?.[100]?.locked ?? '0';
    // const spotFree = item1?.[200]?.free ?? '0';
    // const spotLocked = item1?.[200]?.locked ?? '0';
    // const optionFree = item1?.[400]?.free ?? '0';
    // const optionLocked = item1?.[400]?.locked ?? '0';
    // const balance = {
    //   fundsFree,
    //   fundsLocked,
    //   spotFree,
    //   spotLocked,
    //   optionFree,
    //   optionLocked,
    //   totalFree: parseFloat(fundsFree) + parseFloat(spotFree) + parseFloat(optionFree),
    //   totalLocked: parseFloat(fundsLocked) + parseFloat(spotLocked) + parseFloat(optionLocked),
    // };
    const others = {
      user_id: item.user_id,
      account: item1.account,
    };

    return { ...others, ...item };
  });
  return result;
}

export function flowApi(params: any) {
  return otherHttp
    .request({
      method: 'GET',
      url: Api.Flow,
      params,
    })
    .then((res) => {
      const r = mergeFlow(res);
      const data = {
        items: r,
        total: res.total,
      };
      return data;
    });
}

function mergeFlow(data) {
  const users = data.users;
  const list = data.withdraws;
  const result = list.map((item) => {
    const item1 = users[item.user_id];
    const others = {
      user_id: item.user_id,
      account: item1.account,
    };

    return { ...others, ...item };
  });
  return result;
}

export function depositAuthApi(params: any) {
  return otherHttp.request({
    method: 'GET',
    url: Api.DepositAuth,
    params,
  });
}

export function withdrawAuthApi(params: any) {
  return otherHttp.request({
    method: 'GET',
    url: Api.WithdrawAuth,
    params,
  });
}
