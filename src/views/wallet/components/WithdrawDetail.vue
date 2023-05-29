<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="用户详情"
    @visible-change="handleVisibleChange"
    width="800px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <div>
      <Descriptions title="基础信息" bordered :column="2">
        <DescriptionsItem label="账户名："> {{ userInfo.account }} </DescriptionsItem>
        <DescriptionsItem label="币种:"> {{ userInfo.asset }} </DescriptionsItem>
        <DescriptionsItem label="提币链:"> {{ userInfo.network }} </DescriptionsItem>
        <DescriptionsItem label="费率:"> {{ userInfo.fee }} </DescriptionsItem>
        <DescriptionsItem label="提币数量:"> {{ userInfo.quantity }} </DescriptionsItem>
        <DescriptionsItem label="实际提币数量:"> {{ userInfo.price }} </DescriptionsItem>
        <DescriptionsItem label="金额:"> {{ userInfo.phone }} </DescriptionsItem>
        <DescriptionsItem label="提币地址:" :span="2"> {{ userInfo.phone }} </DescriptionsItem>
        <DescriptionsItem label="提币姓名:" :span="2"> {{ userInfo.network }} </DescriptionsItem>
        <DescriptionsItem label="银行:"> {{ userInfo.phone }} </DescriptionsItem>
        <DescriptionsItem label="提币账号:"> {{ userInfo.phone }} </DescriptionsItem>
        <DescriptionsItem label="申请时间:"> {{ userInfo.create_time }} </DescriptionsItem>
        <DescriptionsItem label="状态:"> {{ orderStatus(userInfo.status) }} </DescriptionsItem>
      </Descriptions>
      <br />
      <Row justify="center">
        <a-button type="primary" @click="handleSubmit(300)">确认提币</a-button>
        <a-button type="error" @click="handleSubmit(320)">返回申请</a-button>
      </Row>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Descriptions, DescriptionsItem, Row } from 'ant-design-vue';
  import { withdrawAuthApi } from '/@/api/wallet';
  import { okOrFail } from '/@/utils/actions';
  import { orderStatus } from '/@/utils/formatValue';

  export default defineComponent({
    components: { BasicModal, Descriptions, DescriptionsItem, Row },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      var userInfo = ref({} as any);

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      async function onDataReceive(data) {
        userInfo.value = data;
        console.log(userInfo);
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      async function handleSubmit(type) {
        const params = {
          order_id: userInfo.value.order_id,
          status: type,
        };
        const r = await withdrawAuthApi(params);
        okOrFail(r);
      }

      return {
        register,
        handleVisibleChange,
        handleSubmit,
        userInfo,
        orderStatus,
      };
    },
  });
</script>
