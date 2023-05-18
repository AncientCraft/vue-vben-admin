import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const overview: AppRouteModule = {
  path: '/overview',
  name: 'Overview',
  component: LAYOUT,
  redirect: '/overview/index',
  meta: {
    icon: 'simple-icons:hive-blockchain',
    title: '总览',
    orderNo: 10,
  },
  children: [
    {
      path: 'index',
      name: 'analysis',
      component: () => import('/@/views/exchange/overview/analysis/index.vue'),
      meta: {
        title: '分析页',
        icon: 'simple-icons:hive-blockchain',
      },
    },
    // {
    //   path: 'total',
    //   name: 'Total',
    //   component: () => import('/@/views/exchange/overview/report/index.vue'),
    //   meta: {
    //     title: '总报表',
    //     icon: 'simple-icons:hive-blockchain',
    //   },
    // },
    // {
    //   path: 'monthly',
    //   name: 'Monthly',
    //   component: () => import('/@/views/exchange/overview/report/monthly.vue'),
    //   meta: {
    //     title: '本月日报表',
    //     icon: 'simple-icons:hive-blockchain',
    //   },
    // },
    // {
    //   path: 'test',
    //   name: 'Test',
    //   component: () => import('/@/views/exchange/overview/analysis/test.vue'),
    //   meta: {
    //     title: '测试',
    //     icon: 'simple-icons:hive-blockchain',
    //   },
    // },
  ],
};

export default overview;
