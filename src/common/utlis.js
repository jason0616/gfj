import { Toast } from "vant";
export default {
  getParams: (url, key) => {
    //new urlserachParams存在兼容性问题 暂时用这个
    const Url = url.split("?")[1].split("&");
    let value;
    Url.forEach(i => {
      if (i.split("=")[0] == key) {
        value = i.split("=")[1];
      }
    });
    return value;
  },
  wxPay: (data, cb = Function.prototype) => {
    console.log(data);
    try {
      /* eslint-disable-next-line */
  
      /* eslint-disable */
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: data.appId, // 公众号名称，由商户传入
            timeStamp: data.timeStamp, // 时间戳，自1970年以来的秒数
            nonceStr: data.nonceStr, // 随机串
            package: data.package,
            signType: 'MD5', // 微信签名方式：
            paySign: data.paySign // 微信签名

          },
          function(res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              cb(res);
            } else {
              console.log(res);

              Toast.success({
                message: "支付取消或支付失败",
                duration: 1900,
                forbidClick: true,
                icon: "success"
              });
            }
          }
        );
  
    } catch (ex) {
      console.warn(ex);
    }
    // if (typeof WeixinJSBridge == "undefined") {
    //   if (document.addEventListener) {
    //     document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
    //   } else if (document.attachEvent) {
    //     document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
    //     document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
    //   }
    // } else {
    //   utlis.wxPay();
    // }
  }
};
