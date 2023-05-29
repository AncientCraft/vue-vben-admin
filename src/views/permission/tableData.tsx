import { BasicColumn } from '/@/components/Table/src/types/table';

export function getGroupColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '管理组名称',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '权限',
      dataIndex: 'permission',
      width: 200,
    },
  ];
}

export function getAdminColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '管理员名称',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 60,
    },
    {
      title: '所属管理组',
      dataIndex: 'belongs',
      width: 60,
    },
  ];
}

export function getLoginColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '管理组名称',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '所属管理组',
      dataIndex: 'belongs',
      width: 60,
    },
    {
      title: '登入IP地址',
      dataIndex: 'addr',
      width: 100,
    },
    {
      title: '登入时间',
      dataIndex: 'times',
      width: 100,
    },
  ];
}

export function getActionColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 60,
    },
    {
      title: '管理组名称',
      dataIndex: 'name',
      width: 60,
    },
    {
      title: '操作日志',
      dataIndex: 'addr',
      width: 100,
    },
    {
      title: '操作时间',
      dataIndex: 'times',
      width: 100,
    },
  ];
}
