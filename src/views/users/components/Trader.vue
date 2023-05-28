<template>
  <BasicModal
    title="新增交易员"
    v-bind="$attrs"
    @register="register"
    @visible-change="handleVisibleChange"
    width="800px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <div>
      <BasicForm @register="registerForm" @submit="handleSubmit" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { addUsersApi } from '/@/api/users';
  import { okOrFail } from '/@/utils/actions';
  // import { Descriptions, DescriptionsItem, Image } from 'ant-design-vue';

  const schemas: FormSchema[] = [
    {
      field: 'account',
      component: 'Input',
      label: '账号',
      colProps: {
        span: 13,
      },
    },
    {
      field: 'password',
      component: 'Input',
      label: '密码',
      colProps: {
        span: 13,
      },
    },
    {
      field: 'name',
      component: 'Input',
      label: '备注',
      colProps: {
        span: 13,
      },
    },
  ];

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: true,
        submitButtonOptions: {
          text: '提交',
        },
        actionColOptions: {
          span: 8,
        },
      });

      async function onDataReceive(data) {
        console.log(data);
        setFieldsValue(data);
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        handleVisibleChange,
        registerForm,
        handleSubmit: async (values: any) => {
          const r = await addUsersApi(values);
          okOrFail(r);
          // getGoodsApi(values);
          // console.log(values);
        },
      };
    },
  });
</script>
