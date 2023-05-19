<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="用户详情"
    @visible-change="handleVisibleChange"
    width="1600px"
    :showOkBtn="false"
    :showCancelBtn="false"
    :footer="null"
  >
    <Card title="基础信息" :bordered="true">
      <Row>
        <Col :span="2"> 用户ID: </Col>
        <Col :span="4"> 18261762861 </Col>
      </Row>
      <Row>
        <Col :span="2"> 用户账号: </Col>
        <Col :span="4"> 18261762861 </Col>
        <Col :span="2"> 用户密码: </Col>
        <Col :span="4"> 18261762861 </Col>
      </Row>
      <Row>
        <Col :span="2"> 邮箱: </Col>
        <Col :span="4"> 18261762861 </Col>
        <Col :span="2"> 手机号码: </Col>
        <Col :span="4"> 18261762861 </Col>
      </Row>
    </Card>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Card, Row, Col } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicModal, Card, Row, Col },
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
