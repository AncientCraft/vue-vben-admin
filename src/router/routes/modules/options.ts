import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/options',
  name: 'Options',
  component: LAYOUT,
  redirect: '/options/trade',
  meta: {
    orderNo: 60,
    icon: 'ant-design:stock-outlined',
    title: t('routes.options.options'),
  },
  children: [
    {
      path: 'trade',
      name: 'OptionsTrade',
      component: () => import('/@/views/options/OptionsTrade.vue'),
      meta: {
        // affix: true,
        title: t('routes.options.trade'),
      },
    },
  ],
};

export default dashboard;
