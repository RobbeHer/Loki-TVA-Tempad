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
    path: '/time-loop',
    name: 'TimeLoop',
    component: () => import(/* webpackChunkName: "time-loop" */ '../views/TimeLoop.vue')
  },
  {
    path: '/draw',
    name: 'Draw',
    component: () => import(/* webpackChunkName: "draw" */ '../views/Draw.vue')
  },
  {
    path: '/missions',
    name: 'Missions',
    component: () => import(/* webpackChunkName: "missions" */ '../views/Missions.vue')
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
    path: '/time-keepers',
    name: 'Timekeepers',
    component: () => import(/* webpackChunkName: "time-keepers" */ '../views/TimeKeepers.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
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
