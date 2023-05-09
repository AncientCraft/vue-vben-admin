<template>
  <div :class="prefixCls">
    <Popover title="" trigger="click" :overlayClassName="`${prefixCls}__overlay`">
      <Badge :count="count" dot :numberStyle="numberStyle">
        <BellOutlined />
      </Badge>
      <template #content>
        <Tabs>
          <template v-for="item in listData" :key="item.key">
            <TabPane>
              <template #tab>
                {{ item.name }}
                <span v-if="item.list.length !== 0">({{ item.list.length }})</span>
              </template>
              <!-- 绑定title-click事件的通知列表中标题是“可点击”的-->
              <NoticeList :list="item.list" v-if="item.key === '1'" @title-click="onNoticeClick" />
              <NoticeList :list="item.list" v-else />
            </TabPane>
          </template>
        </Tabs>
      </template>
    </Popover>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, watchEffect, reactive, onMounted } from 'vue';
  import { Popover, Tabs, Badge } from 'ant-design-vue';
  import { BellOutlined } from '@ant-design/icons-vue';
  import { tabListData, ListItem } from './data';
  import NoticeList from './NoticeList.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useWebSocket } from '@vueuse/core';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
    setup() {
      const go = useGo();
      const { prefixCls } = useDesign('header-notify');
      const { createMessage } = useMessage();
      const listData = ref(tabListData);

      const count = computed(() => {
        let count = 0;
        for (let i = 0; i < tabListData.length; i++) {
          count += tabListData[i].list.length;
        }
        return count;
      });

      function onNoticeClick(record: ListItem) {
        go('/order/index');
        // console.log(getIsOpen.value);
        // send('ghjgihgihg');
        createMessage.success('你点击了通知，ID=' + record.id);
        // 可以直接将其标记为已读（为标题添加删除线）,此处演示的代码会切换删除线状态
        record.titleDelete = !record.titleDelete;
      }

      const state = reactive({
        server: 'ws://localhost:9001',
        sendValue: '',
        recordList: [] as { id: number; time: number; res: string }[],
      });

      // const { status, data, send, close, open } = useWebSocket(state.server, {
      //   autoReconnect: true,
      //   heartbeat: true,
      // });

      // const { status, data } = useWebSocket(state.server, {
      //   autoReconnect: true,
      //   heartbeat: true,
      // });

      const { data } = useWebSocket(state.server, {
        autoReconnect: true,
        heartbeat: true,
      });

      watchEffect(() => {
        if (data.value) {
          console.log(data.value);
          try {
            const res = JSON.parse(data.value);
            state.recordList.push(res);
          } catch (error) {
            state.recordList.push({
              res: data.value,
              id: Math.ceil(Math.random() * 1000),
              time: new Date().getTime(),
            });
          }
        }
      });

      // const getIsOpen = computed(() => status.value === 'OPEN');

      onMounted(() => {
        // 在这里编写需要执行的逻辑代码
        // console.log(getIsOpen.value);
        // if (!getIsOpen.value) {
        //   console.log('going here');
        //   open();
        //   console.log(getIsOpen.value);
        // }
        // if (getIsOpen.value) {
        //   console.log('ws opened');
        // }
      });

      return {
        prefixCls,
        listData,
        count,
        onNoticeClick,
        numberStyle: {},
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-notify';

  .@{prefix-cls} {
    padding-top: 2px;

    &__overlay {
      max-width: 360px;
    }

    .ant-tabs-content {
      width: 300px;
    }

    .ant-badge {
      font-size: 18px;

      .ant-badge-multiple-words {
        padding: 0 4px;
      }

      svg {
        width: 0.9em;
      }
    }
  }
</style>
