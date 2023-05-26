<template>
  <div class="p-4">
    <!-- <a-button type="primary" @click="createItem">新增</a-button> -->
    <Select ref="select" v-model:value="currentSymbol" style="width: 120px">
      <SelectOption v-for="s in symbols" :value="s" :key="s">{{ s }}</SelectOption>
    </Select>

    <a-button type="primary" @click="searchSymbol">查询</a-button>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'material-symbols:edit-outline',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'display'">
          <Switch v-model:checked="record.display" @change="changeStatus(record)" />
        </template>
      </template>
    </BasicTable>
    <div>
      <OptionModal @register="registerModel" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { currencyApi, optionSettingApi } from '/@/api/setting';
  import { getOptionsColumns } from './tableData';
  import { Switch, Select, SelectOption } from 'ant-design-vue';
  import OptionModal from './components/OptionForm.vue';
  import { useModal } from '/@/components/Modal';
  // import { symbol } from 'vue-types';

  const columns = getOptionsColumns();
  export default defineComponent({
    components: { BasicTable, TableAction, Switch, OptionModal, Select, SelectOption },
    setup() {
      const symbols = ref({});
      const tableData: any = ref([]);
      const currentSymbol = ref('');
      const tid = ref(0);

      const [registerTable, { getDataSource }] = useTable({
        title: '期权档位设置',
        // api: optionSettingApi,
        dataSource: tableData,
        columns: columns,
        bordered: true,
        showTableSetting: true,
        useSearchForm: false,
        // formConfig: searchs,
        // beforeFetch: formatParams,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      onMounted(async () => {
        symbols.value = await currencyApi();
        currentSymbol.value = symbols.value[0];
        await setTableData();
        // searchs.value = getFormConfig(names);
      });

      async function setTableData() {
        const params = { name: currentSymbol.value };
        const r = await optionSettingApi(params);
        // console.log(r.items);
        tid.value = r.tid;
        tableData.value = r.items;
      }

      // function getOptions(names) {
      //   return names.map((name) => {
      //     return {
      //       label: name,
      //       value: name,
      //     };
      //   });
      // }

      // function getFormConfig(names): Partial<FormProps> {
      //   return {
      //     labelWidth: 50,
      //     schemas: [
      //       {
      //         field: 'name',
      //         label: '币种',
      //         component: 'Select',
      //         componentProps: {
      //           options: getOptions(names),
      //           // defaultValue: names[0],
      //         },
      //         colProps: {
      //           xl: 4,
      //           xxl: 4,
      //         },
      //       },
      //     ],
      //   };
      // }

      const [registerModel, { openModal: openModal1 }] = useModal();

      // function formatParams(p) {
      //   const params = {
      //     name: p.name,
      //   };
      //   return params;
      //   // return stransformParams(params);
      // }

      function handleEdit(record) {
        // console.log(record);
        const rules = getDataSource();
        console.log(rules);
        openModal1(true, {
          type: 'update',
          tid: tid.value,
          rules,
          info: record,
        });
      }

      function createItem() {
        console.log(getDataSource());
        // openModal1(true, {
        //   type: 'new',
        //   info: null,
        // });
      }

      function handleDelete(record) {
        console.log(record);
      }

      function changeStatus(record) {
        console.log(record);
      }

      function searchSymbol() {
        setTableData();
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        changeStatus,
        registerModel,
        createItem,
        currentSymbol,
        symbols,
        searchSymbol,
      };
    },
  });
</script>
