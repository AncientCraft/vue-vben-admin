<template>
  <Card size="small" :loading="loading" title="test" class="md:w-1/4 w-full !md:mt-0">
    <Button @click="login">login</Button>
    <Button @click="userInfo">UserInfo</Button>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, Button } from 'ant-design-vue';
  import { loginApi, userInfoApi } from '/@/api/auth';
  // import { loginApi } from '/@/api/sys/user';
  // import { membersApi } from '/@/api/exchange/member';
  // import { tradingApi } from '/@/api/exchange/orders';
  // import { mergeList } from '/@/utils/lists';

  const loading = ref(false);

  const login = async () => {
    console.log('login');
    const params = {
      username: 'admin',
      password: '123',
    };

    const result = await loginApi(params);
    console.log(result);
  };

  const userInfo = async () => {
    console.log('userInfo');

    const result = await userInfoApi();
    console.log(result);
  };
</script>
