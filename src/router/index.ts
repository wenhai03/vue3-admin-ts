import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/Register.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

// createWebHashHistory // 创建哈希值

const router = createRouter({
  history: createWebHashHistory(), // 创建历史记录模式的路由，没有#
  routes
});

export default router;
