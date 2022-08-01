import { createRouter, createWebHistory } from "vue-router";
import GlobalFeed from "@/views/GlobalFeed";

const routes = [
  {
    path: "/",
    name: "globalFeed",
    component: GlobalFeed
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
    path: "/settings",
    name: "settings",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/profiles/:slug",
    name: "userProfile",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/profiles/:slug/favorites",
    name: "userProfileFavorites",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/article/:slug",
    name: "article",
    component: () => import(/* webpackChunkName: "article" */ "../views/Article")
  }, {
    path: "/feed",
    name: "yourFeed",
    component: () => import(/* webpackChunkName: "login" */ "../views/YourFeed")
  }, {
    path: "/tags/:slug",
    name: "tag",
    component: () => import(/* webpackChunkName: "login" */ "../views/TagFeed")
  },
  {
    path: "/article/new",
    name: "newArticle",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/article/:slug/edit",
    name: "editArticle",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active"
});

export default router;
