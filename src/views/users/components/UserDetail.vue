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
        <Col :span="12">12</Col>
      </Row>
      <CardGrid style="width: 10%; text-align: right">12211</CardGrid>
      <CardGrid style="width: 20%; text-align: center">12211</CardGrid>
    </Card>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Card, CardGrid, Row, Col } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicModal, Card, CardGrid, Row, Col },
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
