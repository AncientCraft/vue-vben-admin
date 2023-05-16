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
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="py-4 px-4 flex justify-between items-center">
          <CountTo prefix="¥" :startVal="1" :endVal="item.value" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>

        <div class="p-2 px-4 flex justify-between">
          <span>总{{ item.title }}</span>
          <CountTo prefix="¥" :startVal="1" :endVal="item.total" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '/@/components/CountTo/index';
  import Icon from '@/components/Icon/Icon.vue';
  import { Tag, Card } from 'ant-design-vue';
  import { growCardList } from '../data';
  import { ref, onMounted } from 'vue';
  import { homeApi } from '/@/api/exchange/overview';

  const CardList = ref(growCardList);

  onMounted(async () => {
    await updateData();
  });

  async function updateData() {
    const r = await homeApi();
    console.log(r);
    CardList.value.map((item) => {
      // const title = item.title;
      // console.log(title);
      // item.total = r.userCount;
      switch (item.title) {
        case '盈亏':
          const profitLoss = parseFloat(r.profitLoss);
          item.total = profitLoss;
          item.value = profitLoss;
          return;
        case '用户总量':
          item.value = r.userCount;
          item.total = r.userCount;
          return;
        case '充值总额':
          const depositAmount = parseFloat(r.depositAmount);
          item.total = depositAmount;
          item.value = depositAmount;
          return;
        case '提现总额':
          const withdrawAmount = parseFloat(r.withdrawAmount);
          item.total = withdrawAmount;
          item.value = withdrawAmount;
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
