import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/wallet',
  name: 'Wallet',
  component: LAYOUT,
  redirect: '/wallet/management',
  meta: {
    orderNo: 40,
    icon: 'material-symbols:account-balance-wallet',
    title: t('routes.wallet.wallet'),
  },
  children: [
    {
      path: 'management',
      name: 'WalletManagement',
      component: () => import('/@/views/wallet/WalletManage.vue'),
      meta: {
        // affix: true,
        title: t('routes.wallet.manage'),
      },
    },
    {
      path: 'assets',
      name: 'WalletAssets',
      component: () => import('/@/views/wallet/AssetsChanged.vue'),
      meta: {
        // affix: true,
        title: t('routes.wallet.assets'),
      },
    },
    {
      path: 'deposit',
      name: 'WalletDeposit',
      component: () => import('/@/views/wallet/Deposit.vue'),
      meta: {
        // affix: true,
        title: t('routes.wallet.deposit'),
      },
    },
    {
      path: 'withdraw',
      name: 'WalletWithdraw',
      component: () => import('/@/views/wallet/Withdraw.vue'),
      meta: {
        // affix: true,
        title: t('routes.wallet.withdraw'),
      },
    },
  ],
};

export default dashboard;
