<template>
  <div class="home">
  
   <Header msg="功夫联盟"></Header>
 <div class="page">
    <div class="none"></div>
    <div class="img-mid">
         <img src="@images/logo.png" class="img-top">
           <div class="flex message">
      <div class="left div"></div>
      <span class="club">功夫联盟</span>
        <div class="right div"></div>
    </div>
    </div>
  
    <div class="bgImg">
      <div class="hidden">
        <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(image, index) in  list" :key="index">

          <a :href="image.url" title="image.title">
           
            <img v-lazy="image.picture" class="banner"  />

</a>
   
 
  </van-swipe-item>
</van-swipe>
      </div>

      <main  >

        <div v-for="(i,index) in clubs" :key="i.id">
        <div class="wrap flex" @click="to(i.id,i.club_logo)" v-if="index%2==0?true:false"> 
          <div class="warp-img"><img :src="i.club_logo" alt=""></div>
          <div class="flex  clubs"><span>{{i.club_name}}</span></div>
          </div>
             <div class="wrap flex" @click="to(i.id,i.club_logo)" v-if="index%2==0?false:true">
       
          <div class="flex  clubs" ><span>{{i.club_name}}</span></div>
             <div class="warp-img"><img :src="i.club_logo" alt=""></div>
           </div>
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
      banner:[{img:require('@images/banner.jpg')},{img:require('@images/banner2.jpg')}
      
      ],
      name:'李海龙',
       named:'李海龙',
       payed:false,
    show: false,
     checked: true,
    clubs:[],
      
      value: "",
      list:[]
    };
  },
  created(){
     this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/slides').then((res)=>{
      //  console.log(res)
       this.list=res.data.data.slides
          // console.log( this.list)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })
     this.$axios.get('https://gfjapitest.yeyinfs.com/api/gongfuji/clubs').then((res)=>{
      //  console.log(res)
       this.clubs=res.data.data.clubs
          // console.log( this.clubs)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })

  // console.log(uploadFile(123))
  },
  methods: {


    to(e,img){
     
        // console.log(e)
         this.$router.push({ path: 'detail', query: { club: e }})
     return;
      switch (e) {
        case 'a':
          // this.$router.push({ name: 'detail', params: { userId: '123' }})
          this.$router.push({ path: 'detail', query: { club: e }})
          //  this.$router.push( {path: 'detail', query: {id: 'a'}})
          //  this.$router.push({ path: 'register', query: { plan: 'private' }})
          break;
       case 'b':
           this.$router.push({ path: 'detail', query: { club: e }})
          break;
            case 'c':
           this.$router.push({ path: 'detail', query: { club: e }})
          break;
            case 'd':
           this.$router.push({ path: 'detail', query: { club: e }})
          break;
            case 'e':
           this.$router.push({ path: 'detail', query: { club: e }})
          break;
        default:
          break;
      }
    },
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
  }
};
</script>
<style lang="less" scoped>
.warp-big img{
   height: 100%;
    width: 195px;
}
.wrap{
  height: 175px;
  border:1px #e7e6e6 solid;
  width: 615px;background: #f3f3f3;
  padding:2px;
  justify-content: flex-start;
  overflow: hidden;
  margin-bottom: 60px;
  .warp-img img{
    height: 100%;
    width: 175px;
  }
  .clubs{
    display: flex;
    height: 100%;
    width: 440px;
    justify-content: center!important;
    
    span{
       align-self: center;
       font-weight: 500;
    }
  }
}
.banner{
  height: 100%;
  width: 100%;;
}
.message{
 display: flex!important;
 justify-content: center;
 align-items: center;

}
.div{
  width: 28px;
  height: 5px;
  background: #fff;
}
.left{
  margin-right:25px;
}
.right{
  margin-left:25px;
}
.message{
  font-size: 50px;
  color: #fff;
  font-weight: 700;
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
  margin-top: 0px;
  width: 100%;
  background: url("../../assets/images/club/club-bg.png") center;
  background-size: 100%  100%;
  // background-size: cover;
  height: 100%;
  min-height: 2166px;
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
    padding:60px 7px 0;
    margin-top:12px;
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
    margin-top: 160px;
    margin-bottom: 53px;
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

