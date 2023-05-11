export function mergeList(list1: any[], list2: any[]) {
  const result = list1.map((item) => {
    const item2 = list2[item.tid];
    return { ...item, ...item2 };
  });
  return result;
}

export function stransformParams(params) {
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
