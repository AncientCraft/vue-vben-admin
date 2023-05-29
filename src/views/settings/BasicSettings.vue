<template>
  <PageWrapper title="基础设置" contentFullHeight>
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" @submit="handleSubmit" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { schemas } from './formData';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicForm, PageWrapper },
    setup() {
      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: true,
        actionColOptions: {
          span: 24,
        },
        submitButtonOptions: {
          text: '提交',
        },
      });

      onMounted(() => {
        setFieldsValue({ id: 1 });
      });

      async function handleSubmit(values: any) {
        console.log(values);
      }

      return {
        registerForm,
        handleSubmit,
      };
    },
  });
</script>
