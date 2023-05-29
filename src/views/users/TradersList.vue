<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              // {
              //   label: '台面分',
              //   icon: 'mdi:account-check-outline',
              //   onClick: handleEdit.bind(null, record),
              // },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'options_controll'">
          <Switch v-model:checked="record.options_controll" @change="changeStatus(record)" />
        </template>
        <template v-if="column.key === 'last_login_time'">
          <div>{{ timestampToString(record.last_login_time) }}</div>
        </template>
      </template>
    </BasicTable>
    <div>
      <Modal @register="registerDetail" />
    </div>
    <div>
      <WalletModal @register="registerWallet" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { usersApi } from '/@/api/users';
  // import { demoListApi } from '/@/api/demo/table';
  import { getUserColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import Modal from './components/Trader.vue';
  import WalletModal from '../wallet/components/WalletForm.vue';
  import { timestampToString, stransformParams } from '/@/utils/formatValue';

  const columns: BasicColumn[] = getUserColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, Modal, WalletModal },
    setup() {
      const [registerTable] = useTable({
        title: '交易员管理',
        api: usersApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        beforeFetch: formatParams,
        actionColumn: {
          width: 70,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerDetail, { openModal: openModal1 }] = useModal();
      const [registerWallet, { openModal: openModal2 }] = useModal();

      function handleEdit(record) {
        console.log(record);
        openModal2(true, {
          record,
        });
      }

      function formatParams(p) {
        const extra = {
          role: 400,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createGroup() {
        openModal1(true, {
          type: 'new',
        });
      }

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
        registerWallet,
      };
    },
  });
</script>
