import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/Login.vue"
import Cardrestaurant from "../components/Cardrestaurant.vue"
import AdminMenu from "../components/AdminMenu.vue"
import Order from "../components/Order.vue"
import LoginUser from "../components/LoginUser.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'menu',
    component: AdminMenu
  },
  {
    path: '/analyze',
    name: 'Order',
    component: Order
  },
   {
    path: '/user/menu',
    name: 'Cardrestaurant',
    component: Cardrestaurant
   },
   {
   path :'/LoginUser' ,
   name : 'LoginUser',
   component :LoginUser,
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
