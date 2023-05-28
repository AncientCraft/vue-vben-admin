import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormProps, FormSchema } from '/@/components/Table';
// import moment from 'moment';

export function getWalletColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'user_id',
      width: 60,
    },
    {
      title: '币种',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '法币',
      children: [
        {
          title: '余额',
          dataIndex: 'fundsFree',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'fundsLocked',
          width: 30,
        },
      ],
    },
    {
      title: '币币',
      children: [
        {
          title: '余额',
          dataIndex: 'spotFree',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'spotLocked',
          width: 30,
        },
      ],
    },
    {
      title: '期权',
      children: [
        {
          title: '余额',
          dataIndex: 'optionFree',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'optionLocked',
          width: 30,
        },
      ],
    },
  ];
}

export function getAssetColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'user_id',
      width: 60,
    },
    {
      title: '币种',
      dataIndex: 'asset',
      width: 60,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 60,
    },
    {
      title: '变更账户',
      dataIndex: 'account',
      width: 60,
    },
    {
      title: '变更数量',
      dataIndex: 'changed',
      width: 60,
    },
    {
      title: '金额(USDT)',
      dataIndex: 'total_assets',
      width: 60,
    },
    {
      title: '变更后余额',
      dataIndex: 'after_changed',
      width: 60,
    },
    {
      title: '变更时间',
      dataIndex: 'update_time',
      width: 80,
    },
    {
      title: '操作账号',
      dataIndex: 'oprator',
      width: 60,
    },
  ];
}

export function getDepositColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'user_id',
      width: 60,
    },
    {
      title: '币种',
      dataIndex: 'asset',
      width: 60,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 60,
    },
    {
      title: '支付凭证',
      dataIndex: 'transfer_image',
      width: 100,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      width: 60,
    },
    {
      title: '金额(USDT)',
      dataIndex: 'price',
      width: 60,
    },
    {
      title: '交易状态',
      dataIndex: 'status',
      width: 60,
    },
    {
      title: '时间',
      dataIndex: 'update_time',
      width: 80,
    },
  ];
}

export function getWithdrawColumns(): BasicColumn[] {
  return [
    {
      title: '用户账号',
      dataIndex: 'account',
      fixed: 'left',
      width: 60,
    },
    {
      title: '用户ID',
      dataIndex: 'user_id',
      width: 60,
    },
    {
      title: '币种',
      dataIndex: 'asset',
      width: 60,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 60,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      width: 60,
    },
    {
      title: '金额(USDT)',
      dataIndex: 'price',
      width: 60,
    },
    {
      title: '交易状态',
      dataIndex: 'status',
      width: 60,
    },
    {
      title: '时间',
      dataIndex: 'update_time',
      width: 80,
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
        xl: 3,
        xxl: 3,
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
      {
        field: `field11`,
        label: `币种`,
        component: 'Select',
        componentProps: {
          options: [
            { label: '美元', value: 'USD' },
            { label: '欧元', value: 'EUR' },
            { label: '人民币', value: 'CNY' },
          ],
          // defaultValue: 'USD',
        },
        colProps: {
          xl: 4,
          xxl: 4,
        },
      },
      {
        field: `field12`,
        label: `时间`,
        component: 'RangePicker',
        colProps: {
          xl: 5,
          xxl: 5,
        },
      },
    ],
  };
}
