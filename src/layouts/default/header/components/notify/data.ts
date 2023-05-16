// import { NoticeListApi } from '/@/api/exchange/notice';
// import { NoticeParams } from '/@/api/exchange/model/noticeModel';

export interface ListItem {
  id: string;
  title: string;
  // 是否在标题上显示删除线
  titleDelete?: boolean;
  read?: boolean;
  clickClose?: boolean;
  extra?: string;
  color?: string;
}

export interface TabItem {
  key: number;
  name: string;
  list: ListItem[];
  unreadlist?: ListItem[];
}

// function getList() {
//   const result = NoticeListApi();
//   return result;
// }

// export const tabListData = await getList();

export const tabListData: TabItem[] = [
  {
    key: 1,
    name: '订单',
    list: [
      {
        id: '000000001',
        title: '声音',
        clickClose: true,
      },
    ],
  },
  {
    key: 2,
    name: '提款',
    list: [
      // {
      //   id: '000000008',
      //   title: '标题',
      //   // clickClose: true,
      // },
    ],
  },
];
