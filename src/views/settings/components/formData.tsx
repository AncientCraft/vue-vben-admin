import { FormSchema } from '/@/components/Form/index';

export const schemas: FormSchema[] = [
  {
    field: 'interval',
    component: 'Input',
    label: '秒数',
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入秒数',
    },
    rules: [{ pattern: /^[1-9]\d*$/, message: '请输入无符号整数' }],
  },
  {
    field: 'rate',
    component: 'Input',
    label: '收益率',
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入收益率',
      // type: 'number',
      // parser: (value: string) => parseInt(value, 10),
    },
    rules: [{ pattern: /^[0-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
  {
    field: 'min',
    component: 'Input',
    label: '最低金额',
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入金额',
      // type: 'number',
      // parser: (value: string) => parseInt(value, 10),
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
  {
    field: 'max',
    component: 'Input',
    label: '最高金额',
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入金额',
      // type: 'number',
      // parser: (value: string) => parseInt(value, 10),
    },
    rules: [{ pattern: /^[1-9]\d*\.?\d*$/, message: '请输入数字' }],
  },
];
