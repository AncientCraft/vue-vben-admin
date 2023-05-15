<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                onClick: handleEdit.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 无权限，不显示
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
  <div>
    <Modal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from '../tableData';
  import { goodsListApi } from '/@/api/exchange/goods';
  import { useModal } from '/@/components/Modal';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import Modal from './Modal.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, Modal },
    setup() {
      const [registerTable] = useTable({
        title: '产品列表',
        api: goodsListApi,
        columns: getBasicColumns(),
        bordered: true,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });
      const [registerModal, { openModal: openModal }] = useModal();
      // eslint-disable-next-line no-undef
      function handleEdit(record: Recordable) {
        openModal(true, record);
        console.log('点击了编辑', record);
      }
      // eslint-disable-next-line no-undef
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      // eslint-disable-next-line no-undef
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
        registerModal,
        openModal,
      };
    },
  });
</script>
