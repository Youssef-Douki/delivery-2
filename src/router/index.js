import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/Login.vue"
import Cardrestaurant from "../components/Cardrestaurant.vue"
import AdminMenu from "../components/AdminMenu.vue"
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
