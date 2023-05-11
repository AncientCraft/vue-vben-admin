<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
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
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { orderApi } from '/@/api/exchange/orders';
  import { stransformParams, timestamp_to_string } from '/@/utils/lists';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '订单列表',
        api: orderApi,
        useSearchForm: true,
        columns: getBasicColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        beforeFetch: stransformParams,
        afterFetch: handleData,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      // function handleParams(params) {
      //   console.log(params);
      //   const { page, pageSize, start_time, end_time, ...rest } = params;
      //   console.log(start_time);
      //   console.log(end_time);
      //   const newParams = {
      //     skip: page - 1,
      //     limit: pageSize,
      //   };
      //   return { start_time, end_time, ...newParams, ...rest };
      // }

      function handleData(data) {
        console.log(data);
        const result = data.map((item) => {
          const { create_time, ...rest } = item;
          const newTime = timestamp_to_string(create_time);
          const newItem = {
            create_time: newTime,
          };
          return { ...newItem, ...rest };
        });
        // console.log(result);
        return result;
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
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
