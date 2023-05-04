<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '同意',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
            {
              label: '拒绝',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBankColumns, getFormConfig } from './tableData';
  import { getGoodsApi } from '/@/api/exchange/goods';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '银行卡列表',
        api: getGoodsApi,
        useSearchForm: true,
        columns: getBankColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        actionColumn: {
          width: 100,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // eslint-disable-next-line no-undef
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      // eslint-disable-next-line no-undef
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }

      return {
        registerTable,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
