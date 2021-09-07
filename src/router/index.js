import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Register from '../components/register'
import newBlog from '../components/newBlog'
import readBlog from '../components/readBlog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'readBlog',
    component: readBlog
  },
  {
    path: '/login',
    name: 'login',
    component: Register
  },
  {
    path: '/newBlog',
    name: 'newBlog',
    component: newBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
