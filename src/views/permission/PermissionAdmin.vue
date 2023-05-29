<template>
  <div class="p-4">
    <Button type="primary" @click="createItem">新增</Button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'material-symbols:edit-outline',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <Switch v-model:checked="record.status" @change="changeStatus(record)" />
        </template>
      </template>
    </BasicTable>
    <div>
      <AdminModal @register="registerModel" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { usersApi } from '/@/api/users';
  // import { demoListApi } from '/@/api/demo/table';
  import { getAdminColumns } from './tableData';
  import { Switch, Button } from 'ant-design-vue';
  import AdminModal from './components/AdminForm.vue';
  import { useModal } from '/@/components/Modal';
  import { stransformParams } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getAdminColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, Button, AdminModal },
    setup() {
      const [registerTable] = useTable({
        title: '管理员',
        api: usersApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        beforeFetch: formatParams,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerModel, { openModal: openModal1 }] = useModal();

      function formatParams(p) {
        const extra = {
          type: 10,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleEdit(record) {
        console.log(record);
        openModal1(true, {
          type: 'update',
          info: record,
        });
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createItem() {
        openModal1(true, {
          type: 'new',
          info: null,
        });
      }

      function changeStatus(record) {
        console.log(record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        changeStatus,
        registerModel,
        createItem,
      };
    },
  });
</script>
