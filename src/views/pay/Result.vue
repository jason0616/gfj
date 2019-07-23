<template>
  <div class="home">
  
   <Header msg="我的报名"></Header>
    <main v-show="show" class="pages ">
<div class="box"> 
  <div class="box-content">
    <p class="strong">{{success?'- 祝贺报名成功 -':'- 此级别已满员 -'}}</p>
    <p class="mid">{{success?'- 谢谢你的热情参与  -':'- 期待你下次的参与 -'}}</p>
  </div>
  <div class="joinus" @click="tolist">
      
      {{success?'查看报名页':'返回首页'}}
      
      <van-icon class="arrow" name="arrow" />
    </div></div>
   <div class="close" @click="close"> <van-icon   name="cross" /></div>
  </main>
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
      show:true,

      success:!true,
    };
  },
  created() {
     app.style. background=`#7f7f7f`;
  },
  methods: {
    tolist() {
      if(this.success){
  this.$router.push("/list");
      }else{
          this.$router.push("/");
      }
    
    },
    close(){
      this.show=false
      setTimeout(() => {
        this.$router.push("/my");
      }, 1000);
    },
    click() {
      this.show = true;
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
<style lang='less' scoped>
.box{
  width: 515px;
  height: 625px;
  // background: #e0e0e0;
    background: #fff;
  border-radius: 20px;
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .box-content{
      background: #e0e0e0;
       width: 391px;
  height: 391px;
        border-radius: 20px;
          display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    .strong{
      color: #000;
      font-weight: 800;
    }
    .mid{
      margin-top: 18px;
         color: #000;
          font-weight: 300;
    }
    }
}

.close{
  height: 88px;
  width: 88px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 88px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700px;
  color: #000;
  margin-top:40px;
}
  .pages{
    background: #7f7f7f;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.joinus {

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 40px;
  margin-top:47px;
  background: #7b1719;
  border-radius: 50px;
  height:67px;
  width: 365px;
  text-align: center;
  line-height: 67px;
  font-size: 33px;
  color: #fff;
  font-weight: 500;
}
</style>
