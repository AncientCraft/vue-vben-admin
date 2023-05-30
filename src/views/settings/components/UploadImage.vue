<template>
  <div>
    <Upload
      v-model:file-list="fileList"
      name="file"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :action="uploadUrl"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <Image v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <LoadingOutlined v-if="loading" />
        <PlusOutlined v-else />
        <div class="ant-upload-text">上传图片</div>
      </div>
    </Upload>
  </div>
</template>
<script setup lang="ts">
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { message, Upload, Image } from 'ant-design-vue';
  import { ref, defineProps, onMounted } from 'vue';
  import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
  import { useGlobSetting } from '/@/hooks/setting';

  const { uploadUrl = '', urlPrefix = '' } = useGlobSetting();

  const props = defineProps({
    subUrl: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['image-done']);

  const fileList = ref([]);
  const loading = ref<boolean>(false);
  const imageUrl = ref<string>('');

  onMounted(() => {
    if (props.subUrl !== '') {
      imageUrl.value = urlPrefix + props.subUrl;
    }
  });
  // const imageSubUrl = ref<string>('');

  const handleChange = (info: UploadChangeParam) => {
    // console.log(info);
    if (info.file.status === 'uploading') {
      loading.value = true;
      return;
    }
    if (info.file.status === 'done') {
      const tempUrl = info.file.response.path;
      emit('image-done', tempUrl);
      imageUrl.value = urlPrefix + tempUrl;
      loading.value = false;
    }
    if (info.file.status === 'error') {
      loading.value = false;
      message.error('upload error');
    }
  };

  const beforeUpload = (file: UploadProps['fileList'][number]) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
</script>
<style scoped>
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }

  .ant-upload-select-picture-card i {
    color: #999;
    font-size: 32px;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>

<!-- "/upload/2023-05-29/64748b14672a4e000800000e.png" -->
