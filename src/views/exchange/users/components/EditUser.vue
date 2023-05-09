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
  import { loginApi } from '/@/api/exchange/user';

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
      field: 'account',
      component: 'Input',
      label: '用户账号',
      required: true,
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输用户账号',
        // onChange: (e: any) => {
        //   console.log(e);
        // },
      },
    },
    {
      field: 'readl_name',
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
      field: 'login_pass',
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
      field: 'trading_pass',
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
        placeholder: '请输小数精确到2位',
      },
    },
    {
      field: 'group',
      component: 'Select',
      label: '会员组',
      required: true,
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
      field: 'bank_acount',
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
      // onMounted(() => {
      //   // 在这里编写需要执行的逻辑代码
      //   console.log('editgoods组件已经挂载');
      //   // const params: EditParams = {
      //   //   open_day: '12374637647',
      //   //   close_day: '123',
      //   //   open_time: '123',
      //   //   close_time: '123',
      //   // };

      //   // setFieldsValue(params);

      //   // getGoodsApi(params);
      // });
      const modelRef = ref({});
      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: true,
        actionColOptions: {
          span: 24,
        },
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        console.log('Data Received', data);
        const params = {
          username: 'admin',
          password: '123',
        };

        const result = await loginApi(params);
        // const result = await getUserApi(data);
        console.log(result);
        // 方式1;
        setFieldsValue(result);

        // // 方式2
        // modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleSubmit(values: any) {
        console.log(values);
        // getGoodsApi(values);
        // let ccc = { ...values, id: 'John Doe' };
        // console.log(ccc);
        // createMessage.success('click search,values:' + JSON.stringify(values));
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
