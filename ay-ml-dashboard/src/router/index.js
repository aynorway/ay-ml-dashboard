import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/index", // 建议加上 / 使之成为绝对路径
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/index2",
    name: "index2",
    component: () => import("../views/index2.vue"),
  },
  {
    path: "/index3",
    name: "index3",
    component: () => import("../views/index3.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 注意这里需要调用函数 别落下括号 ()
  routes: routes,
});

export default router;
