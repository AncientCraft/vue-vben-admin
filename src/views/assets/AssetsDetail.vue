<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'fbye'">
          {{ getAmount(record, 100) }}
        </template>
        <template v-if="column.key === 'fbdj'">
          {{ getLocked(record, 100) }}
        </template>
        <template v-if="column.key === 'bbye'">
          {{ getAmount(record, 200) }}
        </template>
        <template v-if="column.key === 'bbdj'">
          {{ getLocked(record, 200) }}
        </template>
        <template v-if="column.key === 'option_b'">
          {{ getAmount(record, 400) }}
        </template>
        <template v-if="column.key === 'option_f'">
          {{ getLocked(record, 400) }}
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { assetsApi } from '/@/api/assets';
  import { getAssetsColumns } from './tableData';

  const columns: BasicColumn[] = getAssetsColumns();
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '资产详情',
        api: assetsApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
      });

      function getAmount(record, type) {
        if (record.area === type) {
          return record.free;
        }
        return '0';
      }
      function getLocked(record, type) {
        if (record.area === type) {
          return record.locked;
        }
        return '0';
      }

      return {
        registerTable,
        getAmount,
        getLocked,
      };
    },
  });
</script>
