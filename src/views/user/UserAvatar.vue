<script setup>
import { ref } from 'vue'
import { Plus, Upload } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { userUploadAvatarService } from '@/api/user'

//获取头像数据
const userStore = useUserStore()

// 初始头像预览
const uploadRef = ref()
const imgUrl = ref(userStore.user.user_pic)

// 更新头像预览
const onSelectFile = (uploadFile) => {
  // 基于FileReader的预览
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imgUrl.value = reader.result //存base64格式
  }
}

// 更新用户头像
const onUpdateFile = async () => {
  await userUploadAvatarService(imgUrl.value) //发送请求
  await userStore.getUser() //重新渲染
  ElMessage.success('更换成功')
}
</script>

<template>
  <page-container title="更换头像">
    <el-row>
      <el-col :span="12">
        <el-upload
          ref="uploadRef"
          class="avatar-uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onSelectFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <img v-else src="@/assets/avatar.jpg" width="278" />
        </el-upload>
        <br />
        <el-button
          @click="uploadRef.$el.querySelector('input').click()"
          type="primary"
          :icon="Plus"
          size="large"
        >
          选择图片
        </el-button>
        <el-button
          @click="onUpdateFile"
          type="success"
          :icon="Upload"
          size="large"
        >
          上传头像
        </el-button>
      </el-col>
    </el-row>
  </page-container>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>
