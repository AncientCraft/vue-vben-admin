import { BasicColumn } from '/@/components/Table/src/types/table';

export function getOptionsColumns(): BasicColumn[] {
  return [
    {
      title: 'Id',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '秒数',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '显示',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '收益率',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '最低金额(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '最高金额(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
  ];
}
