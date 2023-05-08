<template>
  <BasicForm :model="formData" @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
  import { ref, defineComponent, onMounted } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { getGoodsApi } from '/@/api/exchange/goods';
  import { EditParams } from '/@/api/exchange/model/goodsModel';

  const schemas: FormSchema[] = [
    {
      field: 'd1',
      component: 'Divider',
      label: '基础字段',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'name',
      component: 'Input',
      label: '产品名称',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输入产品名称',
        // onChange: (e: any) => {
        //   console.log(e);
        // },
      },
    },
    {
      field: 'no',
      component: 'Input',
      label: '产品代码',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输入产品代码',
      },
    },
    {
      field: 'd2',
      component: 'Divider',
      label: '波动',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'rand',
      component: 'Input',
      label: '随机波动',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输小数精确到2位',
      },
    },
    {
      field: 'min',
      component: 'Input',
      label: '风控最小值',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输小数精确到2位',
      },
    },
    {
      field: 'max',
      component: 'Input',
      label: '风控最大值',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输小数精确到2位',
      },
    },
    {
      field: 'd3',
      component: 'Divider',
      label: '玩法时间间隔(秒)',
      colProps: {
        span: 24,
      },
    },
    {
      field: 't1',
      component: 'Input',
      label: '时间间隔1',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入多少秒',
      },
    },
    {
      field: 't2',
      component: 'Input',
      label: '时间间隔2',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入多少秒',
      },
    },
    {
      field: 't3',
      component: 'Input',
      label: '时间间隔3',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入多少秒',
      },
    },
    {
      field: 't4',
      component: 'Input',
      label: '时间间隔4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入多少秒',
      },
    },
    {
      field: 't5',
      component: 'Input',
      label: '时间间隔5',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入多少秒',
      },
    },
    {
      field: 'd4',
      component: 'Divider',
      label: '玩法最小投注金额',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'm1',
      component: 'Input',
      label: '投注金额1',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最小投注金额',
      },
    },
    {
      field: 'm2',
      component: 'Input',
      label: '投注金额2',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最小投注金额',
      },
    },
    {
      field: 'm3',
      component: 'Input',
      label: '投注金额4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最小投注金额',
      },
    },
    {
      field: 'm4',
      component: 'Input',
      label: '投注金额4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最小投注金额',
      },
    },
    {
      field: 'm5',
      component: 'Input',
      label: '投注金额5',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最小投注金额',
      },
    },
    {
      field: 'd5',
      component: 'Divider',
      label: '盈亏比例',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'r1',
      component: 'Input',
      label: '盈亏比例1',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入百分比',
      },
    },
    {
      field: 'r2',
      component: 'Input',
      label: '盈亏比例2',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入百分比',
      },
    },
    {
      field: 'r3',
      component: 'Input',
      label: '盈亏比例3',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入百分比',
      },
    },
    {
      field: 'r4',
      component: 'Input',
      label: '盈亏比例4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入百分比',
      },
    },
    {
      field: 'r5',
      component: 'Input',
      label: '盈亏比例5',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入百分比',
      },
    },
    {
      field: 'd5',
      component: 'Divider',
      label: '开市时间',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'open_day',
      component: 'Input',
      label: '每周几开市',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入1～7',
      },
    },
    {
      field: 'open_time',
      component: 'Input',
      label: '当天几点开始',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入时间例如：00:00:00',
      },
    },
    {
      field: 'd6',
      component: 'Divider',
      label: '休市时间',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'close_day',
      component: 'Input',
      label: '每周几休市',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入1～7',
      },
    },
    {
      field: 'close_time',
      component: 'Input',
      label: '当天几点关闭',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入时间例如：00:00:00',
      },
    },
  ];

  export default defineComponent({
    // eslint-disable-next-line vue/no-unused-components
    components: { BasicForm, CollapseContainer },
    setup(props) {
      const modelRef = ref({});
      onMounted(() => {
        // 在这里编写需要执行的逻辑代码
        console.log(props);
        const params: EditParams = {
          open_day: '12374637647',
          close_day: '123',
          open_time: '123',
          close_time: '123',
        };

        setFieldsValue(params);

        getGoodsApi(params);
      });
      // const { createMessage } = useMessage();
      const [register, { setProps, setFieldsValue }] = useForm({
        labelWidth: 120,
        // schemas,
        // baseColProps: {
        //   span: 6,
        // },
        // actionColOptions: {
        //   span: 24,
        // },
        // layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        // showActionButtonGroup: false,

        submitButtonOptions: {
          text: '提交',
        },

        // submitFunc: handleSubmit,
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
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

      return {
        register,
        schemas,
        // handleSubmit: (values: EditParams) => {
        //   getGoodsApi(values);
        //   console.log(values);
        //   // createMessage.success('click search,values:' + JSON.stringify(values));
        // },
        handleSubmit: () => {
          console.log(1111);
          // createMessage.success('click search,values:' + JSON.stringify(values));
        },
        formData: {
          name: 'admin',
        },

        setProps,
        setFieldsValue,
        onDataReceive,
      };
    },
  });
</script>
