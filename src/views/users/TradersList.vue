<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '台面分',
                icon: 'mdi:account-check-outline',
                onClick: handleEdit.bind(null, record),
              },
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
      </template>
    </BasicTable>
    <div>
      <TraderModal @register="registerDetail" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';
  import { getTraderColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import TraderModal from './components/Trader.vue';

  const columns: BasicColumn[] = getTraderColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, TraderModal },
    setup() {
      const [registerTable] = useTable({
        title: '交易员管理',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerDetail, { openModal: openModal1 }] = useModal();

      function handleEdit(record) {
        console.log(record);
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createGroup() {
        openModal1(true, {
          data: 'content',
          info: 'Info',
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
      };
    },
  });
</script>
