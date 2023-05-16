// import { MockMethod } from 'vite-plugin-mock';
// import { resultPageSuccess } from '../_util';

// const demoList = (() => {
//   const result: any[] = [];
//   for (let index = 0; index < 2; index++) {
//     result.push({
//       key: `${index}`,
//       name: '@cname()',
//       list: notice,
//     });
//   }
//   return result;
// })();

// const notice = (() => {
//   const result: any[] = [];
//   for (let index = 0; index < 30; index++) {
//     result.push({
//       id: `${index}`,
//       title: '@cname()',
//     });
//   }
// })();

// export default [
//   {
//     url: '/basic-api/notice/list',
//     timeout: 1000,
//     method: 'post',
//     response: ({ query }) => {
//       const { page = 1, pageSize = 20 } = query;
//       return resultPageSuccess(page, pageSize, demoList);
//     },
//   },
// ] as MockMethod[];
