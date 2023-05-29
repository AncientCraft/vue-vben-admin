<template>
  <div class="p-4">
    <a-button type="primary" @click="createGroup">新增</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '同意',
                icon: 'material-symbols:edit-outline',
                onClick: handleAuth.bind(null, record, 300),
              },
              {
                label: '拒绝',
                icon: 'ic:outline-delete-outline',
                onClick: handleAuth.bind(null, record, 320),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <div>{{ orderStatus(record.status) }}</div>
        </template>
        <template v-if="column.key === 'transfer_image'">
          <TableImg :size="60" :simpleShow="true" :imgList="getImg(record.transfer_image)" />
        </template>
        <template v-if="column.key === 'update_time'">
          <div>{{ timestampToString(record.update_time) }}</div>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction, TableImg } from '/@/components/Table';
  import { flowApi, depositAuthApi } from '/@/api/wallet';
  import { getDepositColumns } from './tableData';
  // import { Switch } from 'ant-design-vue';
  import { stransformParams, timestampToString, orderStatus } from '/@/utils/formatValue';
  import { okOrFail } from '/@/utils/actions';
  import { useGlobSetting } from '/@/hooks/setting';
  // import { demoListApi } from '/@/api/demo/table';

  const columns: BasicColumn[] = getDepositColumns();
  const globSetting = useGlobSetting();
  export default defineComponent({
    components: { BasicTable, TableAction, TableImg },
    setup() {
      const [registerTable] = useTable({
        title: '充币申请',
        api: flowApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        beforeFetch: formatParams,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function formatParams(p) {
        const extra = {
          type: 200,
        };
        const params = { ...p, ...extra };
        return stransformParams(params);
      }

      async function handleAuth(record, type) {
        const params = {
          order_id: record.order_id,
          status: type,
        };
        const r = await depositAuthApi(params);
        okOrFail(r);
      }

      function handleDelete(record) {
        console.log(record);
      }

      function createGroup() {}

      function changeStatus(record) {
        console.log(record);
      }

      function getImg(addr: string) {
        globSetting.uploadUrl;
        return [globSetting.urlPrefix + addr];
      }
      return {
        registerTable,
        handleAuth,
        handleDelete,
        createGroup,
        changeStatus,
        timestampToString,
        orderStatus,
        getImg,
      };
    },
  });
</script>
