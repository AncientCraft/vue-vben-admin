<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'last_login_time'">
          <div>{{ timestampToString(record.last_login_time) }}</div>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { loginLogApi } from '/@/api/users';
  import { getLoginColumns } from './tableData';
  import { stransformParams, timestampToString } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getLoginColumns();
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '登入日志',
        api: loginLogApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        beforeFetch: formatParams,
      });

      function formatParams(params) {
        return stransformParams(params);
      }

      return {
        registerTable,
        timestampToString,
      };
    },
  });
</script>
