import { useMessage } from '/@/hooks/web/useMessage';

export function okOrFail(result: any) {
  const { createMessage } = useMessage();
  // const r = await changeBalnceApi(params);
  if (result.code === 0) {
    createMessage.success('操作成功');
  } else {
    createMessage.error('操作失败');
  }
}
