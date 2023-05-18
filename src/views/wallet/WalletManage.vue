<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '修改',
                icon: 'material-symbols:edit-outline',
                onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'addr'">
          1234567890
          <Button type="text" shape="circle" @click="handleEdit(text)">
            <template #icon><CopyOutlined /></template>
          </Button>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';
  import { getWalletColumns, getFormConfig } from './tableData';
  import { Button } from 'ant-design-vue';
  import { CopyOutlined } from '@ant-design/icons-vue';

  const columns: BasicColumn[] = getWalletColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Button, CopyOutlined },
    setup() {
      const [registerTable] = useTable({
        title: '钱包管理',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        actionColumn: {
          width: 30,
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
