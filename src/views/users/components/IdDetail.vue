<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    @visible-change="handleVisibleChange"
    width="800px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <div>
      <Descriptions title="认证详情" bordered :column="1">
        <DescriptionsItem label="用户账号:"> 20000 </DescriptionsItem>
        <DescriptionsItem label="证件类型:"> 20000 </DescriptionsItem>
        <DescriptionsItem label="真实姓名:"> 20000 </DescriptionsItem>
        <DescriptionsItem label="证件号码:"> 20000 </DescriptionsItem>
        <DescriptionsItem label="证件照片:">
          <Image
            :preview="{ visible: false }"
            :width="200"
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </DescriptionsItem>
      </Descriptions>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Descriptions, DescriptionsItem, Image } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicModal, Descriptions, DescriptionsItem, Image },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        console.log(data);
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        handleVisibleChange,
        handleSubmit: async (values: any) => {
          // getGoodsApi(values);
          console.log(values);
        },
      };
    },
  });
</script>
