import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/settings',
  name: 'Settings',
  component: LAYOUT,
  redirect: '/settings/basic',
  meta: {
    orderNo: 80,
    icon: 'material-symbols:settings',
    title: t('routes.settings.settings'),
  },
  children: [
    {
      path: 'basic',
      name: 'SettingsBasic',
      component: () => import('/@/views/settings/BasicSettings.vue'),
      meta: {
        // affix: true,
        title: t('routes.settings.basic'),
      },
    },
    {
      path: 'options',
      name: 'SettingsOptions',
      component: () => import('/@/views/settings/OptionSettings.vue'),
      meta: {
        // affix: true,
        title: t('routes.settings.option'),
      },
    },
  ],
};

export default dashboard;
