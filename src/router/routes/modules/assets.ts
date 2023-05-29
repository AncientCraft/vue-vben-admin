import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/assets',
  name: 'Assets',
  component: LAYOUT,
  redirect: '/assets/detail',
  meta: {
    orderNo: 70,
    icon: 'fluent:web-asset-16-regular',
    title: t('routes.assets.assets'),
  },
  children: [
    {
      path: 'detail',
      name: 'AssetsDetail',
      component: () => import('/@/views/assets/AssetsDetail.vue'),
      meta: {
        // affix: true,
        title: t('routes.assets.detail'),
      },
    },
  ],
};

export default dashboard;
