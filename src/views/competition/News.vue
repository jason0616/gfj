<template>
  <div class="home">
  
   <Header msg="赛事新闻"></Header>
   <div class="page">
  <div  class="img-mid">
    <img src="@images/yeyin.png" class="img-top">
    <span class="span">中国武术散打功夫技</span>
        <span class="war">系列赛事揭幕战</span>
    <div class="bg"><span class="marginLeft">将于2019年4月20日</span><span>在广东奥体中心进行</span></div>

  </div>
<div class="bgImg">
  <div class="hidden"></div>

 <main>
   <div class="top"> <div class="div2"></div> <div class="div-message"><span class="message">赛事新闻</span></div> <div class="div"></div> </div>
  
   <article>&nbsp;&nbsp;&nbsp;&nbsp;
     
<div class="box" v-for="i in news " :key="i.cover_picture">  
<img :src="i.cover_picture" alt="" class="box-img">
<div class="box-content flex">{{(i.content).replace(/<\/?.+?\/?>/g,'')}}</div>

</div>
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
  name: "news",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
  data(){
    return {
      list:[{src:require("@images/competition/banner-fir.png"),
      content:'第一章：揭幕，中国武术散打功夫技系列赛事揭幕战，将于2019年4月20日在广东奥体中心进行。'},
      {src:require('@images/competition/banner-sec.png'),
      content:'野隐杯”-中国武术散打功夫技系列赛事正式启动！'}
      ],
      news:[]
    }
},
methods:{
getNews(){
   this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/news').then((res)=>{
      //  console.log(res)
       this.news=res.data.data.news
          // console.log( this.news)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })
}
},
created(){
  this.getNews()
}
};
</script>
<style lang="less" scoped>
.bg{
  span{
    font-size: 23px;
    font-weight: 300;
  }
}
.box{
  width:576px;height: 393px;
  margin-bottom: 75px;
.box-img{
  width: 100%;
  height: 320px;
}
.box-content{
  border:solid 3px #ebebeb;
  width:100%;
  padding:17px 16px;
  font-size: 14px;
}
}
.war{
  font-size: 47px;
  color:#fff;
  font-weight:300;
}
.white{
  max-height:20px;
  width: 100%;

  background:#fff;
  overflow:hidden;
}
 .message{
    // margin:0 20px;
  display: block;
  height: 40px;
   font-weight: 600;
   font-size: 25px;
   width: 100px;
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
   background:url("../../assets/images/competition/news.png") ;
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
    width: 225px;margin-left: 20px;
    background:#ebebeb;
  }
  .div2{
     height: 2px;
    width: 225px;margin-right: 20px;
    background:#ebebeb;
  }
  }
     overflow-y: scroll;
  article{
    color:#333333;
    overflow-y: scroll;
    max-height: 700px;
    padding-right: 25px;;
    margin-top:1px;
    padding-bottom: 12px;
  }
  background: #fff;
  padding-top:23px;
  flex-direction: column;
  display: flex;
  align-items: center;
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
    padding:15px 28px;
    background: #7b1719;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    margin-top:26px;
   
    .marginLeft{
        margin-right:24px;
      }
    span{
      
      font-size: 30px;
       color:white!important;
    }
  }
   .span{
     font-weight: bold;
      font-size: 50px;
      color:white!important;
      margin-top:-20px;
    }
  .img-top{
    width:222px;
    height:160px ;
    margin-top:35px;
   
  }
  width:100%;
height: 479px;
background: url("../../assets/images/competition/new-img.png") center center;
background-size:100% 529px;
display: flex;
align-items: center;
flex-direction: column;
}

</style>
