<template>
  <div class="md:flex">
    <template v-for="(item, index) in CardList" :key="item.title">
      <Card
        size="small"
        :loading="loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"
      >
        <div class="py-4 px-4 flex justify-between items-center">
          <CountTo :startVal="1" :endVal="item.value" class="text-2xl" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '/@/components/CountTo/index';
  import { Card } from 'ant-design-vue';
  import { ref, onMounted } from 'vue';
  import { growCardList } from '../data';
  import { homeApi } from '/@/api/dashboard';

  const CardList = ref(growCardList);

  onMounted(async () => {
    await updateData();
  });

  async function updateData() {
    const r = await homeApi();
    CardList.value.map((item) => {
      switch (item.title) {
        case '今日新增':
          item.value = r.userTodayCount;
          return;
        case '今日充值数量':
          item.value = r.countDepositToday;
          return;
        case '今日充值金额':
          item.value = parseFloat(r.depositToday);
          return;
        case '今日提现数量':
          item.value = r.countWithdrawToday;
          return;
        case '今日提现金额':
          item.value = parseFloat(r.withdrawToday);
          return;
      }
      return item;
    });
  }

  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>
