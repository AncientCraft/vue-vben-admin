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
              <NoticeList :list="item.list" v-if="item.key === 1" @title-click="onNoticeClick" />
              <NoticeList
                :list="item.list"
                v-else-if="item.key === 2"
                @title-click="onWithdrawClick"
              />
              <NoticeList :list="item.list" v-else />
            </TabPane>
          </template>
        </Tabs>
      </template>
    </Popover>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, watchEffect, reactive } from 'vue';
  // import { computed, defineComponent, ref } from 'vue';
  import { Popover, Tabs, Badge } from 'ant-design-vue';
  import { BellOutlined } from '@ant-design/icons-vue';
  import { tabListData } from './data';
  import NoticeList from './NoticeList.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { useWebSocket } from '@vueuse/core';
  import { useGo } from '/@/hooks/web/usePage';
  import { notify } from '/@/utils/lists';
  import mySound from '@/assets/sound/msg.mp3';

  export default defineComponent({
    components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
    setup() {
      const go = useGo();
      const { prefixCls } = useDesign('header-notify');
      // const { createMessage } = useMessage();
      const listData = ref(tabListData);

      const count = computed(() => {
        let count = 0;
        for (let i = 0; i < listData.value.length; i++) {
          count += listData.value[i].list.length;
        }
        return count;
      });

      let audioFlag = false;

      function onNoticeClick(_record) {
        initAudio();
        deleteRecord(1);
        go('/order/index');
        // createMessage.success('你点击了通知，ID=' + record.id);
        // 可以直接将其标记为已读（为标题添加删除线）,此处演示的代码会切换删除线状态
        // record.titleDelete = !record.titleDelete;
      }

      function onWithdrawClick(_record) {
        deleteRecord(2);
        go('/order/withdraw');
        // createMessage.success('你点击了通知，ID=' + record.id);
        // 可以直接将其标记为已读（为标题添加删除线）,此处演示的代码会切换删除线状态
        // record.titleDelete = !record.titleDelete;
      }

      const state = reactive({
        server: 'wss://v200.excservice.rosettawe.com/ws/push',
        // server: 'ws://localhost:9001',
      });

      // const { status, data, send, close, open } = useWebSocket(state.server, {
      //   autoReconnect: true,
      //   heartbeat: true,
      // });

      const { data, status, send } = useWebSocket(state.server, {
        autoReconnect: true,
        heartbeat: false,
        onConnected: handleReconnect,
      });

      function handleReconnect(ws: WebSocket) {
        soketInit();
        console.log('WebSocket reconnected!', ws);
        return;
      }

      const audio = new Audio(mySound);

      watchEffect(() => {
        if (data.value) {
          console.log(data.value);
          try {
            const res = JSON.parse(data.value);
            // console.log(res);
            if (res.action === 'sub.sound') {
              return;
            }
            playAudio();
            const msg = notify(res);
            // console.log(msg);
            addNotify(msg.key, {
              id: msg.id,
              title: msg.title,
            });

            // state.recordList.push(res);
          } catch (error) {
            console.error(error);
          }
          data.value = null;
        }
      });

      function addNotify(key, ppp) {
        listData.value.map((i) => {
          if (i.key === key) {
            i.list.push({
              id: ppp.id,
              title: ppp.title,
            });
            return i;
          }
        });
      }

      function playAudio() {
        if (audioFlag) {
          audio.play();
        }
      }

      function initAudio() {
        if (!audioFlag) {
          audio.play();
          audioFlag = true;
        }
      }

      function deleteRecord(key) {
        listData.value.map((i) => {
          if (i.key === key) {
            i.list = [];
            return i;
          }
        });
      }

      // onMounted(() => {
      //   setTimeout(() => {
      //     soketInit();
      //   }, 3000);
      // });

      const getIsOpen = computed(() => status.value === 'OPEN');

      function soketInit() {
        console.log(getIsOpen.value);
        const d = { action: 'sub.sound' };
        send(JSON.stringify(d));
      }

      return {
        prefixCls,
        listData,
        count,
        onNoticeClick,
        onWithdrawClick,
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
