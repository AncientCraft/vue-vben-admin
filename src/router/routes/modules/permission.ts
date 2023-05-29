import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
// import { RoleEnum } from '/@/enums/roleEnum';

const dashboard: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/dashboard/group',
  meta: {
    orderNo: 20,
    icon: 'ion:key-outline',
    title: t('routes.permission.permission'),
    // roles: [RoleEnum.SUPER],
  },
  children: [
    {
      path: 'group',
      name: 'PermissionGroup',
      component: () => import('/@/views/permission/PermissionGroup.vue'),
      meta: {
        // affix: true,
        title: t('routes.permission.group'),
      },
    },
    {
      path: 'admin',
      name: 'PermissionAdmin',
      component: () => import('/@/views/permission/PermissionAdmin.vue'),
      meta: {
        // affix: true,
        title: t('routes.permission.admin'),
      },
    },
    {
      path: 'loginlog',
      name: 'PermissionLoginLog',
      component: () => import('/@/views/permission/LoginLog.vue'),
      meta: {
        // affix: true,
        title: t('routes.permission.loginLog'),
      },
    },
    {
      path: 'actionlog',
      name: 'PermissionActionLog',
      component: () => import('/@/views/permission/ActionLog.vue'),
      meta: {
        // affix: true,
        title: t('routes.permission.actionLog'),
      },
    },
  ],
};

export default dashboard;
