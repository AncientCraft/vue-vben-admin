import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const userInfo = (() => {
  const result = {
    account: '@cname()',
    readl_name: '@cname()',
    login_pass: '@cname()',
    trading_pass: '@cname()',
    balance: '@cname()',
    bank_name: '@cname()',
    bank_branch: '@cname()',
    bank_acount: '@cname()',
    group: '2',
  };
  return result;
})();

export default [
  {
    url: '/basic-api/user/edit',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
] as MockMethod[];
