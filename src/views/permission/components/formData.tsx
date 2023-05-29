import { FormSchema } from '/@/components/Form/index';
import type { TreeProps } from 'ant-design-vue';

export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '管理员账号',
    required: true,
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入',
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '管理员密码',
    required: true,
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入',
    },
  },
  {
    field: 'field4',
    component: 'Select',
    label: '管理员权限',
    colProps: {
      span: 13,
    },
    componentProps: {
      options: [
        {
          label: '超级管理员',
          value: '1',
          key: '1',
        },
        {
          label: '客服',
          value: '2',
          key: '2',
        },
        {
          label: '风控',
          value: '3',
          key: '3',
        },
      ],
    },
  },
];

export const schemasGroup: FormSchema[] = [
  {
    field: 'name',
    component: 'TreeSelect',
    label: 'ggg',
    required: true,
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入',
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '管理员密码',
    required: true,
    colProps: {
      span: 13,
    },
    componentProps: {
      placeholder: '请输入',
    },
  },
  {
    field: 'field4',
    component: 'Select',
    label: '管理员权限',
    colProps: {
      span: 13,
    },
    componentProps: {
      options: [
        {
          label: '超级管理员',
          value: '1',
          key: '1',
        },
        {
          label: '客服',
          value: '2',
          key: '2',
        },
        {
          label: '风控',
          value: '3',
          key: '3',
        },
      ],
    },
  },
];

export const treeData: TreeProps['treeData'] = [
  {
    title: '用户',
    key: '20',
    children: [
      {
        title: '用户列表',
        key: '2001',
      },
      {
        title: '实名管理',
        key: '2002',
      },
      {
        title: '交易员管理',
        key: '2003',
      },
      {
        title: '登入日志',
        key: '0-4',
      },
    ],
  },
  {
    title: '钱包',
    key: '30',
    children: [
      {
        title: '钱包管理',
        key: '3001',
      },
      {
        title: '资产变更记录',
        key: '3002',
      },
      {
        title: '充币申请',
        key: '3003',
      },
      {
        title: '提币申请',
        key: '3004',
      },
    ],
  },
  {
    title: '币种',
    key: '40',
    children: [
      {
        title: '币种管理',
        key: '4001',
      },
      {
        title: '法币比例',
        key: '4002',
      },
    ],
  },
  {
    title: '期权',
    key: '50',
    // children: [
    //   {
    //     title: '期权交易',
    //     key: '5001',
    //   },
    // ],
  },
  {
    title: '资产',
    key: '60',
    // children: [
    //   {
    //     title: '资产详情',
    //     key: '4-1',
    //   },
    // ],
  },
  {
    title: '设置',
    key: '70',
    children: [
      {
        title: '基础设置',
        key: '7001',
      },
      {
        title: '期权设置',
        key: '7002',
      },
    ],
  },
];
