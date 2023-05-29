import { FormSchema } from '/@/components/Form/index';

export const schemas: FormSchema[] = [
  {
    field: 'user_id',
    component: 'Input',
    label: '用户ID',
    colProps: {
      span: 8,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'account',
    component: 'Input',
    label: '用户账号',
    colProps: {
      span: 8,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'symbol',
    component: 'Input',
    label: '已选币种',
    colProps: {
      span: 13,
    },
    componentProps: {
      disabled: true,
    },
  },

  {
    field: 'd1',
    component: 'Divider',
    label: '法币',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'fundsFree',
    component: 'Input',
    label: '余额',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
  {
    field: 'fundsLocked',
    component: 'Input',
    label: '冻结',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },

  {
    field: 'd2',
    component: 'Divider',
    label: '法币',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'fundsFree',
    component: 'Input',
    label: '余额',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
  {
    field: 'fundsLocked',
    component: 'Input',
    label: '冻结',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },

  {
    field: 'd3',
    component: 'Divider',
    label: '期权',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'fundsFree',
    component: 'Input',
    label: '余额',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
  {
    field: 'fundsLocked',
    component: 'Input',
    label: '冻结',
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入金额',
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
];
