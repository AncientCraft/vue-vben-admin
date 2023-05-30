<template>
  <PageWrapper title="基础设置" contentFullHeight>
    <Form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <FormItem label="平台名称" :wrapper-col="{ span: 6 }">
        <Input v-model:value="formState.name" />
      </FormItem>
      <FormItem label="网站Logo">
        <UploadIamge :subUrl="formState.logo.toString()" @image-done="setLogo" />
      </FormItem>
      <FormItem label="人物默认图片">
        <UploadIamge :subUrl="formState.avatar.toString()" @image-done="setAvatar" />
      </FormItem>
      <FormItem label="手机/邮箱验证码">
        <Switch v-model:checked="formState.needAuth" />
      </FormItem>
      <FormItem label="客服地址" :wrapper-col="{ span: 13 }">
        <Input v-model:value="formState.customerService" />
      </FormItem>
      <FormItem label="Banna图">
        <div class="clearfix">
          <Upload
            v-model:file-list="fileList"
            :action="uploadUrl"
            list-type="picture-card"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList && fileList.length < 8">
              <PlusOutlined />
              <div style="margin-top: 8px">Upload</div>
            </div>
          </Upload>
          <Modal
            :visible="previewVisible"
            :title="previewTitle"
            :footer="null"
            @cancel="handleCancel"
          >
            <Image alt="example" style="width: 100%" :src="previewImage" />
          </Modal>
        </div>
      </FormItem>
      <FormItem :wrapper-col="{ span: 14, offset: 4 }">
        <Button type="primary" @click="onSubmit">提交</Button>
      </FormItem>
    </Form>
  </PageWrapper>
</template>
<script setup lang="ts">
  import { reactive, onMounted, ref } from 'vue';
  import type { UnwrapRef } from 'vue';
  import type { UploadProps, UploadChangeParam } from 'ant-design-vue';
  import { Form, FormItem, Input, Switch, Button, Upload, Image, Modal } from 'ant-design-vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { PageWrapper } from '/@/components/Page';
  import UploadIamge from './components/UploadImage.vue';
  // import UploadList from './components/UploadList.vue';
  import { getSysApi, updateSysApi } from '/@/api/setting';
  import { okOrFail } from '/@/utils/actions';
  import { useGlobSetting } from '/@/hooks/setting';

  const { uploadUrl = '', urlPrefix = '' } = useGlobSetting();

  function setLogo(val) {
    formState.logo = val;
  }

  function setAvatar(val) {
    formState.avatar = val;
  }

  interface FormState {
    name: string;
    customerService: String;
    csType: String;
    logo: String;
    avatar: String;
    needAuth: boolean;
    banna: String[];
  }

  const formState: UnwrapRef<FormState> = reactive({
    name: '',
    customerService: '',
    csType: '',
    needAuth: false,
    logo: '',
    avatar: '',
    banna: [],
  });

  onMounted(async () => {
    const cfg = await getSysApi();
    deConfig(cfg);
    formatImgs();
  });

  const labelCol = { style: { width: '150px' } };
  const wrapperCol = { span: 14 };
  const onSubmit = async () => {
    // console.log('submit!', toRaw(formState));
    const params = seConfig();
    console.log(params);
    const r = await updateSysApi(params);
    okOrFail(r);
  };

  function deConfig(cfg) {
    const { banner, website, customer_service_url, register_rule } = cfg;
    const bj = JSON.parse(banner);
    const web = JSON.parse(website);
    const cs = JSON.parse(customer_service_url);
    const rr = JSON.parse(register_rule);

    formState.name = web.title;
    formState.logo = web.logo;
    formState.avatar = web.user_avatar;
    formState.needAuth = getNeedAuth(rr.phone_verify);
    formState.customerService = cs.url;
    formState.csType = cs.type;
    formState.banna = bj;
  }

  function seConfig() {
    const web = {
      title: formState.name,
      logo: formState.logo,
      user_avatar: formState.avatar,
    };
    const cs = {
      type: formState.csType,
      url: formState.customerService,
    };
    const rr = {
      phone_verify: formState.needAuth,
      email_verify: formState.needAuth,
    };

    const bj = fileList.value?.map((item) => {
      return item.url?.replace(urlPrefix, '');
    });

    const customer_service_url = JSON.stringify(cs);
    const website = JSON.stringify(web);
    const register_rule = JSON.stringify(rr);
    const banner = JSON.stringify(bj);

    const config = { customer_service_url, website, register_rule, banner };

    return config;
  }

  function getNeedAuth(r) {
    if (r !== 0) {
      return true;
    }
    return false;
  }

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const previewVisible = ref(false);
  const previewImage = ref('');
  const previewTitle = ref('');

  const fileList = ref<UploadProps['fileList']>([]);

  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
  };

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      console.log(fileList.value);
      const tempUrl = info.file.response.path;
      const index = fileList.value?.length - 1;
      fileList.value?.splice(index, 1);
      fileList.value?.push({
        uid: index.toString(),
        name: 'image.png',
        status: 'done',
        url: urlPrefix + tempUrl,
      });
      console.log(fileList.value);
    }
  };
  const handlePreview = async (file: UploadProps['fileList'][number]) => {
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file.originFileObj)) as string;
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
  };

  function formatImgs() {
    const tmp = formState.banna;
    tmp.forEach((item, index) => {
      fileList.value?.push({
        uid: index.toString(),
        name: 'image.png',
        status: 'done',
        url: urlPrefix + item,
      });
    });
  }
</script>
