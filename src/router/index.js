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
  }
]

const router = new VueRouter({
  routes
})

export default router
