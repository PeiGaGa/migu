<template>
    <div>
        <div id="box">
           <div id="nav">
               <ul>
                   <li><a href="#">咪咕</a></li>
                   <li><a href="#">咪咕</a></li>
                   <li><a href="#">咪咕</a></li>
               </ul>
               <a>换一批</a>
           </div>
           <div id="content">
               <ul>
                   <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
                    <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
                    <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
                    <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
                    <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
                    <li><a href="#">
                       <img src="https://pcache.cmam.migu.cn/prod/cmam_music/storage_1/albummaterial/11004/000002/0011/8173/1100000000179084944/b47d00f7054b4339b36793ab35ad3e46_-667780081.jpg">
                       <h3>北京的夜晚</h3>
                       <p>郭静</p>
                    </a></li>
               </ul>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'yuansong'
}
</script>

<style scoped>
    #box{
        margin: 0 .2rem;
    }
    #nav{
        width: 100%;height: .85rem;
    }
    #nav li{
        float: left;font-size: .31rem;
        height: .85rem;padding: 0 .3rem;line-height: .85rem;
    }
    #nav li a:hover{
        color: #e40077;
    }
    #nav a{
        float:right;color: #666;font-size: .26rem;
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
    }

</style>

