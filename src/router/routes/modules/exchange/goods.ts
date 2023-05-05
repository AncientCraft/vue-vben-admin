import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const goods: AppRouteModule = {
  path: '/goods',
  name: 'Goods',
  component: LAYOUT,
  redirect: '/goods/index',
  meta: {
    icon: 'simple-icons:hive-blockchain',
    title: t('routes.goods.root'),
    orderNo: 20,
  },
  children: [
    {
      path: 'index',
      name: '产品管理',
      component: () => import('/@/views/exchange/goods/basic/index.vue'),
      meta: {
        title: t('routes.goods.list'),
        icon: 'simple-icons:hive-blockchain',
      },
    },
  ],
};

export default goods;
