import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const home = () => import("@/views/home/home.vue");
const singleLogin = () => import("@/views/panel/singleLogin.vue");
const register = () => import("@/views/panel/chidCom/register.vue");
const userPanel = () => import("@/views/panel/userPanel.vue");
const profile = () => import("@/views/profile/profile.vue");
const publish = () => import("@/views/moment/publish.vue");

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
    component: singleLogin,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/user",
    component: userPanel,
  },
  {
    path: "/profile/:id",
    component: profile,
  },
  // {
  //   path: "/moment",
  //   component: publish,
  // },
  {
    path: "/moment/publish",
    component: publish,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to.path);
});
export default router;
