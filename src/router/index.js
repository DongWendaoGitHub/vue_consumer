import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Welcome from "../views/Welcome";
import System_Home_Consume from "../views/System_Home_Consume";
//引入订单
import AddOrders from "../views/Orders/AddOrders";
import SelectOrders from "../views/Orders/SelectOrders";
import UpdateOrders from "../views/Orders/UpdateOrders";
import SelectOrdersById from "../views/Orders/SelectOrdersById";
//引入客户
import AddCustomers from "../views/customers/AddCustomers";
import SelectCustomers from "../views/customers/SelectCustomers";
import UpdateCustomers from "../views/customers/UpdateCustomers";
//引入司机
import AddDrivers from "../views/drivers/AddDrivers";
import SelectDrivers from "../views/drivers/SelectDrivers";
import UpdateDrivers from "../views/drivers/UpdateDrivers";
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
      },
      {
        path: '/system_home_consume/selectorderbyid',
        name: 'id查询订单',
        component: SelectOrdersById
      }
    ]
  },
  //3  客户管理
  {
    path: '/system_home_consume',
    name: '客户管理',
    component: System_Home_Consume,
    //redirect: "/system_home_consume/selectCustomers",
    show: true,
    children:[
      {
        path: '/system_home_consume/selectCustomers',
        name: '查询客户',
        component: SelectCustomers
      },
      {
        path: '/system_home_consume/addCustomers',
        name: '新增客户',
        component: AddCustomers
      },
      {
        path: '/system_home_consume/updateCustomers',
        name: '修改客户',
        component: UpdateCustomers
      }
    ]
  },
  //4  司机管理
  {
    path: '/system_home_consume',
    name: '司机管理',
    component: System_Home_Consume,
    show: true,
    children:[
      {
        path: '/system_home_consume/selectDrivers',
        name: '查询司机',
        component: SelectDrivers
      },
      {
        path: '/system_home_consume/addDrivers',
        name: '新增司机',
        component: AddDrivers
      },
      {
        path: '/system_home_consume/updateDrivers',
        name: '修改司机',
        component: UpdateDrivers
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
