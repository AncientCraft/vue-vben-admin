<template>
  <Form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <FormItem
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </FormItem>

    <FormItem
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </FormItem>

    <FormItem name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <Checkbox v-model:checked="formState.remember">Remember me</Checkbox>
    </FormItem>

    <FormItem :wrapper-col="{ offset: 8, span: 16 }">
      <Button type="primary" html-type="submit">Submit</Button>
    </FormItem>

    <FormItem :wrapper-col="{ offset: 8, span: 16 }">
      <UploadImage />
    </FormItem>
  </Form>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Form, FormItem, Checkbox, Button } from 'ant-design-vue';
  import UploadImage from './UploadImage.vue';

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  export default defineComponent({
    components: { Form, FormItem, UploadImage, Checkbox, Button },
    setup() {
      const formState = reactive<FormState>({
        username: '',
        password: '',
        remember: true,
      });
      const onFinish = (values: any) => {
        console.log('Success:', values);
      };

      return {
        formState,
        onFinish,
      };
    },
  });
</script>
