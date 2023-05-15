<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    @visible-change="handleVisibleChange"
    width="1600px"
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
  import { updateGoodsApi } from '/@/api/exchange/goods';
  import { okOrFail } from '/@/utils/lists';

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
      required: true,
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
      field: 'code',
      required: true,
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
      field: 'open_price',
      required: true,
      component: 'Input',
      label: '开盘价',
      // colProps: {
      //   span: 8,
      // },
      componentProps: {
        placeholder: '请输小数精确到2位',
      },
    },
    {
      field: 'min_price',
      required: true,
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
      field: 'max_price',
      required: true,
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
      field: 'config.rule[0].interval',
      required: true,
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
      field: 'config.rule[1].interval',
      required: true,
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
      field: 'config.rule[2].interval',
      required: true,
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
      field: 'config.rule[3].interval',
      required: true,
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
      field: 'config.rule[4].interval',
      required: true,
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
      field: 'config.rule[0].min_price',
      required: true,
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
      field: 'config.rule[1].min_price',
      required: true,
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
      field: 'config.rule[2].min_price',
      required: true,
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
      field: 'config.rule[3].min_price',
      required: true,
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
      field: 'config.rule[4].min_price',
      required: true,
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
      label: '玩法最大投注金额',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'config.rule[0].max_price',
      required: true,
      component: 'Input',
      label: '投注金额1',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最大投注金额',
      },
    },
    {
      field: 'config.rule[1].max_price',
      required: true,
      component: 'Input',
      label: '投注金额2',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最大投注金额',
      },
    },
    {
      field: 'config.rule[2].max_price',
      required: true,
      component: 'Input',
      label: '投注金额4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最大投注金额',
      },
    },
    {
      field: 'config.rule[3].max_price',
      required: true,
      component: 'Input',
      label: '投注金额4',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最大投注金额',
      },
    },
    {
      field: 'config.rule[4].max_price',
      required: true,
      component: 'Input',
      label: '投注金额5',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入最大投注金额',
      },
    },
    {
      field: 'd6',
      component: 'Divider',
      label: '盈亏比例',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'config.rule[0].profit_rate',
      required: true,
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
      field: 'config.rule[1].profit_rate',
      required: true,
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
      field: 'config.rule[2].profit_rate',
      required: true,
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
      field: 'config.rule[3].profit_rate',
      required: true,
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
      field: 'config.rule[4].profit_rate',
      required: true,
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
      field: 'd7',
      component: 'Divider',
      label: '开市时间',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'weekly_start',
      required: true,
      component: 'Input',
      label: '每周几开市',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入1～7',
      },
    },
    {
      field: 'weekly_close',
      required: true,
      component: 'Input',
      label: '每周几休市',
      colProps: {
        span: 4,
      },
      componentProps: {
        placeholder: '请输入1～7',
      },
    },
    // {
    //   field: 'open_time',
    //   component: 'Input',
    //   label: '当天几点开始',
    //   colProps: {
    //     span: 8,
    //   },
    //   componentProps: {
    //     placeholder: '请输入时间例如：00:00:00',
    //   },
    // },
    // {
    //   field: 'd8',
    //   component: 'Divider',
    //   label: '休市时间',
    //   colProps: {
    //     span: 24,
    //   },
    // },

    // {
    //   field: 'close_time',
    //   component: 'Input',
    //   label: '当天几点关闭',
    //   colProps: {
    //     span: 8,
    //   },
    //   componentProps: {
    //     placeholder: '请输入时间例如：00:00:00',
    //   },
    // },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const [registerForm, { setFieldsValue }] = useForm({
        // const [registerForm, { setFieldsValue, setProps }] = useForm({
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
        // console.log('Data Received', data);
        // const result = await getGoodsApi(data);
        // console.log(result.items[0]);
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

      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        handleSubmit: async (values: any) => {
          // getGoodsApi(values);
          console.log(values);
          const r = await updateGoodsApi(values);
          okOrFail(r);
        },
      };
    },
  });
</script>
