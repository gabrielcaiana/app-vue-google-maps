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
    path: '/places',
    name: 'places',
    component:() => import('@/pages/Places')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
