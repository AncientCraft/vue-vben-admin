import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/index',
  meta: {
    icon: 'simple-icons:hive-blockchain',
    title: '用户中心',
    orderNo: 40,
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('/@/views/exchange/users/index.vue'),
      meta: {
        title: '会员列表',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    {
      path: 'trade',
      name: 'trading',
      component: () => import('/@/views/exchange/users/TradingView.vue'),
      meta: {
        title: '流水记录',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    {
      path: 'bank',
      name: 'Bank',
      component: () => import('/@/views/exchange/users/BankView.vue'),
      meta: {
        title: '银行卡',
        icon: 'simple-icons:hive-blockchain',
      },
    },
  ],
};

export default user;
