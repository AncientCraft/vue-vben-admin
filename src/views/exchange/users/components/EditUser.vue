<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="编辑会员"
    @visible-change="handleVisibleChange"
    width="900px"
    footer-hide
    :showOkBtn="false"
    :showCancelBtn="false"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" @submit="handleSubmit" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { updateApi } from '/@/api/exchange/member';
  import { okOrFail } from '/@/utils/lists';

  const schemas: FormSchema[] = [
    {
      field: 'd1',
      component: 'Divider',
      label: '基本信息',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'user_id',
      component: 'Input',
      label: '用户账号',
      colProps: {
        span: 8,
      },
      componentProps: {
        disabled: true,
        // onChange: (e: any) => {
        //   console.log(e);
        // },
      },
    },
    {
      field: 'bank_real_name',
      component: 'Input',
      label: '姓名',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入真实姓名',
      },
    },

    {
      field: 'password',
      component: 'Input',
      label: '登入密码',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输密码',
      },
    },
    {
      field: 'trade_pass',
      component: 'Input',
      label: '交易密码',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输密码',
      },
    },
    {
      field: 'balance',
      component: 'Input',
      label: '余额',
      colProps: {
        span: 8,
      },
      componentProps: {
        disabled: true,
      },
    },
    {
      field: 'group',
      component: 'Select',
      label: '会员组',
      defaultValue: '1',
      componentProps: {
        options: [
          {
            label: '普通会员',
            value: '1',
          },
          {
            label: 'VIP',
            value: '2',
          },
        ],
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'd2',
      component: 'Divider',
      label: '银行卡信息',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'bank_name',
      component: 'Input',
      label: '所属银行',
      colProps: {
        span: 20,
      },
      componentProps: {
        placeholder: '请输入银行名称',
      },
    },
    {
      field: 'bank_branch',
      component: 'Input',
      label: '支行名称',
      colProps: {
        span: 20,
      },
      componentProps: {
        placeholder: '请输入银行支行',
      },
    },
    {
      field: 'bank_account',
      component: 'Input',
      label: '银行卡号',
      colProps: {
        span: 20,
      },
      componentProps: {
        placeholder: '请输入银行卡号',
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
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

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        console.log('Data Received', data);
        setFieldsValue(data);

        // // 方式2
        // modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      async function handleSubmit(values: any) {
        console.log(values);
        const config = {
          bank_account: values.bank_account,
          bank_branch: values.bank_branch,
          bank_name: values.bank_name,
          bank_real_name: values.bank_real_name,
        };

        const params = {
          tid: parseInt(values.user_id),
          config: config,
        };
        // console.log(params);
        const r = await updateApi(params);
        okOrFail(r);
      }

      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        handleSubmit,
      };
    },
  });
</script>
