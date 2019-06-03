<template>
    <div>
        <div id="box">
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
export default {
    name:'bottom'   //组件名字
}
</script>

<style scoped>
    #box{
        /* position:absolute;bottom: 0; */
        background-color:#f2f2f2;
        width: 100%;text-align: center;
        font-size: .21rem;
        color: #999;
        line-height: .38rem;
        padding: .29rem 0;
        background-color: #f2f2f2;
    }
    #box ul{
        margin: .3rem 0;width: 100%;display: flex;
        justify-content: space-around;
    }
    #box ul li{
        float: left;
    }
    #box ul li a{
        color: #999;
    }
    #box p a{
        margin: 0 .13rem;color: #999;
    }
</style>