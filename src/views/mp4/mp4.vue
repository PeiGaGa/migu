<template>
    
  <div>
    <div id="lbt">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in maxsrc" :key="index">
          <img :src="item.src">
        </van-swipe-item>
      </van-swipe>
      <div id="zhong">
           <div id="nav">
               <div id="text">
                   <h2>音乐</h2>
                   <span>更多</span>
               <a href="#"><img src="http://www.migu.cn:8080/12001/upload/graphicLink/20190529142556257490.jpg"></a>
               </div>
               <ul>
                   <li><a href="#">咪咕</a></li>
                   <li><a href="#">咪咕</a></li>
                   <li><a href="#">咪咕</a></li>
               </ul>
               <a>换一批</a>
           </div>
           <div id="content">
               <ul>
                   
                    <li v-for="(mp,index) in mp4List" :key="index"><a :href=mp.video.playUrl>
                       <img :src=mp.video.picUrl>
                       <h3>{{mp.video.name4Url}}</h3>
                       <p>{{mp.video.desc}}</p>
                    </a></li>
               </ul>
           </div>
        </div>
    </div>
    <div id="bottom">
            <div>增值业务许可证A2.B1.B2-20100001 蜀ICP备15012512号-1</div>
            <div>Copyright  2019 咪咕文化科技有限公司</div>
            <ul>
                <li><a href="#">咪咕咪咕</a></li>
                <li><a href="#">咪咕咪咕</a></li>
                <li><a href="#">咪咕咪咕</a></li>
                <li><a href="#">咪咕咪咕</a></li>
                <li><a href="#">咪咕咪咕</a></li>
                <li><a href="#">咪咕咪咕</a></li>
            </ul>
            <p>
                <a>哼哼哈哈</a>
                <a>哼哼哈哈</a>
                <a>哼哼哈哈</a>
            </p>
        </div>
  </div>
  
</template>


<script>
import Vuex from "vuex"
export default {
         created(){
          this.mp4()
          
      },
       data(){
           return {
           maxsrc:[
               {src:"http://www.migu.cn/assets/h5/image/placeholder-image/banner/music720x360.jpg"},
               {
                   src:'http://www.migu.cn:8080/12001/upload/graphicLink/20190531181951191689.jpg'
               },
               {
                   src:"http://www.migu.cn:8080/12001/upload/graphicLink/20190531181512151322.jpg"
               },
               {
                   src:'http://www.migu.cn:8080/12001/upload/graphicLink/20190529165346539023.jpg'
               },
               {
                   src:'http://www.migu.cn:8080/12001/upload/graphicLink/20190529155715571100.jpg'
               },
               {
                   src:'http://www.migu.cn:8080/12001/upload/graphicLink/20190529171541152045.jpg'
               }

           ]
       }
       },
       computed:{
           ...Vuex.mapState({
               mp4List:stat=>stat.mp4.mp4List
           })
       },
       methods:{
            ...Vuex.mapActions({
                mp4:"mp4/mp4"
            })
       }
 
}

</script>

 <style scoped>
#lbt {
  width: 100%;
  margin: 1.88rem 0 0 0;
}
#lbt img {
    width: 100%;
  height: 3.75rem;
}
 #zhong{
        margin: 0 .2rem;
    }
    #nav{
        width: 100%;overflow: hidden;
    }
     #text{
        position: relative;
    }
    #text h2{
        color: #333;padding: .2rem 0;
    }
    #text span{
        position: absolute;right: 0;top: .4rem;
        font-size: .26rem;
    }
    #text img{
        width: 100%;
    }
    #nav li{
        float: left;font-size: .31rem;
        height: .85rem;padding: 0 .3rem;line-height: .85rem;
    }
    #nav li a:hover{
        color: #e40077;
    }
    #nav a{
       color: #666;font-size: .26rem;
        display: inline-block;line-height: .85rem;
    }
    #content ul{
        display: flex;justify-content:space-around;
        flex-wrap:wrap;
    }
    #content li{
        margin: 0.2rem 0;float: left;
    }
    #content img{
        width: 2.2rem;height: 2.2rem;
    }
    #content h3{
        font-weight: 400;margin-top:.1rem; 
    }
    #content p{
        color: #999;font-size: .24rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 2.2rem;
    }
    #bottom{
        /* position:absolute;bottom: 0; */
        background-color:#f2f2f2;
        width: 100%;text-align: center;
        font-size: .21rem;
        color: #999;
        line-height: .38rem;
        padding: .29rem 0;
        background-color: #f2f2f2;
    }
    #bottom ul{
        margin: .3rem 0;width: 100%;display: flex;
        justify-content: space-around;
    }
    #bottom ul li{
        float: left;
    }
    #bottom ul li a{
        color: #999;
    }
    #bottom p a{
        margin: 0 .13rem;color: #999;
    }
</style>
 