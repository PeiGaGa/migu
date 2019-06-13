<template>
  <div>
    <div id="lbt">
      <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in maxsrc" :key="index">
          <img :src=item.src>
      </van-swipe-item>
    </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
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
   }
    
    
  
}
</script>

<style scoped>
#lbt {
  width: 100%;
  margin: 1.88rem 0 0 0;
}
#lbt img {
  height: 3.75rem;
  width: 100%
}
</style>