import Vue from "vue";
import Router from "vue-router";
import routes from "./base";
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.checkLogin) {
    loginStatus.checkLogin();
  }
  next();
});
export default router;
