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
  },
  {
    path: '/timeloop',
    name: 'Timeloop',
    component: () => import(/* webpackChunkName: "timeloop" */ '../views/Timeloop.vue')
  },
  {
    path: '/draw',
    name: 'Draw',
    component: () => import(/* webpackChunkName: "draw" */ '../views/Draw.vue')
  },
  {
    path: '/locator',
    name: 'Locator',
    component: () => import(/* webpackChunkName: "locator" */ '../views/Locator.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
  {
    path: '/personnel',
    name: 'Personnel',
    component: () => import(/* webpackChunkName: "personnel" */ '../views/Personnel.vue')
  },
  {
    path: '*',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
