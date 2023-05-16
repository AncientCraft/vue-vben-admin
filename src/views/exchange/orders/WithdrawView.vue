<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '同意',
                // icon: 'ic:outline-delete-outline',
                onClick: handleAccept.bind(null, record),
                ifShow: () => {
                  return record.status === 100; // 根据业务控制是否显示: enable状态的显示禁用按钮
                },
              },
              {
                label: '拒绝',
                // icon: 'ic:outline-delete-outline',
                onClick: handleReject.bind(null, record),
                ifShow: () => {
                  return record.status === 100; // 根据业务控制是否显示: enable状态的显示禁用按钮
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
  import { getWithdrawColumns, getFormConfig } from './tableData';
  import { flowApi, commitApi } from '/@/api/exchange/orders';
  import { withdrawParams, stransformData, okOrFail } from '/@/utils/lists';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '提现记录',
        api: flowApi,
        useSearchForm: true,
        columns: getWithdrawColumns(),
        formConfig: getFormConfig(),
        beforeFetch: withdrawParams,
        afterFetch: stransformData,
        bordered: true,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      // eslint-disable-next-line no-undef
      function handleReject(record: Recordable) {
        commitWithdraw({ order_id: record.order_id, status: 320 });
      }
      // eslint-disable-next-line no-undef
      function handleAccept(record: Recordable) {
        commitWithdraw({ order_id: record.order_id, status: 300 });
        console.log('点击了启用', record);
      }

      async function commitWithdraw(params) {
        // console.log(params);
        const r = await commitApi(params);
        okOrFail(r);
      }

      return {
        registerTable,
        handleReject,
        handleAccept,
      };
    },
  });
</script>
