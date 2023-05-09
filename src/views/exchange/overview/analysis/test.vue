<template>
  <Card size="small" :loading="loading" title="test" class="md:w-1/4 w-full !md:mt-0">
    <Button @click="login">login</Button>
    <Button @click="user">user</Button>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, Button } from 'ant-design-vue';
  import { usersApi, loginApi } from '/@/api/exchange/user';

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

  const user = async () => {
    console.log('user');
    const params = {
      offset: 1,
      limit: 3,
    };

    const result = await usersApi(params);
    console.log(result);
  };
</script>
