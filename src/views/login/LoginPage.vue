<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { userRegisterService, userLoginService } from '@/api/user'
import { useUserStore } from '@/stores'
const isRegister = ref(false)
const form = ref()

//form数据对象
const formModel = ref({
  username: '', //用户名
  password: '', //密码
  repassword: '' //确认密码
})

//校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }, //非空校验
    {
      min: 5,
      max: 10,
      message: '用户名必须是5-10位的字母和数字',
      trigger: 'blur'
    } //长度校验
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }, //非空校验
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    } //正则校验
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' }, //非空校验
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }, //正则校验
    {
      //自定义校验
      validator: (rule, value, callback) => {
        //判断value 与 password 是否一致
        if (value !== formModel.value.password) {
          //失败
          callback(new Error('两次输入密码不一致'))
        } else {
          // 成功
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// 注册校验
const register = async () => {
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('注册成功')
  isRegister.value = false
}

//user的 pinia 模块
const userStore = useUserStore()

// 路由
const router = useRouter()

//登录校验
const login = async () => {
  await form.value.validate()
  const { data } = await userLoginService(formModel.value)
  userStore.setToken(data.token)
  router.push('/')
  ElMessage.success('登录成功')
}
//切换时清除表单数据
watch(isRegister, () => {
  formModel.value = {
    username: '', //用户名
    password: '', //密码
    repassword: '' //确认密码
  }
})
</script>

<template>
  <!-- el-row 分成24分，一个el-col占12份 -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1 class="h1">注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
            minlength="5"
            maxlength="10"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            minlength="6"
            maxlength="15"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            @keyup.enter="register"
            type="password"
            placeholder="请输入再次密码"
            minlength="6"
            maxlength="15"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>

      <!-- 登录表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1 class="h1">登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            @keyup.enter="login"
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .h1 {
      width: 100%;
      text-align: center;
      color: #6666ff;
    }
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
