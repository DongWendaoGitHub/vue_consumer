import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import System_Home_Consume from "../views/System_Home_Consume";
import AddOrders from "../views/Orders/AddOrders";
import SelectOrders from "../views/Orders/SelectOrders";
import UpdateOrders from "../views/Orders/UpdateOrders";
import Welcome from "../views/Welcome";

Vue.use(VueRouter)

const routes = [
  //0  登陆
  {
    path: '/',
    name: '登陆',
    component: Login
  }
  ,
  //1  管理员
  {
    path: '/system_home_consume',
    name: '管理员，欢迎您',
    component: System_Home_Consume,
    redirect: '/system_home_consume/welcome',
    show: true,
    children:[
      {
        path: '/system_home_consume/welcome',
        name: '嘉援与你相伴',
        component: Welcome,
      }
    ]
  }
  ,
  //2  订单管理
  {
    path: '/system_home_consume',
    name: '订单管理',
    component: System_Home_Consume,
    //redirect: "/system_home_consume/selectOrders",
    show: true,
    children:[
      {
        path: '/system_home_consume/selectOrders',
        name: '查询订单',
        component: SelectOrders
      },
      {
        path: '/system_home_consume/addOrders',
        name: '新增订单',
        component: AddOrders
      },
      {
        path: '/system_home_consume/updateOrders',
        name: '修改订单',
        component: UpdateOrders
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
