<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '详情',
                icon: 'mdi:account-details',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '冻结',
                icon: 'game-icons:frozen-orb',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '钱包',
                icon: 'solar:wallet-bold',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'options_controll'">
          <Switch v-model:checked="record.options_controll" @change="changeStatus(record)" />
        </template>
        <template v-if="column.key === 'last_login_time'">
          <div>{{ timestampToString(record.last_login_time) }}</div>
        </template>
      </template>
    </BasicTable>
    <div>
      <UserModal @register="registerDetail" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { usersApi } from '/@/api/users';
  import { getUserColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import UserModal from './components/UserDetail.vue';
  import { timestampToString, stransformParams } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getUserColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, UserModal },
    setup() {
      const [registerTable] = useTable({
        title: '用户列表',
        api: usersApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        beforeFetch: formatParams,
        actionColumn: {
          width: 70,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerDetail, { openModal: openModal1 }] = useModal();

      function handleEdit(record) {
        console.log(record);
        openModal1(true, record);
      }

      function formatParams(p) {
        const extra = {
          type: 100,
          role: 100,
          status: 100,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createGroup() {}

      function changeStatus(record) {
        console.log(record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        createGroup,
        changeStatus,
        registerDetail,
        timestampToString,
      };
    },
  });
</script>
