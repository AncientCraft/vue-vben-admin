<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getDepositColumns, getFormConfig } from './tableData';
  import { flowApi } from '/@/api/exchange/orders';
  import { depositParams, stransformData } from '/@/utils/lists';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '充足记录',
        api: flowApi,
        useSearchForm: true,
        columns: getDepositColumns(),
        formConfig: getFormConfig(),
        beforeFetch: depositParams,
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
