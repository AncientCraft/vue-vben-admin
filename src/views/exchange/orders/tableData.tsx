import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '订单编号',
      dataIndex: 'order_no',
      fixed: 'left',
      width: 50,
    },
    {
      title: '会员ID',
      dataIndex: 'user_id',
      width: 50,
    },
    {
      title: '会员名',
      dataIndex: 'user_name',
      width: 50,
    },
    {
      title: '订单时间',
      dataIndex: 'order_time',
      width: 100,
      sorter: true,
    },
    {
      title: '产品信息',
      dataIndex: 'order_info',
      width: 50,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 30,
    },
    {
      title: '方向',
      dataIndex: 'position',
      width: 30,
    },
    {
      title: '方向',
      dataIndex: 'position',
      width: 30,
    },
    {
      title: '时间',
      dataIndex: 'interval',
      width: 30,
    },
    {
      title: '平仓点位',
      dataIndex: 'close_point',
      width: 30,
    },
    {
      title: '委托金额',
      dataIndex: 'order_amount',
      width: 40,
    },
    {
      title: '实际盈亏',
      dataIndex: 'profit_and_loss',
      width: 40,
    },
    {
      title: '买后余额',
      dataIndex: 'balance',
      width: 40,
    },
  ];
}

export function getCloseColumns(): BasicColumn[] {
  return [
    {
      title: '订单编号',
      dataIndex: 'order_no',
      fixed: 'left',
      width: 50,
    },
    {
      title: '会员ID',
      dataIndex: 'user_id',
      width: 50,
    },
    {
      title: '会员名',
      dataIndex: 'user_name',
      width: 50,
    },
    {
      title: '增加金额',
      dataIndex: 'increase_amount',
      width: 40,
    },
    {
      title: '增加积分',
      dataIndex: 'increase_point',
      width: 40,
    },
    {
      title: '平仓后余额',
      dataIndex: 'balance',
      width: 40,
    },
    {
      title: '平仓时间',
      dataIndex: 'order_time',
      width: 100,
      sorter: true,
    },
  ];
}

export function getWithdrawColumns(): BasicColumn[] {
  return [
    {
      title: '订单编号',
      dataIndex: 'order_no',
      fixed: 'left',
      width: 50,
    },
    {
      title: '会员名',
      dataIndex: 'user_name',
      width: 50,
    },
    {
      title: '姓名',
      dataIndex: 'real_name',
      width: 50,
    },
    {
      title: '开户银行',
      dataIndex: 'bank_name',
      width: 40,
    },
    {
      title: '支行名称',
      dataIndex: 'branch',
      width: 40,
    },
    {
      title: '银行账号',
      dataIndex: 'bank_account',
      width: 80,
    },
    {
      title: '提现金额',
      dataIndex: 'amount',
      width: 50,
    },
    {
      title: '手续费',
      dataIndex: 'rate',
      width: 20,
    },
    {
      title: '实际到账',
      dataIndex: 'real_amount',
      width: 50,
    },
    {
      title: '提交时间',
      dataIndex: 'order_time',
      width: 100,
      sorter: true,
    },
    {
      title: '处理进度',
      dataIndex: 'status',
      width: 30,
    },
  ];
}

export function getDepositColumns(): BasicColumn[] {
  return [
    {
      title: '订单编号',
      dataIndex: 'order_no',
      fixed: 'left',
      width: 50,
    },
    {
      title: '会员名',
      dataIndex: 'user_name',
      width: 50,
    },
    {
      title: '姓名',
      dataIndex: 'real_name',
      width: 50,
    },
    {
      title: '开户银行',
      dataIndex: 'bank_name',
      width: 40,
    },
    {
      title: '支行名称',
      dataIndex: 'branch',
      width: 40,
    },
    {
      title: '银行账号',
      dataIndex: 'bank_account',
      width: 80,
    },
    {
      title: '充足金额',
      dataIndex: 'amount',
      width: 50,
    },
    {
      title: '提交时间',
      dataIndex: 'order_time',
      width: 100,
      sorter: true,
    },
  ];
}

export const getAdvanceSchema = (): FormSchema[] => {
  const arr: any = [];
  arr.push({
    field: 'user_id',
    label: '会员ID',
    component: 'Input',
    colProps: {
      xl: 8,
      xxl: 4,
    },
  });
  arr.push({
    field: 'user_name',
    label: '会员名字',
    component: 'Input',
    colProps: {
      xl: 8,
      xxl: 4,
    },
  });
  arr.push({
    field: '[startTime, endTime]',
    label: '时间范围',
    component: 'RangePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      placeholder: ['开始时间', '结束时间'],
      showTime: { format: 'HH:mm:ss' },
    },
    colProps: {
      xl: 12,
      xxl: 5,
    },
  });
  return arr;
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      ...getAdvanceSchema(),
      // {
      //   field: `field11`,
      //   label: `Slot示例`,
      //   component: 'Select',
      //   slot: 'custom',
      //   colProps: {
      //     xl: 12,
      //     xxl: 8,
      //   },
      // },
    ],
  };
}
export function getBasicData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: '虚拟币',
        state: '开市',
        age: `1${index}`,
        rand: 0.02,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}
