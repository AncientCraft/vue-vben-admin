<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="编辑会员"
    @visible-change="handleVisibleChange"
    width="900px"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { getGoodsApi } from '/@/api/exchange/goods';
  // import { EditParams } from '/@/api/exchange/model/goodsModel';
  // import { getEditGoodsColumns } from '../tableData';

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
      field: 'real_name',
      component: 'Input',
      label: '姓名',
      required: true,
      colProps: {
        span: 7,
      },
      componentProps: {
        placeholder: '请输真实姓名',
        // onChange: (e: any) => {
        //   console.log(e);
        // },
      },
    },
    {
      field: 'id_no',
      component: 'Input',
      label: '身份证号码',
      colProps: {
        span: 15,
      },
      componentProps: {
        placeholder: '请输身份证号码',
      },
    },

    {
      field: 'veryfy',
      component: 'Select',
      label: '审核',
      required: true,
      defaultValue: '1',
      componentProps: {
        options: [
          {
            label: '通过',
            value: '1',
          },
          {
            label: '驳回',
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
      const [registerForm] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        console.log('Data Received', data);
        const result = await getGoodsApi(data);
        console.log(result.items[0]);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // // 方式2
        modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return { register, schemas, registerForm, model: modelRef, handleVisibleChange };
    },
  });
</script>
