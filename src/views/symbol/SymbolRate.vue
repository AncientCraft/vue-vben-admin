<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { symbolsApi } from '/@/api/symbol';
  import { getRateColumns } from './tableData';
  import { stransformParams } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getRateColumns();
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '法币比例',
        api: symbolsApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: false,
        beforeFetch: formatParams,
      });

      function formatParams(p) {
        const extra = {
          type: 200,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

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
