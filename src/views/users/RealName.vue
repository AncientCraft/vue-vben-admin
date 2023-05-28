<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '查看',
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
        <template v-if="column.key === 'checked'">
          <Switch v-model:checked="record.checked" @change="changeStatus(record)" />
        </template>
        <template v-if="column.key === 'id_card_apply_time'">
          <div>{{ timestampToString(record.id_card_apply_time) }}</div>
        </template>
      </template>
    </BasicTable>
    <div>
      <UserModal @register="registerDetail" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { usersApi, updateUsersApi } from '/@/api/users';
  import { getNamesColumns, getFormConfig } from './tableData';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import UserModal from './components/IdDetail.vue';
  import { timestampToString, stransformParams } from '/@/utils/formatValue';
  import { okOrFail } from '/@/utils/actions';

  const columns: BasicColumn[] = getNamesColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, UserModal },
    setup() {
      const [registerTable] = useTable({
        title: '实名管理',
        api: usersApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
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
          role: 100,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      function handleEdit(record) {
        console.log(record);
        openModal1(true, {
          data: 'content',
          info: 'Info',
        });
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createGroup() {}

      async function changeStatus(record) {
        console.log(record);
        const params = {
          tid: record.tid,
          id_card_status: record.checked ?? false ? 200 : -1,
        };
        const r = await updateUsersApi(params);
        okOrFail(r);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        createGroup,
        changeStatus,
        registerDetail,
        timestampToString,
      };
    },
  });
</script>
