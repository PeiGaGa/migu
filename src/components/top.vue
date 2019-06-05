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
      <!-- <v-touch tag="a" v-on: tap = "onTap = !onTap" id="list"></v-touch> -->
      <a href="#" id="list" v-on:click="onTap=!onTap"></a>
    </div>
    <div id="pox">
       <ul id="nav">
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
      </ul>
    </div>
    <transition name="fade">
      <div id="hdn" v-if="onTap">
        <ul>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
          <li><a href="#">哈哈中心<span>>></span></a></li>
        </ul>
        <div>
          <a href="#" id="ys">登入</a>
          <a href="#" id="ys">注册</a>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: "top", //组件名字
  data(){
    return{
      onTap:false,
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
}
#nav li a{
  color: #fff;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
#hdn{
  background: #1c1c1c;
  position: absolute;
  z-index: 10;
  top: 1rem;
  width: 100%;
  height: 20rem;
}
#hdn ul{
  width: 5.83rem;
  margin: .83rem auto 0;
}
#hdn ul li{
  border-bottom: 5px solid #313131;
}
#hdn ul li:last-child{
  border-bottom: 5px solid #bebebe;
}
#hdn  ul a{
  display: flex;
  justify-content:space-between;
  font-size: .4rem;
  color: #fff;
  line-height: .89rem;
}
#hdn div{
  text-align: center;margin-top: .83rem;
}
#ys{
  display: inline-block;
  font-size: .31rem;
  color: #fff;
  width: 2.76rem;
  height: .78rem;
  line-height: .78rem;
  border: 3px solid #7f7f7f;
  margin: 0 .1rem;
}

</style>