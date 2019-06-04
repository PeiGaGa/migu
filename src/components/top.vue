<template>
  <div id="main">
    <div id="top">
      <div id="logo">
        <a href="#">
          <router-link tag="img" to="./index" src="http://www.migu.cn/assets/h5/image/index-111401/logo.png"></router-link>
        </a>
      </div>
      <a id="search">
        <span id="search-text">这！就是原创</span>
        <span id="serach-btn">搜索</span>
      </a>
      <router-link tag="a" href id="icon" to="./download">APP下载</router-link>
      <a href id="list"></a>
    </div>
    <div id="pox">
       <ul id="nav">
          <router-link tag="li" :to=item.path v-for="(item,index) in navs" :key="index">{{item.name}}</router-link>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "top",
  data(){
    return {
          navs:[
            {
              path:'/music',
              name:'音乐'
            },
            {
              path:'/mp4',
              name:'视频'
            },
            {
              path:'/read',
              name:'阅读'
            },
            {
              path:'/game',
              name:'游戏'
            },
            {
              path:'/copplay',
              name:'次元'
            },
            {
              path:'/run',
              name:'运动'
            },
          ]
    }
  }
};
</script>


<style scoped>
#main {
  width: 100%;height: 1.88rem;
  background: #1c1c1c;position: relative;
  position:fixed;
  top: 0;
  z-index: 10;
}
#top {
  width: 100%;
  display: flex;
  align-content: center;
}
#logo{
  height: .66rem;
}
#logo img{
    display: block;
    margin: .21rem 0 0 .21rem;  
}
#search{
    display: block;float: right;
    width: 3.2rem;height: .63rem;
    margin: .21rem .26rem 0 .2rem;
    position: relative;
    background: #2e2e2e;
    border-radius: .2rem;line-height: .63rem;
}
#search-text{
   display: inline-block;width: 2rem; margin-left: .2rem;
}
#serach-btn{
  display: inline-block;width: .6rem;color: #c3c3c3;
}
#icon {
    width: 1.4rem;height: .63rem;color: aliceblue;margin-top: .2rem;
    line-height: .6rem;text-align: center;border: 2px solid aliceblue;
    border-radius: 45%;font-size: .3rem;
}
#list {
    float: right;background: red;
    width: .85rem;height: .63rem;
     margin: .21rem .26rem 0 .2rem;
}

#pox{
  position:absolute;
  bottom: 0;
  padding-left: .1rem; 
  line-height: .83rem;
  background-color: #353535;
  height: .83rem;
  width: 100%;
}
#nav{
  overflow: auto;
  display: flex;
   white-space: nowrap;
}
#nav li{
  float: left;font-size: .35rem;
  margin: 0 .25rem;
  color: #fff;
}

</style>