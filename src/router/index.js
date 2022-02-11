import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue"
import Cardrestaurant from "../components/Cardrestaurant.vue"
import AdminMenu from "../components/AdminMenu.vue"
import Order from "../components/Order.vue"
import Cart from "../components/Cart.vue"
import LoginUser from "../components/LoginUser.vue"

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/menu",
    name: "menu",
    component: AdminMenu,
  },
  {
    path: '/analyze',
    name: 'Order',
    component: Order
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: "/orders",
    name: "Cardrestaurant",
    component: Cardrestaurant,
  },
  {
    path: "/user/LoginUser",
    name: "LoginUser",
    component: LoginUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
