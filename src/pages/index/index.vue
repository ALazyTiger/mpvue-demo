<template>
  <div class="container">
    <section>
      <div class="main">
        <div class="userinfo" @click="bindViewTap">
          <div class="info">
            <div class="avatar"><img src="../../../static/images/logo.png"></div>
            <div class="userinfo-nickname">{{userInfo.nickName}}</div>
          </div>
        </div>
      </div>
      <div class="page-search" :class="{ active: isActive }">
        <header>
          <input type="text" v-model="searchVal" class="search_input" placeholder="搜索音乐 、歌手" maxlength="16">
        </header>
        <div class="search-list">
          <ul class="list-wrap">搜索结果</ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <a href="/pages/logs/logs" class="home">去往首页</a>
      <div class="foo">
        <div class="foo-left">
          <div class="song-pic">
            <img src="../../../static/images/avatar.jpg">
          </div>
          <div class="song-info">
            <p class="song-name">肆无忌惮</p>
            <p class="singer">薛之谦</p>
          </div>
        </div>
        <div class="foo-right">
          <div class="player-btn">
            <div class="circle">
              <div class="circle-left">
                <div class="clip-left"></div>
              </div>
              <div class="circle-right">
                <div class="clip-right"></div>
              </div>
              <div class="mask-white">
                <i class="btn"></i>
              </div>
            </div>
          </div>
          <div class="songlist-btn">
            <i class="list-icon"></i>
          </div>
        </div>
      </div>
      <audio :src="song.src" id="myAudio" :loop="loop" ></audio>
    </footer>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data() {
      return {
        logoUrl: '',
        avatarUrl: '',
        searchVal: "",
        motto: 'welcome',
        isActive: false,
        userInfo: {},
        loop:false,
        song:{
          img:'',
          src:"",
       },
        address: {}
      }
    },
  
    components: {
      card
    },
  
    methods: {
  
      bindViewTap() {
          this.isActive = true;
          var params ={
            page:1,
            pageSize:15
          }
          this.$http.policy(params).then(function (res) {
            console.log(res)
          })
        // const url = '../counter/counter'
  
        // wx.navigateTo({
        //   url
        // })
        
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      checkTeamUserInfo(){
     
          this.$http.get("/test",{xx:6}).then((d)=>{ //post方法将这里的get改修post即可
            //输出请求数据
            console.log(d.data)
            //输出响应头
            console.log(d.header)
          }).catch(err=>{
            console.log(err.status,err.message)
          })

      },
      getAddress() {
        wx.getLocation({
          type: 'wgs84',
          success: (res) => {
            this.address = res;
            console.log(this.address)
          }
        })
  
      },
      clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev)
      },
      search() {
        this.isActive = true;
      },
  
    },
    computed: {
  
    },
    created() {
      
      const myaudio = wx.createInnerAudioContext();
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
      this.checkTeamUserInfo()
    }
  }
</script>

<style scoped>
  .container {}
  
  .container section {
    width: 100%;
    height: calc(100vh - 57px);
  }
  
  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .userinfo {
    width: 85%;
    height: 66%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .userinfo .info {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .avatar img {
    width: 300px;
    height: 320px;
  }
  
  .userinfo-nickname {
    color: #aaa;
    margin-top: 10px;
  }
  
  .usermotto {
    margin-top: 50px;
  }
  
  .page-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #EFEFF4;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
  }
  
  .active {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  
  .page-search header {
    padding: 0 5px;
  }
  
  .search_input {
    padding: 5px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .container .footer {
    position: relative;
    width: 100%;
    height: 57px;
    z-index: 3;
    border-top: 1px solid #dcdcdc;
    background: #fff;
  }
  
  .container .footer * {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #myAudio{
    position: absolute;
    left: 0;
    top: 0;
  }
  .container .footer .foo {
     height: 56px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }
  
  .container .footer .foo .foo-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  
  .container .footer .foo .foo-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  
  .container .footer .foo .foo-left .song-pic {
    width: 54px;
    height: 54px;
    padding: 0 4px;
    position: relative;
  }
  
  .container .footer .foo .foo-left .song-pic img {
    width: 50px;
    height: 50px;;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
    background-repeat: no-repeat;
  }
  
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
</style>
