import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '用户ID',
      dataIndex: 'tid',
      fixed: 'left',
      width: 50,
    },
    {
      title: '用户名',
      dataIndex: 'account',
      width: 50,
    },
    {
      title: '姓名',
      dataIndex: 'real_name',
      width: 50,
    },
    // {
    //   title: '会员等级',
    //   dataIndex: 'level',
    //   width: 50,
    // },
    // {
    //   title: '推荐人',
    //   dataIndex: 'parent',
    //   width: 50,
    // },
    {
      title: '账户余额',
      dataIndex: 'balance',
      width: 50,
    },
    {
      title: '提现总额',
      dataIndex: 'withdraw',
      width: 30,
    },
    {
      title: '充值总额',
      dataIndex: 'deposit',
      width: 30,
    },
    // {
    //   title: '总投资额',
    //   dataIndex: 'cost',
    //   width: 30,
    // },
    {
      title: '在线状态',
      dataIndex: 'isOnline',
      width: 30,
    },
    {
      title: '委托金额',
      dataIndex: 'amount',
      width: 40,
    },
    {
      title: '注册地址',
      dataIndex: 'address',
      width: 40,
    },
    {
      title: '最近上线时间',
      dataIndex: 'update_time',
      width: 40,
    },
  ];
}

export function getTradingColumns(): BasicColumn[] {
  return [
    {
      title: '流水编号',
      dataIndex: 'order_id',
      fixed: 'left',
      width: 50,
    },
    {
      title: '交易对象',
      dataIndex: 'name',
      width: 50,
    },
    {
      title: '真实姓名',
      dataIndex: 'bank_real_name',
      width: 50,
    },
    {
      title: '交易金额',
      dataIndex: 'quantity',
      width: 40,
    },
    {
      title: '交易前余额',
      dataIndex: 'before_changed',
      width: 40,
    },
    {
      title: '详情',
      dataIndex: 'symbol',
      width: 40,
    },
    {
      title: '流水时间',
      dataIndex: 'create_time',
      width: 100,
      sorter: true,
    },
  ];
}

export function getBankColumns(): BasicColumn[] {
  return [
    {
      title: '会员ID',
      dataIndex: 'user_id',
      fixed: 'left',
      width: 50,
    },
    {
      title: '会员名',
      dataIndex: 'name',
      width: 50,
    },
    {
      title: '开户姓名',
      dataIndex: 'bank_real_name',
      width: 50,
    },
    {
      title: '开户银行',
      dataIndex: 'bank_name',
      width: 40,
    },
    {
      title: '支行名称',
      dataIndex: 'bank_branch',
      width: 40,
    },
    {
      title: '银行账号',
      dataIndex: 'bank_account',
      width: 80,
    },
  ];
}

export const getAdvanceSchema = (): FormSchema[] => {
  const arr: any = [];
  arr.push({
    field: 'key',
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
  // for (let index = 0; index < itemNumber; index++) {
  //   arr.push({
  //     field: `field${index}`,
  //     label: `字段${index}`,
  //     component: 'Input',
  //     colProps: {
  //       xl: 12,
  //       xxl: 8,
  //     },
  //   });
  // }
  return arr;
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [...getAdvanceSchema()],
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
