import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ "../views/Register")
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/createArticle",
    name: "createArticle",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
});

export default router;
