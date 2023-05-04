<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
          :dropDownActions="[
            {
              label: '盈利',
              popConfirm: {
                title: '是否让用户盈利？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
              },
            },
            {
              label: '亏损',
              popConfirm: {
                title: '是否让用户亏损？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status !== 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getCloseColumns, getFormConfig } from './tableData';
  import { getGoodsApi } from '/@/api/exchange/goods';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction组件及固定列示例',
        api: getGoodsApi,
        useSearchForm: true,
        columns: getCloseColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        actionColumn: {
          width: 100,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

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
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
