import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('../views/analysis/AnalysisOverview.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/setting/Setting.vue')
  },
  {
    path: '/newdevice',
    name: 'newdevice',
    component: () => import('../views/newdevice/NewDevice.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/setting/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
