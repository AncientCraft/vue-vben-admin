import { useMessage } from '/@/hooks/web/useMessage';

export function mergeList(list1: any[], list2: any[]) {
  const result = list1.map((item) => {
    const item2 = list2[item.tid];
    return { ...item, ...item2 };
  });
  return result;
}

export function mergeOrder(list1: any[], list2: any[]) {
  const result = list1.map((item) => {
    const item2 = list2[item.tid];
    return { ...item, ...item2 };
  });
  return result;
}

export function stransformParams(params: any) {
  const { page, pageSize, startTime, endTime, ...rest } = params;
  const new_start_time = string_to_timestamp(startTime);
  const new_end_time = string_to_timestamp(endTime);
  const newParams = {
    skip: page - 1,
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

export function okOrFail(result: any) {
  const { createMessage } = useMessage();
  // const r = await changeBalnceApi(params);
  if (result.code === 0) {
    createMessage.success('操作成功');
  } else {
    createMessage.error('操作失败');
  }
}
