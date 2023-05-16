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
  import { changeBalnceApi } from '/@/api/exchange/member';
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
      label: '用户ID',
      required: true,
      colProps: {
        span: 8,
      },
      componentProps: {
        disabled: true,
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
        disabled: true,
      },
    },

    {
      field: 'balance',
      component: 'Input',
      label: '总余额',
      colProps: {
        span: 8,
      },
      componentProps: {
        disabled: true,
      },
    },
    {
      field: 'type',
      component: 'Select',
      label: '金额变动方向',
      required: true,
      defaultValue: 200,
      componentProps: {
        options: [
          {
            label: '增加',
            value: 200,
          },
          {
            label: '减少',
            value: 100,
          },
        ],
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'changed',
      component: 'Input',
      label: '变化金额',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输小数精确到2位',
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
        // 方式1;
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
        // console.log(values);
        const params = {
          user_id: values.user_id,
          changed: parseInt(values.changed),
          type: values.type,
        };
        // console.log(params);
        const r = await changeBalnceApi(params);
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
