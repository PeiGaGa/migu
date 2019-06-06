<template>
    <div id="main">
        <div id="nav">
            <div id="search">
                <input type="text" placeholder="这！就是原创">
                <a>搜索</a>
            </div>
            <router-link tar="a" to="./index" id="off">取消</router-link>
        </div>
        <div id="hot-list">
            <h4>热门搜索</h4>
            <ul>
                <li><a href="#">歌手2019</a></li>
                <li><a href="#">Better Man</a></li>
                <li><a href="#">身临其境第二季</a></li>
                <li><a href="#">好不好</a></li>
                <li><a href="#">青春斗</a></li>
                <li><a href="#">迪丽热巴</a></li>
                <li><a href="#">无所求必满载而归</a></li>
            </ul>
        </div>
        <bottom id="bom"></bottom>
    </div>
</template>

<script>
    import bottom from "@components/bottom"
    export default {
        name:"search",
        components:{
            bottom
        }
    }
</script>

<style scoped>
    body{
        background-color: #fff;
    }
    /* #main{
        position: relative;
        z-index: 10;
    } */
    #nav{
        height: 1.13rem;width: 100%;
        background: #1c1c1c;
        font-size: .3rem;
    }
    #search{
        background: #fff;
        width: 6.15rem;height: .63rem;
        float: left;
        margin: .25rem 0 0 .21rem;
        border-radius: .16rem;
        
    }
    #search input{
        height: .63rem;width: 5.22rem;
        border: none;margin-left:.2rem; 
    }
    #off{
        display: inline-block;
        width: 1.04rem;
        height: 1.13rem;
        line-height: 1.13rem;
        text-align: center;
        color: #ccc;
    }
    #hot-list{
        padding-top: .23rem;
    }
    #hot-list h4{
        color: #999;
        padding: 0 .21rem;
        line-height: .67rem;
    }
    #hot-list ul{
        margin-top: .21rem;
        padding: 0 .21rem;
    }
    #hot-list ul li{
        float: left;
        margin-right: .21rem;
        margin-bottom: .21rem;
    }
    #hot-list ul li a{
        font-size: .33rem;
        color: #666;
        line-height: .79rem;
        border: 1px solid #eaeaea;
        border-radius: .79rem;
        padding: 0 .31rem;
        display: block;
    }
    #bom{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>