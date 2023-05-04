import { optionsListApi } from '/@/api/demo/select';
import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { VxeFormItemProps, VxeGridPropTypes } from '/@/components/VxeTable';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '产品标题',
      dataIndex: 'name',
      fixed: 'left',
      width: 150,
    },
    {
      title: '产品代码',
      dataIndex: 'no',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      sorter: true,
    },
    {
      title: '随机值',
      dataIndex: 'rand',
      width: 50,
    },
    {
      title: '风控最小值',
      width: 50,
      dataIndex: 'min',
    },
    {
      title: '风控最大值',
      width: 50,
      dataIndex: 'max',
    },
  ];
}

export function getEditGoodsColumns(): FormSchema[] {
  return [
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
}

export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `字段${index}`,
      component: 'Input',
      colProps: {
        xl: 12,
        xxl: 8,
      },
    });
  }
  return arr;
};

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      ...getAdvanceSchema(5),
      {
        field: `field11`,
        label: `Slot示例`,
        component: 'Select',
        slot: 'custom',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
export function getBasicData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: '虚拟币',
        state: '开市',
        age: `1${index}`,
        rand: 0.02,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}

export function getTreeTableData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        children: [
          {
            id: `l2-${index}`,
            name: 'John Brown',
            age: `1${index}`,
            no: `${index + 10}`,
            address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
            beginTime: new Date().toLocaleString(),
            endTime: new Date().toLocaleString(),
          },
        ],
      });
    }
    return arr;
  })();
}

export const vxeTableColumns: VxeGridPropTypes.Columns = [
  {
    title: '序号',
    type: 'seq',
    fixed: 'left',
    width: '50',
    align: 'center',
  },
  {
    title: '固定列',
    field: 'name',
    width: 150,
    showOverflow: 'tooltip',
    fixed: 'left',
  },
  {
    title: '自适应列',
    field: 'address',
  },
  {
    title: '自定义列(自定义导出)',
    field: 'no',
    width: 200,
    showOverflow: 'tooltip',
    align: 'center',
    slots: {
      default: ({ row }) => {
        const text = `自定义${row.no}`;
        return [<div class="text-red-500">{text}</div>];
      },
    },
    exportMethod: ({ row }) => {
      return `自定义${row.no}导出`;
    },
  },
  {
    title: '自定义编辑',
    width: 150,
    field: 'name1',
    align: 'center',
    editRender: {
      name: 'AInput',
      placeholder: '请点击输入',
    },
  },
  {
    title: '开始时间',
    width: 150,
    field: 'beginTime',
    showOverflow: 'tooltip',
    align: 'center',
  },
  {
    title: '结束时间',
    width: 150,
    field: 'endTime',
    showOverflow: 'tooltip',
    align: 'center',
  },
  {
    width: 160,
    title: '操作',
    align: 'center',
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const vxeTableFormSchema: VxeFormItemProps[] = [
  {
    field: 'field0',
    title: 'field0',
    itemRender: {
      name: 'AInput',
    },
    span: 6,
  },
  {
    field: 'field1',
    title: 'field1',
    itemRender: {
      name: 'AApiSelect',
      props: {
        api: optionsListApi,
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
    },
    span: 6,
  },
  {
    span: 12,
    align: 'right',
    className: '!pr-0',
    itemRender: {
      name: 'AButtonGroup',
      children: [
        {
          props: { type: 'primary', content: '查询', htmlType: 'submit' },
          attrs: { class: 'mr-2' },
        },
        { props: { type: 'default', htmlType: 'reset', content: '重置' } },
      ],
    },
  },
];
