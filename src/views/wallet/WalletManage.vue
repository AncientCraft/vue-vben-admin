<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '修改',
                icon: 'material-symbols:edit-outline',
                onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <div>
      <WalletModal @register="registerDetail" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { walletApi } from '/@/api/wallet';
  import { getWalletColumns, getFormConfig } from './tableData';
  import { stransformParams } from '/@/utils/formatValue';
  import { useModal } from '/@/components/Modal';
  import WalletModal from './components/WalletForm.vue';

  const columns: BasicColumn[] = getWalletColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, WalletModal },
    setup() {
      const [registerTable] = useTable({
        title: '钱包管理',
        api: walletApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        beforeFetch: formatParams,
        actionColumn: {
          width: 30,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerDetail, { openModal: openModal1 }] = useModal();

      function formatParams(params) {
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
      };
    },
  });
</script>
