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
        <DescriptionsItem label="用户ID:" :span="2"> {{ userInfo.tid }} </DescriptionsItem>
        <DescriptionsItem label="用户账号:"> {{ userInfo.account }} </DescriptionsItem>
        <DescriptionsItem label="用户密码:"> ****** </DescriptionsItem>
        <DescriptionsItem label="邮箱:"> {{ userInfo.email }} </DescriptionsItem>
        <DescriptionsItem label="手机号码:"> {{ userInfo.phone }} </DescriptionsItem>
      </Descriptions>
      <br />
      <Descriptions title="证件信息" bordered :column="2">
        <template #extra>
          <a-button type="primary">解绑</a-button>
        </template>
        <DescriptionsItem label="姓名:"> {{ userInfo.account }} </DescriptionsItem>
        <DescriptionsItem label="证件号码:"> {{ userInfo.tid }} </DescriptionsItem>
        <DescriptionsItem label="证件照片:" :span="2"> {{ userInfo.tid }} </DescriptionsItem>
      </Descriptions>
      <br />
      <Descriptions title="资产信息" bordered :column="2">
        <template #extra>
          <a-button type="primary">钱包详情</a-button>
          <a-button type="primary">充提记录</a-button>
          <a-button type="primary">期权详情</a-button>
          <a-button type="primary">台面分变更</a-button>
        </template>
        <DescriptionsItem label="现货余额:"> {{ userInfo.spotFree }} </DescriptionsItem>
        <DescriptionsItem label="期权余额:"> {{ userInfo.optionFree }} </DescriptionsItem>
        <DescriptionsItem label="法币余额:"> {{ userInfo.fundsFree }} </DescriptionsItem>
      </Descriptions>
      <br />
      <Descriptions title="收款信息" bordered :column="2">
        <DescriptionsItem label="姓名:" :span="2"> {{ userInfo.account }} </DescriptionsItem>
        <DescriptionsItem label="银行卡账号:"> {{ userInfo.spotFree }} </DescriptionsItem>
        <DescriptionsItem label="支行信息:"> {{ userInfo.spotFree }} </DescriptionsItem>
        <DescriptionsItem label="USDT地址:"> {{ userInfo.spotFree }} </DescriptionsItem>
      </Descriptions>
      <br />
      <Row justify="center">
        <a-button type="primary">保存设置</a-button>
      </Row>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Descriptions, DescriptionsItem, Row } from 'ant-design-vue';

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

      return {
        register,
        handleVisibleChange,
        handleSubmit: async (values: any) => {
          // getGoodsApi(values);
          console.log(values);
        },
        userInfo,
      };
    },
  });
</script>
