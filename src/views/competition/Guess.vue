<template>
  <div class="home">
  
   <Header msg="竞猜有奖"></Header>
  <div class="page">
    <div class="img-mid">
      <img src="@images/logo.png" class="img-top">
      <span class="span">竞猜获丰厚奖品</span>
      <!-- <span class="war">系列赛事揭幕战</span> -->
      <div class="bg">
        <span class="marginLeft">将于2019年5月4日</span>
        <span>广州体育学院体育馆</span>
      </div>
    </div>

    <div class="bgImg">
      <div style="color:red;font-size:20px" @click="clear">{{code}}</div>

       <!--<div style="color:red;font-size:12px;flex;height:80px;" >{{this.$store.state.token||22}}</div>
      <div style="color:red;font-size:12px">{{token||1}}</div>
      <div style="color:red;font-size:12px" clas="flex">{{err||2}}</div>
      <div style="color:red;font-size:12px" clas="flex">{{ee||3}}</div>
      <div style="color:red;font-size:12px" clas="flex">{{cc||4}}</div>-->
        <div style="color:red;font-size:12px">{{token5}}</div> 
      <div class="hidden"></div>

      <main>
        <div class="top flex">
          <div class="div2"></div>
          <div class="div-message flex">
            <span class="message">竞猜有奖</span>
          </div>
          <div class="div"></div>
        </div>

        <p class="flex p1">竞猜环节，请投票你心仪的选手，选手胜出</p>
        <p class="flex p2">你将会获得丰厚的礼品</p>
        <div class="tips flex">备注：请在比赛开幕前完成此操作</div>
        <article>
          <img src="@images/guess.png" class="guess">

          <div class="all" v-for="i in data" :key="i.rightName">
            <div v-if="i.is_lottery" class="mask flex">
              <div class="list flex" @click="relist(i.id)">
                中奖名单
                <!-- <i class="el-icon-arrow-right ii"></i> -->
                <van-icon class="arrow ii ml-12" name="arrow" />
              </div>
            </div>
            <div v-if="i.victory_team_id" class="position">
              <img
                src="@images/win.png"
                :class="i.victory_team_id==i.blue_team_id?'winRight':'winLeft'"
                class="winner"
              >
            </div>

            <div class="contain flex">
              <div class="left">
                <img :src="i.blue_team_photo" alt>
              </div>
              <div class="box">
                <div class="box-top flex">{{i.match_name}}</div>
                <div class="flex box-2">
                  <div class="blue"></div>
                  {{i.match_level.replace('kg','KG')}} &nbsp; {{i.blue_team_sex%2==0?'女子':''}}散打功夫技赛
                  <div class="red"></div>
                </div>
                <div class="btn-box flex">
                  <div class="btn-left flex-column f20">
                    <span>{{i.blue_team_club}}</span>
                    <span>{{i.blue_team_name}}</span>
                    <span>{{i.blue_team_age}}/{{i.blue_team_height}}cm</span>
                  </div>

                  <div class="btn-mid">VS</div>
                  <div class="btn-right flex-start f20">
                    <span>{{i.red_team_club}}</span>
                    <span>{{i.red_team_name}}</span>
                    <span>{{i.red_team_age}}/{{i.red_team_height}}cm</span>
                  </div>
                </div>
                <div class="line"></div>
              </div>

              <div class="right">
                <img :src="i.red_team_photo" alt>
              </div>
            </div>
            <div class="btn flex" v-if="vote">
              <div class="de button flex" @click="voted(i.id,i.blue_team_id)">
                点击投票
                <!-- <i class="el-icon-arrow-right ii"></i> -->
                  <van-icon class="arrow ii ml-12" name="arrow" />
              </div>
              <div class="vo button flex" @click="voted(i.id,i.red_team_id)">
                点击投票
                <!-- <i class="el-icon-arrow-right ii"></i> -->
                  <van-icon class="arrow ii ml-12" name="arrow" />
              </div>
            </div>

            <div class="btn flex" v-if="!vote">
              <div class="de button flex" :class="i.winner?'hide':''">
                <!-- <i class="el-icon-arrow-left iii"></i> 
                 -->
                   <van-icon class="arrow ii ml-12" name="arrow" />
                已投
                <!-- <i class="el-icon-arrow-right ii"></i>
                  <van-icon class="arrow ii ml-12" name="arrow" /> -->
              </div>
              <div class="vo button flex" :class="!i.winner?'hide':''">
                <!-- <i class="el-icon-arrow-left iii"></i> -->
                  <van-icon class="arrow ii ml-12" name="arrow" />
                已投
                <!-- <i class="el-icon-arrow-right ii"></i> -->
                  <van-icon class="arrow ii ml-12" name="arrow" />
              </div>
            </div>
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
  name: "guess",
   activated: function () {
  this.$setgoindex()
},
  components:{
Header

  },
    data() {
    return {
      token5:'',
      vote: true,
      left: false,
      which: this.left ? "winLeft" : "winRight",
      show: false,
      win: false,
      token: "",
      code: "",
      ee: localStorage.getItem("token"),
      cc: "",
      data: [],
      test: "",
      err: "",
      uu: encodeURIComponent("https://gfjwxtest.yeyinfs.com/guess"),
      list: [
        {
          war: "第一战",
          kg: "65KG 散打功夫技赛",
          leftClub: "深圳查普曼华武决格斗队",
          leftName: "王靖源",
          leftAge: "22岁/177CM",
          rightClub: "广州K9搏击俱乐部",
          rightName: "付键宇",
          rightAge: "20岁/178CM",
          winner: 1
        },
        {
          war: "第二战",
          kg: "65KG 散打功夫技赛",
          leftClub: "深圳查普曼华武决格斗队",
          leftName: "刘茂林",
          leftAge: "19岁/172CM",
          rightClub: "奥搏汇格斗健身训练中心",
          rightName: "刘嘉威",
          rightAge: "23岁/170CM",
          winner: 0
        },
        {
          war: "第三战",
          kg: "65KG 散打功夫技赛",
          leftClub: "广州K9搏击俱乐部",
          leftName: "张彤",
          leftAge: "21岁/179CM",
          rightClub: "深圳查普曼华武决格斗队",
          rightName: "宇硕",
          rightAge: "17岁/177CM",
          winner: 1
        },
        {
          war: "第四战",
          kg: "60KG 散打功夫技赛",
          leftClub: "广州龙翔搏击",
          leftName: "赵浪瑰",
          leftAge: "20岁/177CM",
          rightClub: "广州体育学院",
          rightName: "高腾毅",
          rightAge: "21岁/175CM",
          winner: 1
        },
        {
          war: "第五战",
          kg: "52KG 女子散打功夫技赛",
          leftClub: "广州体育学院",
          leftName: "曹明娟",
          leftAge: "21岁/160CM",
          rightClub: "广州龙翔搏击",
          rightName: "杨玲凤",
          rightAge: "22岁/157CM",
          winner: 1
        },
        {
          war: "第六战",
          kg: "70KG 散打功夫技赛",
          leftClub: "广州K9搏击俱乐部",
          leftName: "邱智健",
          leftAge: "19岁/174CM",
          rightClub: "佛山温拿拳馆",
          rightName: "常宇航",
          rightAge: "18岁/176CM",
          winner: 1
        },
        {
          war: "第七战",
          kg: "56KG 散打功夫技赛",
          leftClub: "广州体育学院",
          leftName: "莫康林",
          leftAge: "19岁/174CM",
          rightClub: "佛山温拿拳馆",
          rightName: "张中智",
          rightAge: "18岁/176CM",
          winner: 1
        },
        {
          war: "第八战",
          kg: "70KG 散打功夫技赛",
          leftClub: "巴西",
          leftName: "迪亚哥 奥利维拉",
          leftAge: "30岁/180CM",
          rightClub: "广州K9搏击俱乐部",
          rightName: "杨俊凯",
          rightAge: "20岁/178CM",
          winner: 1
        },
        {
          war: "第九战",
          kg: "85KG 散打功夫技赛",
          leftClub: "广州体育学院",
          leftName: "迪丁力",
          leftAge: "25岁/182CM",
          rightClub: "奥搏汇格斗健身训练中心",
          rightName: "陈少友",
          rightAge: "22岁/183  CM",
          winner: 1
        }
      ]
    };
  },
  methods: {
    clear(){
        localStorage.clear()
    },
    relist(id) {
      this.$router.push({ path: "reword", query: { club: id } });
    },
    voted(index, i) {
      this.cc=localStorage.getItem('token')
      console.log(i);
      // this.$store.commit("getCode", 1);
      if (localStorage.getItem('token')) {
        this.$axios
          .post("https://gfjapitest.yeyinfs.com/api/gongfuji/vote", {
            token: localStorage.getItem('token'),
            id: index,
            vote_team_id: i
          })
          .then(res => {
            // console.log(this.list)
            // location.reload();
          })
          .catch(err => {
            console.log(err);
            console.log(2);
          });
      } else {
        this.getCode();
      }
    },
    getList(index = 0) {
      let that=this
      if (index) {
        this.$axios
          .post("http://gfjapitest.yeyinfs.com/api/gongfuji/duels", {
            token: localStorage.getItem("token")
          })
          .then(res => {
            //  console.log(res)
            if( this.data==1){
              localStorage.clear()
              that.getCode()
            }
            this.data = res.data.data.duels;
            console.log(this.data);
          })
          .catch(err => {
            console.log(err);
            console.log(2);
          });
      } else {
        this.$axios
          .post("http://gfjapitest.yeyinfs.com/api/gongfuji/duels")
          .then(res => {
            //  console.log(res)
            this.data = res.data.data.duels;
            console.log(this.data);
          })
          .catch(err => {
            console.log(err);
            console.log(2);
          });
      }
    },
    haved() {
      if (localStorage.getItem("token")) {
        this.getList(1);
      } else {
        this.getList(0);
      }
    },

    getCode() {
      // this.$axios.post('https://gfjapitest.yeyinfs.com/api/gongfuji/clubDetails',{id:ids})

      this.$axios
        .post("https://gfjapitest.yeyinfs.com/api/wechat/getCode")
        .then(res => {
          if (res.data.code != undefined) {
            let code = res.data;
            console.log(res);

          } else {
            this.test = res;
            console.log(res);
          }

          // console.log(this.list)
        })
        .catch(err => {
          this.err = err;
          console.log(err);
          console.log(2);
        });

    },
    codes() {
      let url = decodeURIComponent(window.location.search)
      console.log()
      var urlParams = new URLSearchParams(url);
      this.$store.commit("getCode", urlParams.get("code"))
      if (urlParams.has("code")) {
        this.code = urlParams.get("code");
        let that =this
        if(urlParams.get("code")){
$.ajax(
                {
                  url: "https://gfjapitest.yeyinfs.com/api/token/getToken",
                  data: { code: that.$store.state.code },
                  dataType: "JSON",
                  cache: false,
                  type: "POST",
                  success: function(res) {

                    that.token5 = res.data.token;
                     localStorage.setItem('token',that.token5)
                     this.$store.commit("getToken", that.token5)
                    // console.log(res);
                  },
                  error: function(e) {
                    console.log(e);
                    that.err = e;
                  }
                },
                300
              );

        }
           
      }
    }
  },
  mounted() {
    // this.getCode();
    this.haved();
    this.codes();
    
    //  this.getCode()

    // this.getList()
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      console.log(vm)
    })
  },
  created() {

  }
};
</script>
<style lang="less" scoped>

.home{
  overflow: hidden;
}
.hide {
  visibility: hidden;
}
.position {
  position: absolute;
  left: 50px;
}
.winLeft {
  left: 50px;
  top: 30px;
}
.winright {
  left: 60%;
  top: 30px;
}
.winner {
  position: absolute;
  width: 233px;
  height: 184px;
}
.list {
  border: 3px solid #fff;
  border-radius: 25px;
  height: 50px;
  width: 257px;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
}
.mask {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  height: 240px;
  width: 720px;
}
.ii {
  margin-left: 20px;
  font-weight: 700;

  font-size: 30px;
}
.iii {
  font-size: 30px;
  font-weight: 700;
  margin-right: 20px;
}
.btn {
  margin-top: 20px;
  padding: 0 35px;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 500px;
  .de {
    background: #0068b7;
  }
  .vo {
    background: #f00;
  }
  .button {
    color: #fff;
    height: 45px;
    width: 260px;
    border-radius: 45px;
  }
}
.line {
  width: 100%;
  height: 4px;
  background: #91918d;
  margin-top: 8px;
}
.btn-mid {
  font-size: 26px;
  font-weight: 800;
  color: #fff;
}
.contain {
  min-width: 478px;
}
.flex-column {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;
}

.f20 {
  font-size: 16px;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
}

.btn-mid {
  margin: 0 24px;
}
.left {
  margin-left: 0.13px;
  margin-top: 50px;
}
.right {
  margin-top: 50px;
}
.left img,
.right img {
  height: 107px;
  width: 108px;
}
.all {
  height: 190px;
  width: 100%;
  margin-bottom: 90px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .box-2 {
    color: #fff;
    font-size: 15px;
    height: 25px;
    width: 472px;
    background: #51514a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blue {
      background: #0068b7;
      height: 25px;
      width: 33px;
    }

    .red {
      background: #f00;
      height: 25px;
      width: 33px;
    }
  }
  .box-top {
    // padding:3px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 153px;
    height: 25px;
    background: #74726c;
    color: #f00;
    font-weight: 500;
    font-size: 18px;
  }
}
.guess {
  height: 122px;
  width: 647px;
  opacity: 0.99;
  margin: 25px 0 50px;
}
.tips {
  height: 38px;
  // width: 350px;
  padding: 8 27px;
  background: #b79f33;
  margin-top: 32px;
  color: #7b1719;
}
.bg {
  span {
    font-size: 23px;
    font-weight: 300;
  }
}

.war {
  font-size: 47px;
  color: #fff;
  font-weight: 300;
}
.white {
  max-height: 20px;
  width: 100%;

  background: #fff;
  overflow: hidden;
}
.p1 {
  margin-bottom: 11px;
}
.p1,
.p2 {
  color: #ddd;
  font-weight: 400;
  font-size: 25px;
  display: block;
      height: 46px
}
.message {
  // margin:0 20px;
  display: block;
  height: 40px;
  font-weight: 400;
  font-size: 25px;
  width: 100px;
  line-height: 48px;
}

.div-message {
  border-bottom: 7px solid #7b1719;
}
.page {
  background: #b79f33;
  margin-top: 60px;

  margin-top: 20px;
  width: 100%;
  background: url("../../assets/images/competition/guessBg.png") center;
  background-size: 100% auto;
  background-size: cover;
  // height: 100%;
  height: 3630px;
}
.bgImg {
  .hidden {
    height: 110px;
  }
  // padding: 0 60px;
  width: 100%;
  height: 900px;
  //  background:url("../assets/images/yeyin.png") ;
  background-size: 100% 900px;
  margin-top: -110px;
  // overflow: hidden;
  main {
    margin-top: -30px;
    color: #333333;
    padding: 0 10px;
    article {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      margin-top: 56px;
      width: 100%;
      padding: 0 5px;
      background: url("../../assets/images/competition/guess.png") no-repeat right center;
      // background-size: 100% auto;
      background-size: cover;
      min-height: 2715px;
      overflow: hidden;
    }
    .top {
      padding-right: 25px;
      display: flex;
      margin: 138px 0 40px;
      justify-content: center;
      color: #fff;
      font-weight: 300;
      align-items: center;
      color: #ddd;
      .div {
        height: 3px;
        width: 225px;
        margin-left: 20px;
        background: #ebebeb;
      }
      .div2 {
        height: 3px;
        width: 225px;
        margin-right: 20px;
        background: #ebebeb;
      }
    }

    padding-top: 23px;
    flex-direction: column;
    display: flex;
    align-items: center;

    width: 100%;
    height: 853px;
  }
}
.margin-left {
  margin-left: 8px;
}
.img-mid {
  .bg {
    padding: 15px 28px;
    background: #7b1719;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    margin-top: 26px;

    .marginLeft {
      margin-right: 20px;
    }
    span {
      font-weight: 500;
      font-size: 25px;
      color: white !important;
    }
  }
  .span {
    font-weight: bold;
    font-size: 78px;
    color: white !important;
    margin-top: -20px;
  }
  .img-top {
    width: 300px;
    height: 188px;
    margin-top: 98px;
    margin-bottom: 15px;
  }
  width: 100%;
  height: 479px;
  // background: url("../assets/images/2-1.png") center center;
  background-size: 100% 529px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

