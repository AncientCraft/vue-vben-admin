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
