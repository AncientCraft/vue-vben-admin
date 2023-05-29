<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '查看',
                icon: 'material-symbols:edit-outline',
                onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <div>{{ orderStatus(record.status) }}</div>
        </template>
        <template v-if="column.key === 'update_time'">
          <div>{{ timestampToString(record.update_time) }}</div>
        </template>
      </template>
    </BasicTable>
    <div>
      <Modal @register="registerDetail" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { flowApi } from '/@/api/wallet';
  import { getWithdrawColumns } from './tableData';
  // import { Switch } from 'ant-design-vue';
  import { stransformParams, timestampToString, orderStatus } from '/@/utils/formatValue';
  import { useModal } from '/@/components/Modal';
  import Modal from './components/WithdrawDetail.vue';

  const columns: BasicColumn[] = getWithdrawColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Modal },
    setup() {
      const [registerTable] = useTable({
        title: '提币申请',
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

      const [registerDetail, { openModal: openModal1 }] = useModal();

      function formatParams(p) {
        const extra = {
          type: 100,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleEdit(record) {
        console.log(record);
        openModal1(true, record);
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
        registerDetail,
        timestampToString,
        orderStatus,
      };
    },
  });
</script>
