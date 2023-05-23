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
    key: '0',
    children: [
      {
        title: '用户列表',
        key: '0-1',
      },
      {
        title: '实名管理',
        key: '0-2',
      },
      {
        title: '交易员管理',
        key: '0-3',
      },
      {
        title: '登入日志',
        key: '0-4',
      },
    ],
  },
  {
    title: '钱包',
    key: '1',
    children: [
      {
        title: '钱包管理',
        key: '1-1',
      },
      {
        title: '资产变更记录',
        key: '1-2',
      },
      {
        title: '充币申请',
        key: '1-3',
      },
      {
        title: '提币申请',
        key: '1-4',
      },
    ],
  },
  {
    title: '币种',
    key: '2',
    children: [
      {
        title: '币种管理',
        key: '2-1',
      },
      {
        title: '法币比例',
        key: '2-2',
      },
    ],
  },
  {
    title: '期权',
    key: '3',
    children: [
      {
        title: '期权交易',
        key: '3-1',
      },
    ],
  },
  {
    title: '资产',
    key: '4',
    children: [
      {
        title: '资产详情',
        key: '4-1',
      },
    ],
  },
  {
    title: '设置',
    key: '5',
    children: [
      {
        title: '基础设置',
        key: '5-1',
      },
      {
        title: '期权设置',
        key: '5-2',
      },
    ],
  },
];
