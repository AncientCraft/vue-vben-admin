import { FormSchema } from '/@/components/Form/index';
import { uploadApi } from '/@/api/sys/upload';

export const schemas: FormSchema[] = [
  {
    field: 'd1',
    component: 'Divider',
    label: '基本信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'platform',
    component: 'Input',
    label: '平台名称',
    colProps: {
      span: 17,
    },
    componentProps: {
      placeholder: '请输入平台名称',
    },
  },
  {
    field: 'logo',
    component: 'Upload',
    label: '网站Logo',
    colProps: {
      span: 8,
    },
    rules: [{ required: false, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },
  {
    field: 'avtar',
    component: 'Upload',
    label: '用户默认头像',
    colProps: {
      span: 9,
    },
    rules: [{ required: false, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },
  {
    field: 'field9',
    component: 'Switch',
    label: '手机/邮箱验证码',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'platform',
    component: 'Input',
    label: '客服地址',
    colProps: {
      span: 17,
    },
    componentProps: {
      placeholder: '请输入平台名称',
    },
  },

  {
    field: 'd2',
    component: 'Divider',
    label: '广告图设置',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'add',
    component: 'Upload',
    label: 'Bnner图',
    colProps: {
      span: 8,
    },
    rules: [{ required: false, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },
];
