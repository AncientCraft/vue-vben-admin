import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSymbolColumns(): BasicColumn[] {
  return [
    {
      title: '名称',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '提币量',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '提币量手续费(USDT)',
      dataIndex: 'symbol',
      width: 60,
    },
    {
      title: '账户资产',
      children: [
        {
          title: '币币',
          dataIndex: 'bb',
          width: 30,
        },
        {
          title: '法币',
          dataIndex: 'fb',
          width: 30,
        },
        {
          title: '期权',
          dataIndex: 'options',
          width: 30,
        },
      ],
    },
    {
      title: '市场显示',
      dataIndex: 'symbol',
      width: 60,
    },
  ];
}

export function getRateColumns(): BasicColumn[] {
  return [
    {
      title: '法币',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: '比例',
      dataIndex: 'id',
      width: 60,
    },
  ];
}
