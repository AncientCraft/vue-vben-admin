// import { FormProps } from '/@/components/Table';
// import { currencyApi } from '/@/api/setting';

export function getOptionsColumns() {
  return [
    {
      title: 'ID',
      dataIndex: 'tid',
      width: 60,
    },
    {
      title: '秒数',
      dataIndex: 'interval',
      width: 60,
    },
    {
      title: '显示',
      dataIndex: 'display',
      width: 60,
    },
    {
      title: '收益率',
      dataIndex: 'rate',
      width: 60,
    },
    {
      title: '最低金额(USDT)',
      dataIndex: 'min',
      width: 60,
    },
    {
      title: '最高金额(USDT)',
      dataIndex: 'max',
      width: 60,
    },
  ];
}

// export function getFormConfig(): Partial<FormProps> {
//   return {
//     labelWidth: 50,
//     schemas: [
//       {
//         field: `field11`,
//         label: `币种`,
//         component: 'Select',
//         componentProps: {
//           options: getOptions,
//           defaultValue: names[0],
//         },
//         colProps: {
//           xl: 4,
//           xxl: 4,
//         },
//       },
//     ],
//   };
// }

// const names = await getName();

// async function getOptions() {
//   names.map((name) => {
//     return {
//       label: name,
//       value: name,
//     };
//   });
// }

// async function getName() {
//   const r = await currencyApi();
//   return r;
// }
