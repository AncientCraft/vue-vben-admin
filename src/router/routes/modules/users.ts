import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
// import { RoleEnum } from '/@/enums/roleEnum';

const dashboard: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/index',
  meta: {
    orderNo: 30,
    icon: 'mdi:account',
    title: t('routes.user.user'),
    // roles: [RoleEnum.TEST],
  },
  children: [
    {
      path: 'index',
      name: 'UserIndex',
      component: () => import('/@/views/users/UsersList.vue'),
      meta: {
        // affix: true,
        title: t('routes.user.list'),
      },
    },
    {
      path: 'real-name',
      name: 'UserRealName',
      component: () => import('/@/views/users/RealName.vue'),
      meta: {
        // affix: true,
        title: t('routes.user.realName'),
      },
    },
    {
      path: 'trader',
      name: 'UserTrader',
      component: () => import('/@/views/users/TradersList.vue'),
      meta: {
        // affix: true,
        title: t('routes.user.trader'),
      },
    },
    {
      path: 'login-log',
      name: 'UserLoginLog',
      component: () => import('/@/views/users/UserLoginLog.vue'),
      meta: {
        // affix: true,
        title: t('routes.user.loginLog'),
      },
    },
  ],
};

export default dashboard;
