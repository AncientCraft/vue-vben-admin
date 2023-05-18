<template>
  <Card>
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="Tab 1">
        <Platform />
      </TabPane>
      <TabPane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</TabPane>
      <TabPane key="3" tab="Tab 3">Content of Tab Pane 3</TabPane>
    </Tabs>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Card, Tabs, TabPane } from 'ant-design-vue';
  import Platform from './components/Platform.vue';

  export default defineComponent({
    components: { Card, Tabs, TabPane, Platform },
    setup() {
      return {
        activeKey: ref('1'),
      };
    },
  });
</script>
