<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { assetsChangdRecordApi } from '/@/api/wallet';
  import { getAssetColumns } from './tableData';
  import { stransformParams } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getAssetColumns();
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '用户资产变更记录',
        api: assetsChangdRecordApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        beforeFetch: formatParams,
      });

      function formatParams(p) {
        const extra = {
          type: [500, 600],
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      return {
        registerTable,
      };
    },
  });
</script>
