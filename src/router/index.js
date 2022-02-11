import { createRouter, createWebHistory } from "vue-router";


import Login from "../components/Login.vue";
import Cardrestaurant from "../components/Cardrestaurant.vue";
import AdminMenu from "../components/AdminMenu.vue";
import Order from "../components/Order.vue";
import LoginUser from "../components/LoginUser.vue";
import MenuOfRestaurant from "../components/MenuOfRestaurant.vue";

const routes = [
  {
    path: '/admin',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/menu',
    name: 'menu',
    component: AdminMenu
  },
  {
    path: '/admin/order',
    name: 'Order',
    component: Order
  },
  //  {
  //   path: '/user/cart',
  //   name: 'Cart',
  //   component: Cart
  // },
   {
    path: '/user/menu',
    name: 'Cardrestaurant',
    component: Cardrestaurant
  },
  {
    path: '/user/menu/:name',
    name: 'MenuOfRestaurant',
    component: MenuOfRestaurant
  },{
    path: "/",
    name: "LoginUser",
    component: LoginUser,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
