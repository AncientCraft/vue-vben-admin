<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBankColumns, getFormConfig } from './tableData';
  import { orderApi } from '/@/api/exchange/orders';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '银行卡列表',
        api: orderApi,
        useSearchForm: true,
        columns: getBankColumns(),
        formConfig: getFormConfig(),
        bordered: true,
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
