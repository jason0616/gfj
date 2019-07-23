<template>
  <div class="home">
  
   <Header msg="个人信息"></Header>

    <div class="page">
    <div class="none"></div>
    <div class="img-mid">
      <img src="@/assets/images/logo.png" class="img-top">
    </div>
    <div class="bgImg">
      <div class="hidden"></div>

      <main >

       <div class="flex" style="margin-top:10px;"><div class=" circle"></div></div> 
        <div class="top ">
          <div class="div"></div>
          <div class="div-message">
            <span class="message">姓名:{{name}}</span>
            <span class="message">绰号:{{named}}</span>
          </div>
          <div class="div"></div>
        </div>

        <article>
     
          <div class="border box-1 flex"><span>参赛地区:广东</span> <span>俱乐部:个人</span></div>
          
          <div class="border box-2 flex mt">
          
            <div><p >性别:男</p><p class="mt-10">身高:180cm</p></div>
          <div style="margin-right:10px"><p >年龄:30</p><p class="mt-10">体重:80kg</p></div>
            </div>

            <div class="border box-2 flex mt">
          
            <div><p >参赛级别:金鹰</p><p class="mt-10">服装尺码:XXL</p></div>
          <div><p >有无病史:无</p></div>
            </div>
          <!-- <div class="flex">
            <div class="flex box-one">
              <span>俱乐部：</span>
              <input placeholder="个人/俱乐部" class="box-inp">
            </div>
           
          </div> -->
         
        </article>
         <div class=" update-btn mt flex "> 
         
           <van-icon class="update" name="edit"  />
          <span class="ml-12">修改信息</span>
         
           </div>
          <div class="joinus flex" @click="pay"> {{payed?'参赛名单':'立即支付'}} <van-icon class="arrow" name="arrow" /></div>
      </main>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";


export default {
  name: "my",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
    data() {
    return {
      name:'李海龙',
       named:'李海龙',
       payed:false,
    show: false,
     checked: true,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      icon: {
      normal: require('@images/person/check.png'),
      active: require('@images/person/checked.png')
    },
      options: [
        {
          value: "0",
          label: "黄金糕"
        },
        {
          value: "1",
          label: "双皮奶"
        },
        {
          value: "2",
          label: "蚵仔煎"
        },
        {
          value: "3",
          label: "龙须面"
        },
        {
          value: "4",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    pay(){
      if(this.payed){
        console.log('参数名单')
           this.$router.push('/list')
        
      }else{
          console.log('立即支付')
      // this.$router.push('/pay')
      window.location.href=`${window.location.origin}/pay/`
      }
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
  created(){
           this.$axios.get(`wxabaseauth`).then(res => {
        console.log(res);
    });
    // this.$axios.get('/api').then((res)=>{
    //    console.log(res)
    //       console.log(1)
    // }).catch((err)=>{
    //   console.log(err)
    //      console.log(2)
    // })
  }
};
</script>
<style lang="less" scoped>
@import './My.less';
</style>

