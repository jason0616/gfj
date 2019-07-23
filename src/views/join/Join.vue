<template>
  <div class="home">
  
   <Header msg="填写资料"></Header>
  <div class="page">
    <div class="none"></div>
    <div class="img-mid">
      <img src="@/assets/images/logo.png" class="img-top">
    </div>
    <div class="bgImg">
      <div class="hidden"></div>

      <main>
        <div class="top">
          <div class="div"></div>
          <div class="div-message">
            <span class="message">个人信息</span>
          </div>
          <div class="div"></div>
        </div>
        <article :class="imgUpload?'showImg':''" >
        
          <div class="area flex">
            <span>参赛地区：</span>
             <select name="public-choice" v-model="area" class="area-search" @change="arear">
                <option
                  :value="coupon.id"
                  v-for="coupon in arealist"
                  :key="coupon.id"
                >{{coupon.name}}</option>
              </select>
          </div>

          <div class="box">
            <div class="flex box-content">
              <span>姓名：</span>
              <input class="input" v-model="name">
            </div>
            <div class="flex box-content">
              <span>绰号：</span>
              <input class="input" v-model="nickname">
            </div>
          </div>
            <div class="box">
              <div class="flex box-content">
              <span>年龄：</span>
              <input class="input" v-model="age">
            </div>
            <div class="flex box-content">
              <span>身高：</span>
              <input class="input" v-model="tall">
            </div>
        
          </div>

          <div class="box">
            <div class="flex box-content club-box">
              <span>俱乐部： </span>
              <input placeholder="(若无填个人)" class="input club" v-model="club">
            </div>
       
          </div>

          <div class="box">
             <div class="flex box-content">
              <span>体重：</span>
              <input class="input" v-model="weight">
            </div>
            <div class="flex box-content">
              <span>参赛级别：</span>
             <select name="public-choice" v-model="level" class="select" @change="leveler">
                <option
                  :value="coupon.id"
                  v-for="coupon in levellist"
                  :key="coupon.id"
                >{{coupon.name}}</option>
              </select>
            </div>
          </div>
          <div class="box">
      
            <div class="flex box-content">
              <span>性别：</span>
              <select name="public-choice" v-model="sex" class="select" @change="gender">
                <option
                  :value="coupon.id"
                  v-for="coupon in couponList"
                  :key="coupon.id"
                >{{coupon.name}}</option>
              </select>
            </div>
            <div class="flex box-content">
              <span>服装尺寸：</span>
                <select name="public-choice" v-model="size" class="select" @change="sizer">
                <option
                  :value="coupon.id"
                  v-for="coupon in sizelist"
                  :key="coupon.id"
                >{{coupon.name}}</option>
              </select>
            </div>
          </div>

        

          <div class="box">
            <div class="flex box-content">
              <span>有无病史：</span>
            <select name="public-choice" v-model="sick" class="select" @change="sicker">
                <option
                  :value="coupon.id"
                  v-for="coupon in sicklist"
                  :key="coupon.id"
                >{{coupon.name}}</option>
              </select>
            </div>
            
          </div>
          <div class="area flex" style="margin-left:4.5px">
            <span>人物照片：</span>


            <div class="dv">
     
               <form enctype="multipart/form-data" method="post">
                <input type="file" multiple="true" id="img" class=" upload-demo btn"  @change="upload" accept="image/*">
				        <button class="btn" :class="ok?'ok':''">
                  <!-- <i class=" i" :class="ok?'el-icon-check success':'el-icon-plus'"></i> -->
                    <van-icon  class=" i" name="plus" v-if="!ok" />
                   <van-icon  class=" i"  name="success" v-if="ok" />
                </button>
          
                <div slot="tip" class="el-upload__tip flex titps">（要求无上衣短裤展示,动作可选：抱胸,叉腰,抱拳等）</div>
                   <img :src="imgSrc" class="uploadImg" alt="功夫技报名照片" v-show="imgUpload">
				     </form>
                

            </div>
          </div>


        </article>
        <div class="checkout flex">
          <van-checkbox v-model="checked">
           <div class="position" @click="toRule">   </div>
            赛事选手规则阅读页面
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            >
          </van-checkbox>
          <!-- <el-checkbox v-model="checked">赛事选手规则阅读页面</el-checkbox> -->
          <!-- <van-checkbox v-model="checked" checked-color="#7b1719">赛事选手规则阅读页面</van-checkbox> -->
        </div>
        <div class="joinus flex" @click="join">
         
          <span> 现在就加入</span>
          <!-- <i class="el-icon-plus ii"></i> -->

          <van-icon class="arrow ii ml-12" name="plus" />
        </div>

      </main>
       <van-popup v-model="alert"><div class="alert flex">请填写全部内容!</div></van-popup>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
// import Joinus from "@/components/Joinus.vue";

export default {
  name: "join",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
   data() {
    return {
      imgUpload:false,
      ok:false,
      alert:false,
      nickname:'',
      club:'',
      imgSrc:'',
      name:'',
     qiniuData: {
        key: "",
        token: ""
      },
     
      imageUrl: "",
      Global: {
        dataUrl: 'http://yoursite.com'
      },
      area:'',
      arealist:[
        {
          id: "0",
          name: "广州"
        },
       {
          id: "1",
          name: "深圳"
        },
      ],
      sizelist:[
        {
          id: "0",
          name: "L"
        },
       {
          id: "1",
          name: "XL"
        },
        {
          id: "2",
          name: "XXL"
        },
        {
          id: "3",
          name: "XXXL"
        },
      ],
      size:'',
      sick:'',
      sicklist:[
{
          id: "0",
          name: "无"
        },
        {
          id: "1",
          name: "有"
      }
      ],
      levellist:[{
          id: "0",
          name: "青鹰"
        },
        {
          id: "1",
          name: "银鹰"
      },
      {
          id: "2",
          name: "金鹰"
      },
      {
          id: "3",
          name: "青虎"
      },
      {
          id: "4",
          name: "银虎"
      },
      {
          id: "5",
          name: "金虎"
      }
      ,
      {
          id: "6",
          name: "青龙"
      },
      {
          id: "7",
          name: "银龙"
      },
      {
          id: "8",
          name: "金龙"
      }
      ],
      level:'',
        age:'',
        tall:'',
        weight:'',
      show: false,
      checked: true,
  
      icon: {
        normal: require("@images/person/check.png"),
        active: require("@images/person/checked.png")
      },
   
      couponList: [
        {
          id: "0",
          name: "男"
        },
        {
          id: "1",
          name: "女"
        }
      ],
  
      sex: "",
      value: ""
    };
  },

  
  methods: {
    upload(e){
        console.log(e.target.files[0])
        const file=e.target.files[0]
        if(file){
            this.ok=true;
            const src=URL.createObjectURL(file)
            this.imgSrc=src;
            this.imgUpload=true;
        }
    },
     join() {
       this.$axios.get('wxapi/addorder?tk=40e0d896bcc786411bd5cb5ed20abf0ed5840b6a')
       .then(res=>{
         console.log(res)
       })
       return;
      var img=document.getElementById('img')
      var formData = new FormData()
      var file=img.files[0]
      if(file){
     formData.append('img',file,file.name)
  
      }
        const isOk=formData.get('img')
        if(!isOk){
          this.alert=true
          return ;
        }
        //参数地区
        console.log(this.arealist[this.area].name )
       //名字
        console.log(this.name )
        //绰号
        console.log(this.nickname )
        //年龄
        console.log(this.age )
        //身高
         console.log(this.tall )
       //俱乐部
         console.log(this.club )
        
           //性别
         console.log(this.couponList[this.sex] )
     //体重
         console.log(this.weight )
         //参数级别
         console.log(this.levellist[this.level] )
         //服装尺寸
         console.log(this.sizelist[this.size] )
        //有无病史
         console.log(this.sicklist[this.sick] )
      this.$router.push("/my");
      return;
 this.$axios.post('/api/gongfuji/slides',{weight:this.weight}).then((res)=>{
       console.log(res)
          console.log(1)
    }).catch((err)=>{
      console.log(err)
         console.log(2)
    })





    },
    toRule(){
     this.$router.push("/rule")
    },
    arear(){

    },
    sizer(){

    },
    sicker(){

    },
    leveler(){},
    weighter(){}
    ,
    taller(){
      // console.log(this.tall);
    },
    ages() {
      //获取选中的优惠券
      // console.log(this.age);
    },
    gender() {
      //获取选中的优惠券
      // console.log(this.couponSelected);
    },
   
    click() {
      this.show = true;
    },
    onChange(picker, value, index) {
      //Toast(`当前值：${value}, 当前索引：${index}`);
    },
    change(r) {
      const value = this.options[r].label;
      // console.log(s);
    }
 
  
  },
   mounted(){
   
  },
    created() {
  //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现

  // this.$axios.get('https://gfjtest.yeyinfs.com/wxauth?code=001iGitN0d33Oa2yEWuN0GjqtN0iGitC&state=')
  // .then(res=>{
  //   console.log(res)
  // })
  },
};
</script>
<style lang='less' scoped>
@import './Join.less';
</style>
