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
  import { demoListApi } from '/@/api/demo/table';
  import { getUserColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import UserModal from './components/UserDetail.vue';

  const columns: BasicColumn[] = getUserColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, UserModal },
    setup() {
      const [registerTable] = useTable({
        title: '用户列表',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        actionColumn: {
          width: 70,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerDetail, { openModal: openModal1 }] = useModal();

      function handleEdit(record) {
        console.log(record);
        openModal1(true, {
          data: 'content',
          info: 'Info',
        });
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
      };
    },
  });
</script>
