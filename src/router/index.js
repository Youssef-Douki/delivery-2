import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/Login.vue"
import Cardrestaurant from "../components/Cardrestaurant.vue"
import AdminMenu from "../components/AdminMenu.vue"
import Order from "../components/Order.vue"
import Cart from "../components/Cart.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'menu',
    component: Cardrestaurant
  }, {
    path: '/menu/:id',
    name: 'AdminMenu',
    component: AdminMenu
  },
  {
    path: '/analyze',
    name: 'Order',
    component: Order
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
