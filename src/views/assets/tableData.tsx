import { BasicColumn } from '/@/components/Table/src/types/table';

export function getAssetsColumns(): BasicColumn[] {
  return [
    {
      title: '币种',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '法币',
      children: [
        {
          title: '余额',
          dataIndex: 'fbye',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'fbdj',
          width: 30,
        },
      ],
    },
    {
      title: '币币',
      children: [
        {
          title: '余额',
          dataIndex: 'bbye',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'bbdj',
          width: 30,
        },
      ],
    },
    {
      title: '期权',
      children: [
        {
          title: '余额',
          dataIndex: 'option_b',
          width: 30,
        },
        {
          title: '冻结',
          dataIndex: 'option_f',
          width: 30,
        },
      ],
    },
  ];
}
