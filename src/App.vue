<template>
  <div id="app">
   
    <Header msg="Welcome to Your Vue.js App"></Header>
    <!-- <router-view  /> -->
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>
<script>
import Header from './components/Header'
import '@/assets/styles/index.less'

export default {
create(){
  console.log(this)
}
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
 
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
body{
  background: #b79f33;
  font-size: 25px;

}

</style>
