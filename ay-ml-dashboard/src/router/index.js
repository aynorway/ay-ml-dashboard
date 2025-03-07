import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/",
    name: "Home",
    component: () => import(""),
  },
];

const router = createRouter({
  history: createWebHashHistory,
  routes: routes,
});

export default router;
