<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
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
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
              },
            },
            {
              label: '禁用',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
              },
            },
            {
              label: '同时控制',
              popConfirm: {
                title: '是否动态显示？',
                confirm: handleOpen.bind(null, record),
              },
              auth: 'super', // 同时根据权限和业务控制是否显示
              ifShow: () => {
                return true; // 根据业务控制是否显示
              },
            },
          ]"
        />
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
        title: 'TableAction组件及固定列示例',
        api: goodsListApi,
        columns: getBasicColumns(),
        bordered: true,
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerModal, { openModal: openModal }] = useModal();
      // eslint-disable-next-line no-undef
      function handleEdit(record: Recordable) {
        openModal(true, {
          name: 'content',
        });
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
