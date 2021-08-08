import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/directory',
    name: 'Directory',
    // route level code-splitting
    // this generates a separate chunk (directory.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "directory" */ '../views/Directory.vue')
  },
  {
    path: '/branches',
    name: 'Branches',
    component: () => import(/* webpackChunkName: "branches" */ '../views/Branches.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
