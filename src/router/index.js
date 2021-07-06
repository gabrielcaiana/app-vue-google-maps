import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/location'
  },

  {
    path: '/location',
    name: 'user-location',
    component:() => import('@/pages/UserLocation')
  },

  {
    path: '/close-buy',
    name: 'close-buy',
    component:() => import('@/pages/CloseBuy')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
