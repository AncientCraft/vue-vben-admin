<template>
  <div class="clearfix">
    <Upload
      :file-list="fileList"
      action="/upload"
      list-type="picture-card"
      @preview="handlePreview"
      @change="handleChange"
      @remove="handleRemove"
    >
      <div v-if="fileList && fileList.length < 8">
        <PlusOutlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </Upload>
    <Modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <Image alt="example" style="width: 100%" :src="previewImage" />
    </Modal>
  </div>
</template>
<script setup lang="ts">
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import type { UploadProps, UploadChangeParam } from 'ant-design-vue';
  import { Upload, Image, Modal } from 'ant-design-vue';

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

  const fileList = ref<UploadProps['fileList']>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
  };

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
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

  const handleRemove = () => {
    console.log(fileList.value);
  };
</script>
<style>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    color: #999;
    font-size: 32px;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
