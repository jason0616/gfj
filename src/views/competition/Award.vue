<template>
  <div class="home">
  
   <Header msg="中奖名单"></Header>
<div class="page">
    <div class="none"></div>
    <div class="img-mid">
      <img src="@images/logo.png" class="img-top">
    </div>
    <div class="bgImg">
      <div class="hidden"></div>

      <main  >

          <div class="top flex"><span class="span-left">{{data[0]?data[0].match_name:'中奖名单'}}</span>
          <span class="span-right">中奖名单</span></div>

          <div class="first flex" v-for="i in data" :key="i.avatar">
            <div class="pic flex" style="flex:1"><img :src="i.avatar" width="100%" height="100%"  borderRadius="50%" class="imglist"></div>
            <span  style="flex:1">{{i.nickname}}</span>
          </div>


      </main>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";


export default {
  name: "list",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
   data() {
    return {
 
       payed:false,
    show: false,
     checked: true,
     list:[{name:'微信名称1'},
     {name:'微信名称2'},
     {name:'微信名称3'},],

      data:[],
      value: ""
    };
  },
  methods: {
    tohome(){
     
           this.$router.push('/')
        
   
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
  },
  mounted() {
      this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/winners').then((res)=>{
       console.log(res)
       this.data=res.data.data
           console.log( this.data)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })
    setInterval(() => {
         this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/winners').then((res)=>{
       console.log(res)
       this.data=res.data.data
           console.log( this.data)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })

    }, 15000);
   
  }
};
</script>
<style lang='less' scoped>
.imglist{
  border-radius: 50%!important;
       width: 205px!important;
     height: 205px!important;
}
.first{
   width: 692px;
   height: 224px;
   background: #851618;
   border-radius: 10px;
   margin:22px 0;
   .pic{
     width: 205px;
     height: 205px;
     border-radius: 50%;
    //  background: #fff;
   }
   span{
     font-size: 46px;
     color:#fff;
     font-weight: 700;
     margin-left: 25px;
   }
}
.top{
  .span-left{
    margin-right: 20px;
  }
  font-size: 60px;
  color:#310002;
  // -webkit-text-fill-color: #f1be71;
  // -webkit-text-stroke-color: #f1be71;
  -webkit-text-stroke: 0.3px #f1be71;
  // text-shadow:5px 5px 8px #f1be71;
  height: 100px;
  width: 692px;
  font-weight: 800;
  background: #b79f33;
  border-radius: 10px;
  margin-bottom: 22px;
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
  width: 171px;height: 171px;
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
  margin:20px 40px ;
  background: #7b1719;
  border-radius: 50px;
  height: 100px;
  width: 555px;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  color: #fff;
  font-weight: 600;
}
.ii{
  font-weight: bold;
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

.dv{
  height: 130px;;
  width: 78%;
  display: flex;
  flex-direction: column;
   margin-top: 60px;
}
.ss{
  margin-top: 35px;

}
.f-22{font-size: 11px;
transform: scale(0.8);
  float: right;

}

.select{
  width: 170px;
  height: 100%;
  text-align: center;
    margin-left: -5px;
}
.input{
  width: 170px;
  height: 100%;
  margin-left: 12px;
  border-top:none;
  border-left:none;
  border-right: none;
  border-bottom:2px solied #ebebeb;
    float: right;
}
.box-content{
  justify-content: flex-end!important;
  height: 60px;
  float: right;
  width: 50%;
  span{

    float: right;
  }
  input{
      float: right;
    margin-left: -5px;
    text-align: center;
  }
}
.box-inp {
  width: 165px;
}
.box-one {
  flex: 1;
  flex-direction: row;
  height: 50px;
}
.area{
    height: 50px;
  width: 100%;
    display: flex;
  margin-bottom: 35px;
  
}
.box {
  height: 50px;
  width: 100%;
  display: flex;
  //justify-content:c-between;
  align-items: center;
  margin-bottom: 35px;
}
.rule-box {
  p {
    margin-bottom: 18px;
    margin-left: 55px;
  }
  display: block;
  justify-content: flex-start;
  flex-direction: column;
}
.place {
  width: 210px;
  height: 40px;
  text-align: right;
  line-height: 40px;
  color: white;
  padding-right: 10px;
  border-radius: 0 20px 20px 0;
  background: #7b1719;
  margin-bottom: 22px;
}
.area-search{ 
    width: 75%;
        height:  100%;
        }
.bg-span {
  font-size: 35px;
  color: white;
  margin: 0 14px;
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
     font-weight: 600;
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
  margin-top: -10px;
  width: 100%;
  background: url("../../assets/images/competition/award.png") center;
  background-size: 100% auto;
  background-size: cover;
  height: 103%;
  // overflow: hidden;
}
.bgImg {
  .hidden {
    height: 110px;
  }

  width: 100%;
  height: 900px;

  background-size: 100% 900px;
  margin-top: -149px;
  // overflow: hidden;
  main {
    padding:0 30px;
    // margin-top: -30px;
    color: #333333;
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



    // padding-top: 23px;
    flex-direction: column;
    display: flex;
    // align-items: center;
    // padding-left: 5px;
    width: 100%;
    min-height: 100%;
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
    margin-top:130px;
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
