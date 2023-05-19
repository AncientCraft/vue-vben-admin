<template>
  <div class="pt-3px pr-3px">
    <BasicForm @register="registerForm" :model="model" @submit="handleSubmit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { getSettingsApi, updateSettingsApi } from '/@/api/exchange/goods';

  const schemas: FormSchema[] = [
    {
      field: 'd1',
      component: 'Divider',
      label: '提现设置',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'min',
      component: 'Input',
      label: '可提取最小金额',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入金额',
      },
    },
    {
      field: 'max',
      component: 'Input',
      label: '可提取最大金额',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入金额',
      },
    },
    {
      field: 'fee_rate',
      component: 'Input',
      label: '手续费率',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入金额',
      },
    },
    {
      field: 'start_time',
      component: 'Input',
      label: '提现开始时间',
      colProps: {
        span: 5,
      },
      componentProps: {
        placeholder: '00:00:00',
      },
    },

    {
      field: 'end_time',
      component: 'Input',
      label: '提现结束时间',
      colProps: {
        span: 5,
      },
      componentProps: {
        placeholder: '00:00:00',
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm },
    props: {
      userData: { type: Object },
    },
    setup() {
      const modelRef = ref({});
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

      onMounted(async () => {
        const rr = await getSettingsApi();
        const data = JSON.parse(rr.config.withdraw_limit);
        console.log(data);
        setFieldsValue(data);
      });

      async function handleSubmit(values: any) {
        const ss = JSON.stringify(values);
        const data = {
          withdraw_limit: ss,
        };
        updateSettingsApi(data);
        // console.log(values);
      }

      return {
        schemas,
        registerForm,
        model: modelRef,
        handleSubmit,
      };
    },
  });
</script>
