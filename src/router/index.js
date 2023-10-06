import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') }, //登录页
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        }, //文章管理
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        }, //频道管理
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        }, //个人详情
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        }, //更换头像
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        } //重置密码
      ]
    } //架子
  ]
})

// 登录拦截，全局守卫
// 根据返回值绝对是否放行 false 从哪来回哪去， 具体路径或路径对象据跳转
router.beforeEach((to) => {
  // 拦截到登录页
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})
export default router
