import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
    // history: createWebHashHistory(), // hash 路由模式
    history: createWebHistory(), // history 路由模式
    routes // 路由规则
  })
  
  export default router