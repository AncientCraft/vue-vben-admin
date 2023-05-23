<template>
  <BasicModal
    title="编辑币种"
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
  import { defineComponent, nextTick, ref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { schemas } from './formData';
  import { updateSymbolsApi, addSymbolsApi } from '/@/api/symbol';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const type = ref('');
      const tid = ref(0);
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
        console.log(data);
        type.value = data.type;
        tid.value = data.info?.tid ?? 0;
        setFieldsValue(data.info);
        // if (data.type === 'update') {
        //   setFieldsValue(data.info);
        // }
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      async function handleSubmit(values: any) {
        console.log(values);

        if (type.value === 'update') {
          const { sort, ...rest } = values;
          const ext = {
            tid: tid.value,
            sort: parseInt(sort),
          };
          const params = { ...ext, ...rest };
          updateSymbolsApi(params);
        } else {
          addSymbol(values);
        }

        // const params = {
        //   user_id: values.user_id,
        //   changed: parseInt(values.changed),
        //   type: values.type,
        // };
        // // console.log(params);
        // const r = await changeBalnceApi(params);
        // okOrFail(r);
      }

      function addSymbol(values) {
        const { sort, ...rest } = values;
        const ext = {
          type: 100,
          sort: parseInt(sort),
        };
        const params = { ...ext, ...rest };
        addSymbolsApi(params);
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
