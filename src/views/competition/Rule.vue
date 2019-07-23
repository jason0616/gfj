<template>
  <div class="home">
  
   <Header msg="竞赛规则"></Header>
   <div class="page">
     <div class="none"></div>
  <div  class="img-mid">
    <img src="@images/logo.png" class="img-top">
    <span class="span">传承中国功夫 ,<span class="span margin-left">弘扬尚武精神</span></span>
    <div class="bg">
      <!-- <span class="marginLeft">尚武崇德  </span><span>武动中国</span> -->
    <div class="line"></div><span class="bg-span">野隐杯</span><div class="line"> 
    </div>
  </div>
  </div>
<div class="bgImg">
  <div class="hidden"></div>

 <main>
   <div class="top"> <div class="div right"></div> <div class="div-message"><span class="message">竞赛规程</span></div> <div class="div left"></div> </div>
  
   <article>

   <div v-html="list"></div>
</article>

 </main>

</div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";


export default {
  name: "rules",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
  data(){
  return{
    list:[]
  }
}
,
created(){
     this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/procedure').then((res)=>{
      //  console.log(res)
       this.list=res.data.data.procedure
          // console.log( this.list)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })
}
};
</script>
<style lang='less' scoped>
.right{
    margin-right: 14px;
}
.left{
    margin-left: 14px;
}

.rule-box{
  p{
     margin-bottom: 18px;
     margin-left:55px;
  }
  display: block;
  justify-content: flex-start;
  flex-direction: column;
 
}
.place{
  width: 210px;
  height: 40px;
  text-align: right;
  line-height: 40px;
  color:white;
  padding-right:10px; 
  border-radius: 0 20px 20px 0;
  background: #7b1719;
  margin-bottom: 22px;
}
.bg-span{
  font-size: 35px;
  color:white;
  margin:0 14px;
}
.white{
  max-height:20px;
  width: 100%;

  background:#fff;
  overflow:hidden;
}
 .message{
     display: block;
    height: 5.33333vw;
    font-weight: 600;
    width: 13.33333vw
 
  }
  
  .div-message{
 border-bottom: 7px solid #7b1719;
  }
  .page{
    background: #b79f33;
    padding-top:30px;
  }
.bgImg{
  .hidden{
    height: 110px;;
  }
  padding:0 60px; 
  width:100%;
  height: 900px;
   background:url("../../assets/images/yeyin.png") ;
  background-size:100% 900px;
margin-top:-110px;
// overflow: hidden;
main{ 
  margin-top:-30px;
      color:#333333;
  .top{
    padding-right: 25px;
      display: flex;
    justify-content:center;

  align-items: center;
 
  .div{
    height: 2px;
    width: 234px;
    background:#ebebeb;
  }
  }
     overflow-y: scroll;
  article{
    color:#333333;
    overflow-y: scroll;
    max-height: 700px;
    padding-left: 0px;
    padding-right: 25px;;
    margin-top:30px;
    padding-bottom: 12px;
  }
  background: #fff;
  padding-top:23px;
  flex-direction: column;
  display: flex;
  // align-items: center;
  padding-left:25px;
  width: 100%;
height: 853px;
}
}
 .margin-left{
       margin-left:8px;
    }
.img-mid{
  .bg{
    .line{
      height: 4px;
      width: 20px;
      background: white;
    }
    padding:15px 90px;
    background: #7b1719;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    margin-top:26px;
   
    .marginLeft{
        margin-right:27px;
      }
    span{
      
      font-size: 30px;
       color:white!important;
    }
  }
   .span{
      font-size: 50px;
      color:white!important;
      margin-top:15px;
      font-weight: bold;
    }
  .img-top{
    width:300px;
    height:188px ;
    margin-top:55px;
   
  }
  width:100%;
height: 479px;
background: url("../../assets/images/competition/rule.png") center center;
background-size:100% 529px;
display: flex;
align-items: center;
flex-direction: column;

}

</style>
