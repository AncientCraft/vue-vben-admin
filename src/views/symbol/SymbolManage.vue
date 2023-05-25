<template>
  <div class="p-4">
    <a-button type="primary" @click="createItem">新增</a-button>
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
        <template v-if="column.key === 'amount'">
          {{ record.withdraw_min }} ~ {{ record.withdraw_max }}
        </template>
        <template v-if="column.key === 'spot'">
          <Switch v-model:checked="record.spot" @change="changeStatus(record, 'spot')" />
        </template>
        <template v-if="column.key === 'fiat'">
          <Switch v-model:checked="record.fiat" @change="changeStatus(record, 'fiat')" />
        </template>
        <template v-if="column.key === 'option'">
          <Switch v-model:checked="record.option" @change="changeStatus(record, 'option')" />
        </template>
        <template v-if="column.key === 'market'">
          <Switch v-model:checked="record.market" @change="changeStatus(record, 'market')" />
        </template>
      </template>
    </BasicTable>
    <div>
      <SymbolModal @register="registerModel" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { symbolsApi, updateSymbolsApi } from '/@/api/symbol';
  import { getSymbolColumns } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { stransformParams } from '/@/utils/formatValue';
  import SymbolModal from './components/EditSymbol.vue';
  import { useModal } from '/@/components/Modal';

  const columns: BasicColumn[] = getSymbolColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, SymbolModal },
    setup() {
      const [registerTable] = useTable({
        title: '币种管理',
        api: symbolsApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: false,
        beforeFetch: formatParams,
        actionColumn: {
          width: 30,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerModel, { openModal: openModal1 }] = useModal();

      function formatParams(p) {
        const extra = {
          type: 100,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleEdit(record) {
        console.log(record);
        openModal1(true, {
          type: 'update',
          info: record,
        });
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createItem() {
        openModal1(true, {
          type: 'new',
          info: null,
        });
      }

      function changeStatus(record, type) {
        const params = {
          tid: record.tid,
          [type]: record[type],
        };
        updateSymbolsApi(params);
        console.log(record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        createItem,
        changeStatus,
        registerModel,
      };
    },
  });
</script>
