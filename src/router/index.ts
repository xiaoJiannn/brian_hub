import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const home = () => import("@/views/home/home.vue");
const login = () => import("@/views/login/login.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to);
});
export default router;
