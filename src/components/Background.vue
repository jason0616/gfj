<template>
   <div class="page">
  <div  class="img-mid" id="bg">
    <img src="../assets/images/logo.png" class="img-top">
    <span class="span">传承中国功夫 ,<span class="span margin-left">弘扬尚武精神</span></span>
    <div class="bg"><span class="marginLeft">尚武崇德  </span><span>武动中国</span></div>
  </div>
<div class="bgImg" >
  <div class="hidden"></div>

 <main>
   <div class="top">
      <div class="div"></div>
       <div class="div-message"><span class="message">赛事简介</span></div> 
       <div class="div2"></div> 
       </div>
  
   <article><div v-html="content"></div></article>

 </main>

</div>


    </div>

</template>

<script>
export default {
name:'background',
data(){
  return{
    content:[],
    img:''
  }
},
methods: {
  getContent(){
    return
   this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/introduction').then((res)=>{
      //  console.log(res)
       this.content=res.data.data.introduction
          // console.log(this.content)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })
  },
  bgImg(){
    return
    this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/backgroundImage').then((res)=>{
       console.log(res)
       this.img=res.data.data.background_image
        bg.style.background=`url('${this.img}')`
          bg.style.backgroundSize="100% 100%";
          // console.log(this.img)
    }).catch((err)=>{
      console.log(err)
         console.log(3)
    })
  }
},
created(){
  this.getContent();
  this.bgImg();
}
}
</script>

<style lang='less' scoped>
.white{
  max-height:20px;
  width: 100%;

  background:#fff;
  overflow:hidden;
}
 .message{
    // margin:0 5px;
  display: block;
  height: 40px;
      font-weight: 600;
      width:100px;
  }
  
  .div-message{
 border-bottom: 7px solid #7b1719;
  }
  .page{
    background: #b79f33;

  }
.bgImg{
  .hidden{
    height: 110px;;
  }
  padding:0 60px; 
  width:100%;
  height: 900px;
   background:url("../assets/images/yeyin.png") ;
  background-size:100% 900px;
margin-top:-110px;
// overflow: hidden;
main{ 
  margin-top:-10px;
      color:#333333;
  .top{
    padding-right: 25px;
      display: flex;
    justify-content:center;

  align-items: center;
 
  .div{
    height: 2px;
    width: 220px;
    background:#ebebeb;
    margin-right: 14px;
  }
  .div2{
     height: 2px;
    width: 220px;
    background:#ebebeb;
    margin-left: 14px;
  }
  }
     overflow-y: scroll;
  article{
    color:#333333;
    overflow-y: scroll;
    max-height: 700px;
    padding-right: 25px;;
    margin-top:30px;
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
      margin-top:10px;
         font-weight: bold;
    }
  .img-top{
    width:300px;
    height:188px ;
    margin-top:35px;
   
  }
  width:100%;
height: 479px;
background: url("../assets/images/hand.png") center center;
display: flex;
align-items: center;
flex-direction: column;
    padding-top:40px;
}

</style>
