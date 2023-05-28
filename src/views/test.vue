<template>
  <Card size="small" :loading="loading" title="test" class="md:w-1/4 w-full !md:mt-0">
    <Button @click="login">login</Button>
    <Button @click="userInfo">UserInfo</Button>
    <Button @click="symbol">symbol</Button>
    <Button @click="assets">assets</Button>
    <Button @click="wallet">wallet</Button>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, Button } from 'ant-design-vue';
  import { loginApi } from '/@/api/auth';
  // import { usersApi, loginLogApi } from '/@/api/users';
  // import { symbolsApi } from '/@/api/symbol';
  import { assetsApi } from '/@/api/assets';
  // import { flowApi, flowApi } from '/@/api/wallet';
  // import { optionsApi } from '/@/api/option';
  // import { optionSettingApi, currencyApi } from '/@/api/setting';

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
    // const params = {
    //   skip: 0,
    //   limit: 3,
    // };
    // const result = await loginLogApi(params);
    // console.log(result);
    // const rr = timestampToString(1684576749016);
    // console.log(rr);
  };

  const symbol = async () => {
    // const params = {
    //   // offset: 0,
    //   type: 100,
    //   limit: 3,
    // };
    // const result = await currencyApi();
    // console.log(result);
    // const rr = timestampToString(1684576749016);
    // console.log(rr);
  };

  const assets = async () => {
    const result = await assetsApi();
    console.log(result);
  };

  const wallet = async () => {
    // const params = {
    //   area: 400,
    //   type: 200,
    //   skip: 0,
    //   limit: 3,
    // };
    // const result = await optionSettingApi();
    // console.log(result);
  };
</script>
