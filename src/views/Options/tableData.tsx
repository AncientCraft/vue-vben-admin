import { BasicColumn } from '/@/components/Table/src/types/table';

export function getOptionsColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '用户账号',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '真实姓名',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '期权',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '类型',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '状态',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '金额(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '手续费(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '预设',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '结果',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '盈亏(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '开仓价',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '平仓价',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '下单时间',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '操作',
      dataIndex: 'actions',
      width: 60,
    },
  ];
}
