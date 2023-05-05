import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '备注',
      dataIndex: 'remark',
      width: 40,
    },
    {
      title: '入款',
      dataIndex: 'deposit',
      width: 50,
    },
    {
      title: '出款',
      dataIndex: 'withdraw',
      width: 50,
    },
    {
      title: '首充人数',
      dataIndex: 'first_deposit',
      width: 50,
    },
    {
      title: '活跃人数',
      dataIndex: 'activity',
      width: 50,
    },
    {
      title: '订单数量',
      dataIndex: 'order_amount',
      width: 50,
    },
    {
      title: '客户盈亏',
      dataIndex: 'profit_and_loss',
      width: 50,
    },
    {
      title: '流水',
      dataIndex: 'flow',
      width: 50,
    },
  ];
}

export function getDailyColumns(): BasicColumn[] {
  return [
    {
      title: '日期',
      dataIndex: 'date_time',
      width: 40,
    },
    {
      title: '新增用户',
      dataIndex: 'new_user',
      width: 50,
    },
    {
      title: '入款',
      dataIndex: 'deposit',
      width: 50,
    },
    {
      title: '出款',
      dataIndex: 'withdraw',
      width: 50,
    },
    {
      title: '首充人数',
      dataIndex: 'first_deposit',
      width: 50,
    },
    {
      title: '活跃人数',
      dataIndex: 'activity',
      width: 50,
    },
    {
      title: '订单数量',
      dataIndex: 'order_amount',
      width: 30,
    },
    {
      title: '客户盈亏',
      dataIndex: 'profit_and_loss',
      width: 30,
    },
    {
      title: '流水',
      dataIndex: 'flow',
      width: 30,
    },
  ];
}
