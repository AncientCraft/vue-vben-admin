<template>
  <div>
    <div class="p-4">
      <BasicTable @register="registerTable">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: '实名认证',
                  // icon: 'ic:outline-delete-outline',
                  onClick: handleVerify.bind(null, record),
                  auth: 'super', // 根据权限控制是否显示: 有权限，会显示
                },
                {
                  label: '编辑',
                  // icon: 'ic:outline-delete-outline',
                  onClick: handleEdit.bind(null, record),
                  auth: 'super', // 根据权限控制是否显示: 有权限，会显示
                },
                {
                  label: '上下分',
                  // icon: 'ic:outline-delete-outline',
                  onClick: handleBalance.bind(null, record),
                  auth: 'super', // 根据权限控制是否显示: 有权限，会显示
                },
              ]"
            />
          </template>
        </template>
      </BasicTable>
    </div>
    <div>
      <EditUser @register="registerModal" />
      <VerifyUser @register="registerVerify" />
      <EditBalance @register="registerBalance" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { membersApi } from '/@/api/exchange/member';
  import { useModal } from '/@/components/Modal';

  import EditUser from './components/EditUser.vue';
  import VerifyUser from './components/VerifyUser.vue';
  import EditBalance from './components/EditBalance.vue';

  import { stransformParams } from '/@/utils/lists';

  export default defineComponent({
    components: { BasicTable, TableAction, EditUser, VerifyUser, EditBalance },
    setup() {
      const [registerTable] = useTable({
        title: '会员列表',
        api: membersApi,
        useSearchForm: true,
        columns: getBasicColumns(),
        formConfig: getFormConfig(),
        beforeFetch: stransformParams,
        bordered: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerModal, { openModal: openModal }] = useModal();
      const [registerVerify, { openModal: openVerify }] = useModal();
      const [registerBalance, { openModal: openBalance }] = useModal();

      function handleEdit(record: any) {
        const params = {
          user_id: record.tid,
          ...record.config,
          balance: record.balance,
        };
        openModal(true, params);
      }

      function handleBalance(record: any) {
        openBalance(true, {
          user_id: record.tid,
        });
      }

      function handleVerify(record: any) {
        openVerify(true, {
          id_no: record.id_no,
          real_name: record.real_name,
        });
      }

      return {
        registerTable,
        handleEdit,
        handleBalance,
        handleVerify,
        registerModal,
        registerVerify,
        registerBalance,
      };
    },
  });
</script>
