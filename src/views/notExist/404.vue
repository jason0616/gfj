<template>
<div>
  <Header msg="页面不存在"></Header>
  <div class="about">
    <h1>访问的页面不存在!</h1>
 

  </div>
     
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name:"notExist",
     activated: function () {
  this.$setgoindex()
},
  components:{
    Header
  },
  mounted(){
    document.body.style.background="#ddd"
  }
}
</script>
<style lang='less' scoped>
.about{
  height: 500px;
  width: 100%;
  display: flex;

  justify-content:center;
  align-items:center;
  margin-bottom: 100px;
}

</style>
