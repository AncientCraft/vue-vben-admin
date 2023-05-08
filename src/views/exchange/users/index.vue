<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '实名认证',
                icon: 'ic:outline-delete-outline',
                onClick: handleVerify.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              },
              {
                label: '编辑',
                icon: 'ic:outline-delete-outline',
                onClick: handleEdit.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              },
              // {
              //   label: '冻结',
              //   icon: 'ic:outline-delete-outline',
              //   onClick: handleDelete.bind(null, record),
              //   auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              // },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
  <div>
    <EditUser @register="registerModal" />
  </div>
  <div>
    <VerifyUser @register="registerVerify" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { getGoodsApi } from '/@/api/exchange/goods';
  import { useModal } from '/@/components/Modal';

  import EditUser from './components/EditUser.vue';
  import VerifyUser from './components/VerifyUser.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, EditUser, VerifyUser },
    setup() {
      const [registerTable] = useTable({
        title: '会员列表',
        api: getGoodsApi,
        useSearchForm: true,
        columns: getBasicColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      const [registerModal, { openModal: openModal }] = useModal();
      const [registerVerify, { openModal: openVerify }] = useModal();

      // eslint-disable-next-line no-undef
      function handleEdit(record: Recordable) {
        console.log('点击了删除', record);
        openModal(true, {
          id: 123,
        });
        console.log('点击了编辑', record);
      }
      // eslint-disable-next-line no-undef
      function handleVerify(record: Recordable) {
        console.log('点击了删除', record);
        openVerify(true, {
          id: 123,
        });
        console.log('点击了编辑', record);
      }

      return {
        registerTable,
        handleEdit,
        handleVerify,
        registerModal,
        openModal,
        registerVerify,
        openVerify,
      };
    },
  });
</script>
