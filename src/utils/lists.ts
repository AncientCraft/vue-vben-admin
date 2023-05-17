import { useMessage } from '/@/hooks/web/useMessage';

export function mergeList(list1: any[], list2: any) {
  const result = list1.map((item) => {
    const item2 = list2[item.tid];
    return { ...item, ...item2 };
  });
  return result;
}

export function mergeOrder(list1: any[], users: any, balances: any) {
  const result = list1.map((item) => {
    const user = users[item.user_id];
    const balance = balances[item.tid];

    // const { trigger_time, ...rest } = item;

    const obj = {
      name: user.name,
      after_changed: balance.after_changed,
      before_changed: parseFloat(balance.after_changed) + parseFloat(balance.changed),
      trigger_display: makeTriggerDisplay(item.trigger_type),
      trigger_time_display: makeTriggerTime(item.status, item.trigger_time),
      status_display: makeStatus(item.status),
    };

    return { ...item, ...obj, ...user.config };
  });
  return result;
}

function makeTriggerDisplay(p) {
  switch (p) {
    case 400:
      return '盈利';
    case 500:
      return '亏损';
    default:
      return '正常';
  }
}

function makeStatus(status) {
  if (status === 400) {
    return '完成';
  } else {
    return '进行中';
  }
}

function makeTriggerTime(status, timestamp) {
  if (status === 400) {
    return '完成';
  } else {
    return timestamp_to_time_string(timestamp);
  }
}

export function mergeUser(users: any[], map1: any, map2: any, map3: any, online: any) {
  const result = users.map((item) => {
    const item1 = map1[item.tid];
    const item2 = map2[item.tid];
    const item3 = map3[item.tid];

    const isOnline = makeIsOnline(online, item.tid);

    const balance = {
      id_no: item.id_card.id_no,
      real_name: item.id_card.real_name,
      isOnline: isOnline,
      balance: item1.free,
      deposit: item2[200].quantity,
      withdraw: item2[100].quantity,
      amount: item3[400].quantity,
    };

    return { ...item, ...balance };
  });
  return result;
}

function makeIsOnline(online: any, tid) {
  if (online && online[tid]) {
    return '在线';
  }
  return '离线';
}

export function mergeWithdraw(withdraws: any[], users: any) {
  const result = withdraws.map((item) => {
    const item2 = users[item.user_id];
    const bank = item2.config;
    const other = {
      recieve_amount: item.quantity - item.fee,
      status_display: makeWithdrawStatus(item.status),
      name: item2.name,
    };
    return { ...item, ...bank, ...other };
  });
  return result;
}

function makeWithdrawStatus(p) {
  switch (p) {
    case 100:
      return '未审核';
    case 200:
      return '已审核';
    case 300:
      return '已完成';
    case 320:
      return '已取消';
    default:
      return '未知';
  }
}

export function withdrawParams(params: any) {
  const area = { type: 100 };
  const newParams = { ...params, ...area };
  return stransformParams(newParams);
}

export function depositParams(params: any) {
  const area = { type: 200 };
  const newParams = { ...params, ...area };
  return stransformParams(newParams);
}

export function stransformParams(params: any) {
  const { page, pageSize, startTime, endTime, ...rest } = params;
  const new_start_time = string_to_timestamp(startTime);
  const new_end_time = string_to_timestamp(endTime);
  const newParams = {
    skip: (page - 1) * pageSize,
    limit: pageSize,
    start_time: new_start_time,
    end_time: new_end_time,
  };
  return { ...newParams, ...rest };
}

export function stransformData(data) {
  const result = data.map((item) => {
    const { create_time, ...rest } = item;
    const newTime = timestamp_to_string(create_time);
    const newItem = {
      create_time: newTime,
    };
    return { ...newItem, ...rest };
  });
  return result;
}

export function orderParams(params: any) {
  const area = { area: 400 };
  const newParams = { ...params, ...area };
  return stransformParams(newParams);
}

export function closeParams(params: any) {
  const area = { area: 400, status: 400 };
  const newParams = { ...params, ...area };
  return stransformParams(newParams);
}

export function string_to_timestamp(dateString) {
  if (dateString != undefined) {
    const unixTimestamp = +new Date(dateString);
    return unixTimestamp;
  }
  return null;
}

export function timestamp_to_string(timestamp) {
  const date = new Date(timestamp);
  const dateString = date.toISOString().slice(0, 19).replace('T', ' ');
  return dateString;
}

export function timestamp_to_time_string(timestamp) {
  const date = new Date(timestamp);
  const timeString = date.toLocaleTimeString(); // 格式化时间字符串（含日期和时间）
  const timeStringOnly = timeString.replace(/^.*(\d{2}:\d{2}:\d{2}).*$/, '$1'); // 仅保留时间部分
  return timeStringOnly;
}

export function okOrFail(result: any) {
  const { createMessage } = useMessage();
  // const r = await changeBalnceApi(params);
  if (result.code === 0) {
    createMessage.success('操作成功');
  } else {
    createMessage.error('操作失败');
  }
}

export function notify(data) {
  switch (data.action) {
    case 'notify.order':
      return {
        key: 1,
        id: data.order.order_id,
        title: '新订单',
      };
    case 'notify.withdraw':
      return {
        key: 2,
        id: data.withdraw.order_id,
        title: '新提款',
      };
    default:
      return {
        key: 1,
        id: '1',
        title: '新订单',
      };
  }
}
