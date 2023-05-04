<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
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
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
            {
              label: '冻结',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
        />
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
        title: 'TableAction组件及固定列示例',
        api: getGoodsApi,
        useSearchForm: true,
        columns: getBasicColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        actionColumn: {
          width: 100,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerModal, { openModal: openModal }] = useModal();
      const [registerVerify, { openModal: openVerify }] = useModal();

      // eslint-disable-next-line no-undef
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
        openModal(true, {
          name: 'content',
        });
        console.log('点击了编辑', record);
      }
      // eslint-disable-next-line no-undef
      function handleVerify(record: Recordable) {
        console.log('点击了删除', record);
        openVerify(true, {
          name: 'content',
        });
        console.log('点击了编辑', record);
      }

      return {
        registerTable,
        handleDelete,
        handleVerify,
        registerModal,
        openModal,
        registerVerify,
        openVerify,
      };
    },
  });
</script>
