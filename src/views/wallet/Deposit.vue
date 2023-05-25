<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '同意',
                icon: 'material-symbols:edit-outline',
                onClick: handleAuth.bind(null, record, 300),
              },
              {
                label: '拒绝',
                icon: 'ic:outline-delete-outline',
                onClick: handleAuth.bind(null, record, 320),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <Switch v-model:checked="record.status" @change="changeStatus(record)" />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { flowApi, depositAuthApi } from '/@/api/wallet';
  import { getDepositColumns } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { stransformParams } from '/@/utils/formatValue';
  import { okOrFail } from '/@/utils/actions';

  const columns: BasicColumn[] = getDepositColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch },
    setup() {
      const [registerTable] = useTable({
        title: '充币申请',
        api: flowApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        beforeFetch: formatParams,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function formatParams(p) {
        const extra = {
          type: 200,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      async function handleAuth(record, type) {
        const params = {
          order_id: record.order_id,
          status: type,
        };
        const r = await depositAuthApi(params);
        okOrFail(r);
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
        handleAuth,
        handleDelete,
        createGroup,
        changeStatus,
      };
    },
  });
</script>
