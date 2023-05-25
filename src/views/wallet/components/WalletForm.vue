<template>
  <BasicModal
    title="修改台面分"
    v-bind="$attrs"
    @register="register"
    @visible-change="handleVisibleChange"
    width="800px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" @submit="handleSubmit" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { schemas } from './formData';
  import { changeApi } from '/@/api/wallet';
  import { okOrFail } from '/@/utils/actions';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
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
        setFieldsValue(data);
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      async function handleSubmit(values: any) {
        console.log(values);
        const params = {
          user_id: parseInt(values.user_id),
          area: 100,
          changed: 300,
        };

        const r = await changeApi(params);
        okOrFail(r);
      }

      return {
        registerForm,
        register,
        handleSubmit,
        handleVisibleChange,
      };
    },
  });
</script>
