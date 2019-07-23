/*eslint-disable*/
import axios from "../request/http";
export default {
  checkLogin: (snsapi='snsapi_userinfo') => {
    const islogin = localStorage.getItem("loginSuccess");
    const url = window.location.href;

    if (!islogin) {
      // this.$store.commit('loginSuccess',true)
      localStorage.setItem("loginSuccess", "ok");
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx82fba9e80ff33eef&redirect_uri=${url}&response_type=code&scope=${snsapi}#wechat_redirect`;
    } else {
      if (window.location.search) {
        /*eslint-disable-next-line*/
        let code = utlis.getParams(url, "code");
        localStorage.setItem("code", code);
        loginStatus.getToken(snsapi);
      }else if(!localStorage.getItem("token")){
        loginStatus.getToken(snsapi);
      }
    }
  },
  getToken: (snsapi) => {
    
    const code = localStorage.getItem("code");
    let url
    //根据是否是微信静默授权登录 修改接口url
    if(snsapi=='snsapi_userinfo'){
      url=`wxauth?code=${code}`
    }else if(snsapi=='snsapi_base'){
      url=`wxabaseauth?code=${code}`
    }
    axios.get(url).then(res => {
      console.log(res);
  
      if(res.data.code==0){
        const {tk}=res.data.data
        console.log(res.data.data)
        localStorage.setItem('token',tk)
        console.log(res.data.data.tk)
      }
     
    });
  }
};
