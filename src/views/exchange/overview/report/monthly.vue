<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getDailyColumns } from './tableData';
  import { homeApi } from '/@/api/exchange/overview';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '流水记录',
        api: homeApi,
        useSearchForm: true,
        columns: getDailyColumns(),
        // formConfig: getFormConfig(),
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
