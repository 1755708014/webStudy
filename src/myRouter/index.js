import Vue from 'vue'
import Router from './router'

Vue.use(Router)

// 去掉菜单或导航 路由未跳转的报错
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new Router({
  routes: routes
})
router.mode = 'history'

export default router
