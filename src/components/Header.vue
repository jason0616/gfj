<template>
  <header class="header">

    <!-- <van-icon class="arrow" name="arrow" />
    <i class="el-icon-arrow-left icon-color" @click="back"> <span>{{this.$route.query.goindex?'首页':'返回'}}</span></i> -->

     <span class="flex">    
      <van-icon class="arrow  icon-color" name="arrow-left" @click="back" />
      <span>{{this.$route.query.goindex?'首页':'返回'}}</span>
      </span>
    <span class="span-mid">   {{msg}}</span>
    <span>中国功夫技</span>
  </header>
</template>

<script>
// import { Icon } from 'element-ui'
export default {
props: {
    msg: String
  },
  methods: {
    back(){
        if (this.$route.query.goindex === 'true') {
  this.$router.push('/')
} else {
  this.$router.back(-1)
}

    }
    
  },
}
</script>

<style lang="less" scoped>
.header{
  position: fixed;
  top:0;
  right:0;
  left:0;
  font-size: 25px;
  z-index: 999999999;
  .span-mid{margin-left: 70px;}
  .icon-color{color:white;font-size:32px;display: block;
  span{
    font-size: 25px;line-height: 25px;
  }
  }
  height: 65px;
  background: #000000;
  width: 100%;
  color:white;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;  
}
</style>
