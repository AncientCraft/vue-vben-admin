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

export function timestampToString(t) {
  const date = new Date(t);
  const timeString = date.toLocaleDateString(); // 格式化时间字符串（含日期和时间）
  // const timeStringOnly = timeString.replace(/^.*(\d{2}:\d{2}:\d{2}).*$/, '$1'); // 仅保留时间部分
  return timeString;
}

export function string_to_timestamp(dateString) {
  if (dateString != undefined) {
    const unixTimestamp = +new Date(dateString);
    return unixTimestamp;
  }
  return null;
}

export function orderStatus(s) {
  switch (s) {
    case 100:
      return '未处理';
    case 200:
      return '已审核';
    case 300:
      return '已完成';
    case 320:
      return '拒绝';
    default:
      return '未知';
  }
}

export function userStatus(s) {
  switch (s) {
    case 100:
      return '正常';
    case 200:
      return '冻结';
    default:
      return '未知';
  }
}

export function controllStatus(s) {
  switch (s) {
    case 100:
      return '正常';
    case 200:
      return '控赢';
    case 300:
      return '控输';
    default:
      return '未知';
  }
}
