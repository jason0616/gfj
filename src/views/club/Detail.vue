<template>
  <div class="home">
  
   <Header msg="功夫联盟"></Header>
  <div class="page">
    <div class="none"></div>
    <div class="img-mid">
         <img src="@images/logo.png" class="img-top">
           <div class="flex message">
      <div class="left div"></div>
  
        <div class="right div"></div>
    </div>
    </div>
  
    <div class="bgImg">
   

      <main  >

       
        <div class="main-img flex">
          <img :src="img">
        </div>
        <div class="line bt"></div>
        <div v-html="content"></div>
      </main>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";


export default {
  name: "detail",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
    data() {
    
    return {
      img:'',
      banner:[{img:require('@images/banner.jpg')},{img:require('@images/banner2.jpg')}
      
      ],
      content:'',
      name:'李海龙',
       named:'李海龙',
       payed:false,
    show: false,
     checked: true,
   
      list:'',
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
      // console.log(s);
    }
  },
  created(){
    console.log(this.$route.query)
    let ids=this.$route.query.club;
    let img=this.$route.query.img
     this.$axios.post('https://gfjapitest.yeyinfs.com/api/gongfuji/clubDetails',{id:ids}).then((res)=>{
      
       this.list=res.data.data.clubs
           this.img=res.data.data.clubs.club_logo
           this.content=res.data.data.clubs.club_introduction
          // console.log(this.list)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })

  

  }
};
</script>
<style lang="less" scoped>
.bt{
  margin-bottom: 20px;
}
.line{
  width:543px;
  height: 3px;
  background: #ebebeb;
  margin-top:30px;
}
.main-img img{
  width: 175px;
  height: 175px;
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
  border: 2px #7b1719 solid;
  border-radius: 10px;
}
.circle{
  width: 171px;
  height: 171px;
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
  margin-top: 0px;
  width: 100%;
  background: url("../../assets/images/club/detail.png") center;
  background-size: 100%  100%;
  // background-size: cover;
  height: 100%;
  min-height: 1334px;
  // overflow: hidden;
}
.bgImg {
  .hidden {
    height: 342px;
    width: 100%;
    margin-top:20px;
    margin-bottom: 30px;
  }
  padding: 0 60px;
  width: 100%;
  height: 900px;

  background-size: 100% 900px;
 
  // overflow: hidden;
  main {
    padding:60px 45px 0;

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
    background: #fff;
    // padding-top: 23px;
    flex-direction: column;
    display: flex;
    // align-items: center;
    // padding-left: 5px;
    width: 100%;
    min-height: 135%;
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
      margin-bottom: 20px;
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
    margin-top: 160px;
    margin-bottom: 53px;
  }
  width: 100%;
  height: 360px;
  // background: url("../assets/images/competition/rule.png") center center;
  background-size: 100% 529px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

