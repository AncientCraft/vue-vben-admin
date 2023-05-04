import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const goods: AppRouteModule = {
  path: '/order',
  name: 'Orders',
  component: LAYOUT,
  redirect: '/order/index',
  meta: {
    icon: 'simple-icons:hive-blockchain',
    title: '订单',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('/@/views/exchange/orders/index.vue'),
      meta: {
        title: '订单列表',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    {
      path: 'close',
      name: 'Close',
      component: () => import('/@/views/exchange/orders/CloseView.vue'),
      meta: {
        title: '平仓日志',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    {
      path: 'withdraw',
      name: 'Withdraw',
      component: () => import('/@/views/exchange/orders/WithdrawView.vue'),
      meta: {
        title: '提现记录',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    {
      path: 'deposit',
      name: 'Deposit',
      component: () => import('/@/views/exchange/orders/DepositView.vue'),
      meta: {
        title: '充足记录',
        icon: 'simple-icons:hive-blockchain',
      },
    },
  ],
};

export default goods;
