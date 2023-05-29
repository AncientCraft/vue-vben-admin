import { FormSchema } from '/@/components/Form/index';
import { uploadApi } from '/@/api/sys/upload';

export const schemas: FormSchema[] = [
  // {
  //   field: 'tid',
  //   component: 'Input',
  //   label: '',
  //   componentProps: {
  //     style: {
  //       display: 'none',
  //     },
  //   },
  // },
  {
    field: 'd1',
    component: 'Divider',
    label: '基本信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '币种名称',
    required: true,
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入币种',
    },
  },
  {
    field: 'sort',
    component: 'Input',
    label: '排序',
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入整数',
      // type: 'number',
      // parser: (value: string) => parseInt(value, 10),
    },
    rules: [{ pattern: /^[1-9]\d*$/, message: '请输入无符号整数' }],
  },
  {
    field: 'assets',
    component: 'CheckboxGroup',
    label: '账户资产显示',
    colProps: {
      span: 13,
    },
    componentProps: {
      options: [
        {
          label: '币币',
          value: '1',
        },
        {
          label: '法币',
          value: '2',
        },
        {
          label: '期权',
          value: '3',
        },
      ],
    },
  },
  {
    field: 'fieldsc',
    component: 'Upload',
    label: 'Logo',
    colProps: {
      span: 13,
    },
    rules: [{ required: false, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },

  {
    field: 'd2',
    component: 'Divider',
    label: '提币参数',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'withdraw_min',
    component: 'Input',
    label: '最小提币数量',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'withdraw_max',
    component: 'Input',
    label: '最大提币数量',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'withdraw_fee',
    component: 'Input',
    label: '提币手续费',
    required: true,
    colProps: {
      span: 12,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },

  {
    field: 'd3',
    component: 'Divider',
    label: '充币参数',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'topup.config[0].address',
    component: 'Input',
    label: '充币地址1',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'topup.config[0].network',
    component: 'Input',
    label: '网络1',
    required: true,
    colProps: {
      span: 8,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'topup.config[1].address',
    component: 'Input',
    label: '充币地址2',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'topup.config[1].network',
    component: 'Input',
    label: '网络2',
    required: true,
    colProps: {
      span: 8,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },

  {
    field: 'd4',
    component: 'Divider',
    label: '期权参数',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'order_min',
    component: 'Input',
    label: '下单最小范围',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'order_max',
    component: 'Input',
    label: '下单最大范围',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
  {
    field: 'order_total',
    component: 'Input',
    label: '最大持仓数',
    required: true,
    colProps: {
      span: 12,
    },
    componentProps: {
      placeholder: '请输入数量',
    },
  },
];
