<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getCloseColumns, getFormConfig } from './tableData';
  import { orderApi } from '/@/api/exchange/orders';
  import { closeParams, stransformData } from '/@/utils/lists';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '平仓日志',
        api: orderApi,
        useSearchForm: true,
        columns: getCloseColumns(),
        formConfig: getFormConfig(),
        beforeFetch: closeParams,
        afterFetch: stransformData,
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
