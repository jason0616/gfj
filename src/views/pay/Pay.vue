<template>
  <div class="home">
  
   <Header msg="支付页面"></Header>
<div class="page">
    <div class="none"></div>
    <div class="img-mid">

    </div>
    <div class="bgImg">
      <div class="hidden"></div>

      <main >

     

        <section>

          <div><span class="title">- 报名费 -</span></div>
          <div class="mt"><span class="span">￥ </span><span class="price">500.00</span></div>
                   <p class="message"> （您将获得赛事服装及赛事保险）</p>
        </section>
       
          <div class="joinus" @click="pay"> 支付 <van-icon class="arrow" name="arrow" /></div>

      </main>
    </div>
  </div>
  </div>
</template>

<script>
import qs from 'qs'
// @ is an alias to /src
import Header from "@/components/Header.vue";


export default {
  name: "pay",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },


  data() {
    return {
      name:'李海龙',
       named:'李海龙',
       payed:false,
    show: false,
     checked: true,

   
      value: ""
    };
  },
  methods: {
    pay(){
    
          //  this.$router.push('/list')
          const data={price:500,payPort:3,returnUrl:`${window.location.origin}/result`}
   
          this.$axios.get(`https://lm-api.benting.com.cn/addamount_bt?tk=980253360d040127b8f0e78090dab9dcdcc3c52b&price=0.01&payPort=3&returnUrl=${window.location.origin}/result`,qs.stringify(data))
          .then((res)=>{
              console.log('pay')
            console.log(res)
            if(res&&res.data.code==0){
               console.log('ok')
              utlis.wxPay(res.data.data,(red)=>{
                  console.log('in')
                console.log(red)
              this.$router.push('/resylt')
              })
            }
          })
          
    },
    click(){
     this.show=true;
    },
    onChange(picker, value, index) {
      //Toast(`当前值：${value}, 当前索引：${index}`);
    },
    change(r) {
      const value = this.options[r].label;
      console.log(s);
    }
  }
};
</script>
<style lang="less" scoped>
.message{
  font-size: 24px;
  color:#8b8784;
}
.mt{
  margin:56px 0 20px;;
}
.span{
font-size: 34px;
color:#caaa69;
font-weight: 500;
}
.price{
  font-size: 68px;
color:#caaa69;
font-weight: 700;
}
.title{
  font-size: 39px;
  color:#000;
  font-weight: 600;
}
.mt-10{
    margin-top:10px;
}
.mt{
  margin-top:30px;
}
.box-2{
  justify-content: space-between;
padding:0 62px;
height: 105px;
}
.box-1{
height: 70px;
justify-content: space-between;
padding:0 62px;

}
.border{
  border:2px #7b1719 solid;
  border-radius: 10px;
}
.circle{
  width: 185px;height: 185px;
  border-radius: 50%;
  background: #ebebeb;
}
.update-btn{
    margin:30px 40px 0 40px ;
  // background: #7b1719;
  border:3px #7b1719 solid;
  border-radius: 50px;
  height: 100px;
  width: 555px;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  color: #000;
  font-weight: 600;
}
.joinus{
  margin:40px 40px ;
  background: #7b1719;
  border-radius: 50px;
  height: 100px;
  width: 555px;
  line-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #fff;
  font-weight: 600;
}
.arrow{
  font-weight: bold;
  margin-left: 12.5px;
}
.checkout{
  margin-top:20px;
  height:35px;
  .van-checkbox{
    height:52px;
  text-align: center;
    div{
         height:35px;
    }
    .van-checkbox__label{
       display: block;
      width: 70px;
        height:52px;
        line-height: 80px!important;
    }
    span{
        display: block;
      width: 70px;
        height:52px;
        line-height: 80px!important;
      display: block;
      width: 70px;
      
    }
  }
}
.titps{
  flex-wrap: nowrap;
  font-size: 11px;
  transform: scale(0.88);
  margin-left: -47px;
  width:123%;
}
i{
  font-weight: bold;

}
  .btn{
    font-size: 38px;
    color: #fff;
width:465px;
height: 83px;
background: #ebebeb;
border:none;;
  }


.white {
  max-height: 20px;
  width: 100%;

  background: #fff;
  overflow: hidden;
}
.message {
  margin: 0 8px;
  display: block;
  height: 40px;
}

.div-message {
  
  width:650px;
  height: 45px;
  display: flex;
  margin:40px 25px;
  font-size: 25px;
  justify-content: space-between;
  align-items:center ;
  border-bottom: 7px solid #7b1719;
}
.page {
  background: #b79f33;
  margin-top: 0px;
  width: 100%;
  background: url("../../assets/images/pay/pay-bg.png") center;
  background-size: 100% auto;
  background-size: cover;
  height: 100%;
  overflow:hidden;
}
.bgImg {
  .hidden {
    height: 110px;
  }
  padding: 0 60px;
  width: 100%;
  height: 900px;

  background-size: 100% 900px;
  margin-top: -260px;
  // overflow: hidden;
  main {
    margin-top: -40px;
    color: #333333;
    section{
      width: 100%;height: 370px;
      background: #fffdf8;
      // border-radius: 10px 10px 10px 10px!important;
            border:2px solid #dcd3b6 !important;
      border-radius:15px;

      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items: center;
    }
    .top {
      padding-left: 25px;
      padding-right: 25px;
      display: flex;
      justify-content: center;

      align-items: center;

      .div {
        height: 2px;
        width: 234px;
        background: #ebebeb;
      }
    }
    overflow-y: scroll;
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #333333;
      overflow-y: scroll;
      overflow: hidden;
      max-height: 700px;
      padding-left: 25px;
      padding-right: 25px;
      margin-top: 30px;
      padding-bottom: 12px;
    }
    // background: #fff;
    padding-top: 23px;
    flex-direction: column;
    display: flex;
    // align-items: center;
    padding-left: 5px;
    width: 100%;
    min-height: 115%;
  }
}
.margin-left {
  margin-left: 8px;
}
.img-mid {
  .bg {
    .line {
      height: 4px;
      width: 20px;
      background: white;
    }
    padding: 15px 90px;
    background: #7b1719;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    margin-top: 26px;

    .marginLeft {
      margin-right: 27px;
    }
    span {
      font-size: 30px;
      color: white !important;
    }
  }
  .span {
    font-size: 50px;
    color: white !important;
    margin-top: 15px;
    font-weight: bold;
  }
  .img-top {
    width: 300px;
    height: 188px;
    margin-top: 85px;
  }
  width: 100%;
  height: 479px;
  // background: url("../assets/images/competition/rule.png") center center;
  background-size: 100% 529px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

