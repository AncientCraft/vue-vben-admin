<template>
  <div class="p-4">
    <a-button type="primary" @click="createItem">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'material-symbols:edit-outline',
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
        <template v-if="column.key === 'status'">
          <Switch v-model:checked="record.status" @change="changeStatus(record)" />
        </template>
      </template>
    </BasicTable>
    <div>
      <OptionModal @register="registerModel" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';
  import { getOptionsColumns } from './tableData';
  import { Switch } from 'ant-design-vue';
  import OptionModal from './components/OptionForm.vue';
  import { useModal } from '/@/components/Modal';

  const columns: BasicColumn[] = getOptionsColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, OptionModal },
    setup() {
      const [registerTable] = useTable({
        title: '期权档位设置',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerModel, { openModal: openModal1 }] = useModal();

      function handleEdit(record) {
        console.log(record);
        openModal1(true, {
          type: 'update',
          info: record,
        });
      }

      function createItem() {
        openModal1(true, {
          type: 'new',
          info: null,
        });
      }

      function handleDelete(record) {
        console.log(record);
      }

      function changeStatus(record) {
        console.log(record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        changeStatus,
        registerModel,
        createItem,
      };
    },
  });
</script>
