import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormProps, FormSchema } from '/@/components/Table';

export function getUserColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'tid',
      width: 60,
    },
    {
      title: '真实姓名',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '总资产(USDT)',
      dataIndex: 'totalFree',
      width: 60,
    },
    {
      title: '总冻结(USDT)',
      dataIndex: 'totalLocked',
      width: 60,
    },
    {
      title: '期权控制',
      dataIndex: 'options_controll',
      width: 60,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 60,
    },
    {
      title: '最后一次登入时间',
      dataIndex: 'last_login_time',
      width: 80,
    },
  ];
}

export function getNamesColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'tid',
      width: 60,
    },
    {
      title: '证件类型',
      dataIndex: 'type',
      width: 60,
    },
    {
      title: '真实姓名',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '证件号码',
      dataIndex: 'id_no',
      width: 60,
    },

    {
      title: '是否审核',
      dataIndex: 'checked',
      width: 60,
    },
    {
      title: '申请时间',
      dataIndex: 'id_card_apply_time',
      width: 80,
    },
  ];
}

export function getTraderColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '备注',
      dataIndex: 'type',
      width: 60,
    },
    {
      title: '总资产(USDT)',
      dataIndex: 'totalFree',
      width: 60,
    },
    {
      title: '总冻结(USDT)',
      dataIndex: 'totalLocked',
      width: 60,
    },
    {
      title: '期权控制',
      dataIndex: 'options_controll',
      width: 60,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 60,
    },
    {
      title: '最后一次登入时间',
      dataIndex: 'last_times',
      width: 80,
    },
  ];
}

export function getLoginColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 60,
    },
    {
      title: '真实姓名',
      dataIndex: 'real_name',
      width: 60,
    },
    {
      title: '登入IP地址',
      dataIndex: 'addr',
      width: 100,
    },
    {
      title: '登入时间',
      dataIndex: 'times',
      width: 100,
    },
  ];
}

export const getAdvanceSchema = (itemNumber = 1): FormSchema[] => {
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `字段${index}`,
      component: 'Input',
      colProps: {
        xl: 4,
        xxl: 4,
      },
    });
  }
  return arr;
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 50,
    schemas: [
      ...getAdvanceSchema(1),
      // {
      //   field: `field11`,
      //   label: `Slot示例`,
      //   component: 'Select',
      //   // slot: 'custom',
      //   // colProps: {
      //   //   xl: 12,
      //   //   xxl: 8,
      //   // },
      // },
    ],
  };
}
