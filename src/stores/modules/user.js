import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    //个人信息
    const user = ref({})

    // 获取个人呢信息
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }

    //清除个人信息
    const setUser = (obj) => {
      user.value = obj
    }
    return {
      token,
      user,
      setUser,
      getUser,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
