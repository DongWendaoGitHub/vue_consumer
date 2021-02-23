import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import System_Home_Consume from "../views/System_Home_Consume";
import Orders from "../views/Orders";
import Qs from "qs"		//引入qs

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/system_home_consume',
    name: 'System_Home_Consume',
    component: System_Home_Consume
  },
  {
    path: '/orders',
    name: '/orders',
    component: Orders
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
