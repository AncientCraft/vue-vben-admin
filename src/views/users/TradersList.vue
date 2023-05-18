<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '台面分',
                icon: 'mdi:account-check-outline',
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
        <template v-if="column.key === 'options_controll'">
          <Switch v-model:checked="record.options_controll" @change="changeStatus(record)" />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';
  import { getTraderColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';

  const columns: BasicColumn[] = getTraderColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch },
    setup() {
      const [registerTable] = useTable({
        title: '交易员管理',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleEdit(record) {
        console.log(record);
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
      };
    },
  });
</script>
