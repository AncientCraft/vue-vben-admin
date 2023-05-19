<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key == 'trigger_time'">
          <StatisticCountdown :value="record.trigger_time" format="MM:SS" />
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '盈利',
                // icon: 'ic:outline-delete-outline',
                onClick: handleWin.bind(null, record),
                ifShow: () => {
                  return record.status !== 400; // 根据业务控制是否显示: enable状态的显示禁用按钮
                },
              },
              {
                label: '亏损',
                // icon: 'ic:outline-delete-outline',
                onClick: handleLoss.bind(null, record),
                ifShow: () => {
                  return record.status !== 400; // 根据业务控制是否显示: enable状态的显示禁用按钮
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
  import { orderApi, controllApi } from '/@/api/exchange/orders';
  import { orderParams, stransformData } from '/@/utils/lists';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { StatisticCountdown } from 'ant-design-vue';

  // import { RocketFilled } from '@ant-design/icons-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, StatisticCountdown },
    setup() {
      const [registerTable, { updateTableDataRecord }] = useTable({
        title: '订单列表',
        api: orderApi,
        useSearchForm: true,
        columns: getBasicColumns(),
        formConfig: getFormConfig(),
        bordered: true,
        beforeFetch: orderParams,
        afterFetch: stransformData,
        actionColumn: {
          width: 70,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      // eslint-disable-next-line no-undef
      function handleDelete(record: Recordable) {
        // console.log('点击了删除', record);
        // record.controll = '111';
        console.log(record);
        // updateTableDataRecord(record.key, record);
      }
      // eslint-disable-next-line no-undef
      async function handleWin(record: any) {
        await sendTrigger(record, 400, '盈利');
      }

      async function handleLoss(record: any) {
        await sendTrigger(record, 500, '亏损');
      }

      const { createMessage } = useMessage();

      async function sendTrigger(record: any, type, display) {
        const r = await controllApi({
          id: record.tid,
          trigger_type: type,
        });
        if (r.code === 0) {
          record.trigger_display = display;
          updateTableDataRecord(record.key, record);
        } else {
          createMessage.error('操作失败');
        }
      }

      // function countdownFormat(value) {
      //   const seconds = Math.floor(value / 1000); // 将毫秒转换为秒，并向下取整
      //   return `${seconds}s`; // 返回以秒为单位的倒计时字符串
      // }

      return {
        registerTable,
        handleDelete,
        handleWin,
        handleLoss,
        // countdownFormat,
      };
    },
  });
</script>

<style scoped>
  .StatisticCountdown {
    font-size: 5px;
  }
</style>
