<script setup>
import { ref } from 'vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  artPublishService,
  artGetDeailService,
  artEditService
} from '@/api/article'
import { baseURL } from '@/utils/request'
import axios from 'axios'

// 抽屉开关
const visibleDrawer = ref(false)

//表单数据
const formModel = ref({
  title: '', //标题
  cate_id: '', //分类id
  cover_img: '', //封面图片
  content: '', //内容
  state: '' //状态
})

// 数据校验规则
const formRef = ref()
const rules = {
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
    {
      pattern: /^\S{1,30}$/,
      message: '标题必须是1-30位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_id: [{ required: true, message: '请选择分类别名', trigger: 'blur' }],
  cover_img: [{ required: true, message: '请上传文章封面', trigger: 'blur' }],
  content: [{ required: true, message: '请上传文章封面', trigger: 'blur' }]
}

//图片上传
const imgUrl = ref('')
const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw) //预览
  formModel.value.cover_img = uploadFile.raw //保存
}

//富文本编辑器
const editorRef = ref()

//子组件通信
const emit = defineEmits(['success'])

// 发布或草稿
const onPublish = async (state) => {
  await formRef.value.validate //校验
  formModel.value.state = state //存入状态
  const fd = new FormData() //把普通对象转换成ForData对象
  for (let key in formModel.value) {
    // 存入数据
    fd.append(key, formModel.value[key])
  }

  //发请求
  if (formModel.value.id) {
    // 编辑修改
    await artEditService(fd)
    visibleDrawer.value = false
    ElMessage.success('修改成功')
    emit('success', 'edit')
  } else {
    //添加
    await artPublishService(fd)
    visibleDrawer.value = false
    ElMessage.success('添加成功')
    emit('success', 'add')
  }
}

// 将网络图片地址转换为File对象
async function imageUrlToFile(url, fileName) {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const imageData = response.data

    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], {
      type: response.headers['content-type']
    })

    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type })

    return file
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error)
    throw error
  }
}

const open = async (row) => {
  visibleDrawer.value = true

  //判断是添加还是编辑
  if (row.id) {
    const res = await artGetDeailService(row.id)
    formModel.value = res.data.data

    imgUrl.value = baseURL + formModel.value.cover_img //存储图片地址
    const file = await imageUrlToFile(imgUrl.value, formModel.value.cover_img) //下载图片
    formModel.value.cover_img = file // 保存图片
  } else {
    Object.keys(formModel.value).forEach((key) => (formModel.value[key] = '')) // 重置数据
    imgUrl.value = ''
    editorRef.value.setHTML('') //清空富文本编辑器
  }
}

defineExpose({
  open
})
</script>

<template>
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel.id ? '编辑文章' : '添加文章'"
    size="45%"
  >
    <!-- 发表文章表单 -->
    <el-form
      :model="formModel"
      :rules="rules"
      ref="formRef"
      label-width="100px"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select
          v-model="formModel.cate_id"
          width="100%"
        ></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onSelectFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <QuillEditor
            ref="editorRef"
            v-model:content="formModel.content"
            content-type="html"
            theme="snow"
          ></QuillEditor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
        <el-button type="info" @click="onPublish('草稿')">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
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
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
