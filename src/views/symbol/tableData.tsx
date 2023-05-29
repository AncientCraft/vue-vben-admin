import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSymbolColumns(): BasicColumn[] {
  return [
    {
      title: '名称',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '提币量',
      dataIndex: 'amount',
      width: 60,
    },
    {
      title: '提币量手续费(USDT)',
      dataIndex: 'withdraw_fee',
      width: 60,
    },
    {
      title: '账户资产',
      children: [
        {
          title: '现货',
          dataIndex: 'spot',
          width: 30,
        },
        {
          title: '法币',
          dataIndex: 'fiat',
          width: 30,
        },
        {
          title: '期权',
          dataIndex: 'option',
          width: 30,
        },
      ],
    },
    {
      title: '市场显示',
      dataIndex: 'market',
      width: 60,
    },
  ];
}

export function getRateColumns(): BasicColumn[] {
  return [
    {
      title: '法币',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '比例',
      dataIndex: 'rate',
      width: 60,
    },
  ];
}
