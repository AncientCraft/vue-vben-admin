import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/symbol',
  name: 'Symbol',
  component: LAYOUT,
  redirect: '/symbol/management',
  meta: {
    orderNo: 50,
    icon: 'material-symbols:attach-money-rounded',
    title: t('routes.symbol.symbol'),
  },
  children: [
    {
      path: 'management',
      name: 'SymbolManagement',
      component: () => import('/@/views/symbol/SymbolManage.vue'),
      meta: {
        // affix: true,
        title: t('routes.symbol.manage'),
      },
    },
    {
      path: 'rate',
      name: 'SymbolRate',
      component: () => import('/@/views/symbol/SymbolRate.vue'),
      meta: {
        // affix: true,
        title: t('routes.symbol.rate'),
      },
    },
  ],
};

export default dashboard;
