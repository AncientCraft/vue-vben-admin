<template>
  <BasicModal
    title="编辑管理组"
    v-bind="$attrs"
    @register="register"
    @visible-change="handleVisibleChange"
    width="800px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <div class="pt-3px pr-3px">
      <Form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
      >
        <FormItem
          label="管理组备注"
          name="remark"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </FormItem>
        <FormItem label="权限分配">
          <Tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </Tree>
        </FormItem>

        <FormItem :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </FormItem>
      </Form>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick, ref, watch, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { updateSymbolsApi, addSymbolsApi } from '/@/api/symbol';
  import { okOrFail } from '/@/utils/actions';
  import { Tree, Form, FormItem } from 'ant-design-vue';
  import { treeData } from './formData';

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  export default defineComponent({
    components: { BasicModal, Tree, Form, FormItem },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const type = ref('');
      const tid = ref(0);

      const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
      const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
      const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

      const formState = reactive<FormState>({
        username: '',
        password: '',
        remember: true,
      });

      watch(expandedKeys, () => {
        console.log('expandedKeys', expandedKeys);
      });
      watch(selectedKeys, () => {
        console.log('selectedKeys', selectedKeys);
      });
      watch(checkedKeys, () => {
        console.log('checkedKeys', checkedKeys);
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        console.log(data);
        type.value = data.type;
        // setFieldsValue(data.info);
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      async function handleSubmit(values: any) {
        console.log(values);

        if (type.value === 'update') {
          updateSymbol(values);
        } else {
          addSymbol(values);
        }
      }

      const onFinish = (values: any) => {
        console.log('Success:', values);
      };

      async function updateSymbol(values) {
        const { sort, ...rest } = values;
        const ext = {
          tid: tid.value,
          sort: parseInt(sort),
        };
        const params = { ...ext, ...rest };
        const r = await updateSymbolsApi(params);
        okOrFail(r);
      }

      async function addSymbol(values) {
        const { sort, ...rest } = values;
        const ext = {
          type: 100,
          sort: parseInt(sort),
        };
        const params = { ...ext, ...rest };
        const r = await addSymbolsApi(params);
        okOrFail(r);
      }

      return {
        register,
        handleSubmit,
        handleVisibleChange,
        onFinish,
        treeData,
        expandedKeys,
        selectedKeys,
        checkedKeys,

        formState,
      };
    },
  });
</script>
