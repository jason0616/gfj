import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import utlis from "./common/utlis";
import loginStatus from "./common/loginStatus";
// import axios from "axios";

import axios from "./request/http";
import VConsole from "vconsole";
const vConsole = new VConsole();
// axios.defaults.timeout = 10000;

// 请求头信息是为post请求设置
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";
// axios.baseUrl = "https://gfjapitest.yeyinfs.com/";
import VueWechatTitle from "vue-wechat-title";
// import { Select, Option, Upload } from "element-ui";
import {
  Picker,
  Area,
  Popup,
  Checkbox,
  CheckboxGroup,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon
} from "vant";
Vue.use(Popup);
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Icon);
Vue.use(Popup);
Vue.use(Button);
Vue.use(Picker);
// Vue.use(Select);
// Vue.use(Option);
Vue.use(Area);
Vue.use(VueWechatTitle);
// options 为可选参数，无则不传
Vue.use(Lazyload);
// Vue.use(Upload);
Vue.use(Checkbox).use(CheckboxGroup);
// import "element-ui/lib/theme-chalk/index.css";

// import './plugins/element.js'
Vue.config.productionTip = false;
// axios.interceptors.request.use(
//   config => {
//     //config.data = JSON.stringify(config.data);
//     config.headers["Content-Type"] =
//       "application/x-www-form-urlencoded;charset=UTF-8";
//     //判断是否存在ticket，即判断用户是否登录，如果存在的话，则每个http header都加上ticket
//     // if (cookie.get("ticket")) {
//     //     //用户每次操作，都将cookie设置成2小时
//     //     cookie.set("ticket", cookie.get("ticket"),1/12)
//     //     //每个http header都加上ticket
//     //     **config.headers.ticket = cookie.get("ticket");**
//     //     //每个http header都加上personnelid
//     //     if(sessionStorage.loginStaffInfo){
//     //         config.headers.personnelid = sessionStorage.personnelid;
//     //     }
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(error.response);
//   }
// );
Vue.prototype.$axios = axios;
//判断有无上级路由
Vue.prototype.$setgoindex = function() {
  if (window.history.length <= 1) {
    if (location.href.indexOf("?") === -1) {
      window.location.href = location.href + "?goindex=true";
    } else if (
      location.href.indexOf("?") !== -1 &&
      location.href.indexOf("goindex") === -1
    ) {
      window.location.href = location.href + "&goindex=true";
    }
  }
};
//挂载工具 com
let common = window;
common.utlis = utlis;
common.loginStatus = loginStatus;
// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(recode => recode.meta.noAuth)) {
//     next();
//   } else {
//     // store已存在用户信息直接进入页面
//     if (store.state.userInfo.nickname) {

//       next();
//       return;
//     }
//     // const code = getUrl(window.location.href).code; // 截取url上的code ,可能没有,则返回''空字符串
//     const code = 123;
//     this.$axios.post("/imsl/user/user-auth", { code }).then(res => {
//       console.log(res);
//     });
//     let res = await api.post("/imsl/user/user-auth", { code }); // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取
//     console.log(res);
//     // 返回用户信息
//     if (res.code === 200 && res.data.is_auth) {
//       store.commit("setUserInfo", res.data);
//       next();
//     } else {
//       // 此状态根据业务需求 可能不存在
//       if (res.code === 201) {
//         const openid = res.data.openid;
//         console.log(openid);
//         store.commit("setOpenid", openid);
//         localStorage.setItem("openid", openid);
//         next("/enlist-info");
//       }
//       //

//       // 上面的获取用户信息接口,如果cookie,session拿不到用户信息,且传递的code为空,则跳转到微信授权页面
//       if (res.code === 202) {
//         console.log(window.location.origin);
//         console.log(to.fullPath);
//         // 这个redirectUrl用 当前页路径或者tof.fullPath(将要进入的路径)
//         let redirectUrl = window.location.href;
//         redirectUrl = encodeURIComponent(redirectUrl);
//         console.log(redirectUrl);
//         const appid = "wxdff0642c2120ea39";
//         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
//       }
//     }
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
