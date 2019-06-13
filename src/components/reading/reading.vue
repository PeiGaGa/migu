<template>
    <div id="read">
        <p>
            <span>新书速递</span>
            <a href="#">更多》》</a>
        </p>
        <div v-for="(item,index) in readList" :key="index">
            <a href="" id="book">
            <img :src=item.picUrl alt="">
            <div id="word">
                <h3>{{item.bookName}}</h3>
                <p id="name">作者：{{item.artistName}}</p>
                <p id="conent">{{item.clob}}</p>
            </div>
            </a>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    created(){
          this.read()
          
      },
    computed:{
           ...Vuex.mapState({
               readList:stat=>stat.read.readList
           })
       },
       methods:{
            ...Vuex.mapActions({
                read:"read/read"
            })
       }
}
</script>

<style scoped>
    #read >div{
        margin-top: 0.09rem;
    }
    #read > p{
        height:.66rem ;
        color: #333;
         font-size: .36rem;
        line-height: .66rem;
        padding: 0 .3rem;
        margin-top: .5rem;
        display: flex;
        justify-content:space-between;
        font-weight: 400;    
    }
    #book{
        display: flex;
        margin-left: 0.3rem;
    }
    #book img{
    width: 1.8rem;
    height: 2.4rem;
    margin-right:.2rem;
        }
    #word h3{
    font-size: .3rem;
    color: #333;
    height: .38rem;
    line-height: .38rem;
    margin-top: .2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
    #name{
    height: .3rem;
    line-height: .3rem;
    font-size: .22rem;
    white-space: nowrap;
    }
    #conent{
        width: 4.904rem;
        height: 1.104rem;
    line-height: .38rem;
    font-size: .24rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #999;
    margin-top: .1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    }

    
</style>