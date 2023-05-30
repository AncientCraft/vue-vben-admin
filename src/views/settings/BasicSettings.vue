<template>
  <PageWrapper title="基础设置" contentFullHeight>
    <Form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <FormItem label="平台名称" :wrapper-col="{ span: 6 }">
        <Input v-model:value="formState.name" />
      </FormItem>
      <FormItem label="网站Logo">
        <Upload :subUrl="formState.logo.toString()" @image-done="aa" />
      </FormItem>
      <FormItem label="人物默认图吧">
        <Upload :subUrl="formState.logo.toString()" @image-done="aa" />
      </FormItem>
      <FormItem label="手机/邮箱验证码">
        <Switch v-model:checked="formState.delivery" />
      </FormItem>
      <FormItem label="客服地址" :wrapper-col="{ span: 6 }">
        <Input v-model:value="formState.desc" type="textarea" />
      </FormItem>
      <FormItem label="Banna图">
        <Upload :subUrl="formState.logo.toString()" @image-done="aa" />
      </FormItem>
      <FormItem :wrapper-col="{ span: 14, offset: 4 }">
        <Button type="primary" @click="onSubmit">Create</Button>
      </FormItem>
    </Form>
  </PageWrapper>
</template>
<script setup lang="ts">
  import { reactive, toRaw } from 'vue';
  import type { UnwrapRef } from 'vue';
  import { Form, FormItem, Input, Switch, Button } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';

  import Upload from './components/UploadImage.vue';

  // const logoUrl = ref('/upload/2023-05-29/64748b14672a4e000800000e.png');

  function aa(val) {
    // console.log(val);
    formState.logo = val;
  }

  interface FormState {
    name: string;
    delivery: boolean;
    logo: String;
    resource: string;
    desc: string;
  }

  const formState: UnwrapRef<FormState> = reactive({
    name: '',
    delivery: false,
    logo: '',
    resource: '',
    desc: '',
  });

  const labelCol = { style: { width: '150px' } };
  const wrapperCol = { span: 14 };
  const onSubmit = () => {
    console.log('submit!', toRaw(formState));
  };
</script>
