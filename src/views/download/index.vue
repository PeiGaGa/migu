<template>
    <div id="box">
        <h2>应用下载</h2>
        <ul>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20170523134353435229.jpg">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20180601143131314380.png">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20170523134353435229.jpg">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20180601143131314380.png">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20170523134353435229.jpg">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div id="wrap">
                        <img src="http://www.migu.cn:8080/12001/upload/graphicLink/20180601143131314380.png">
                        <div id="text">
                            <h3>咪咕音乐</h3>
                            <p>放肆听 趣玩乐</p>
                        </div>
                    </div>
                </a>
                <div id="btn">
                    <a href="#">详情</a>
                    <a href="#">下载</a>
                </div>
            </li>
        </ul>
    <bottom></bottom>
    </div>
</template>

<script>
import bottom from "@components/bottom"

export default {
    name:'download',
    components:{
        bottom,
    }
}
</script>

<style scoped>
    #box{
        margin-top: 2rem;
    }
    #box h2{
        line-height: .73rem;
        font-size: .31rem;
        color: #666;
        margin-top: .21rem;
        padding: 0 .21rem;
        font-weight: 700;
    }
    ul li{
        width: 7.5rem;
        border-top: 1px solid #eaeaea;
        position: relative;
        box-sizing: border-box;
        padding: 0 .21rem;
        height: 1.68rem;
    }
    ul img{
        width: 1.25rem;
        height: 1.25rem;
        margin: .21rem 0;
        float: left;
    }
    #text{
        width: 3.15rem;
        height: 100%;
        float: left;
        box-sizing: border-box;
        padding-left: .33rem;
    }
    ul h3{
        color: #333;
        font-size: .31rem;
        margin-top: .26rem;
    }
    ul p{
        color: #666;
        font-size: .23rem;
        margin: .05rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    #btn{
        width: 2.56rem;
        float: left;
        height: 100%;
    }
    #btn a{
        width: 1.15rem;
        float: left;
        height: .5rem;
        border: .02rem solid #e40077;
        font-size: .27rem;
        text-align: center;
        line-height: .5rem;
        border-radius: .08rem;
        color: #e40077;
        margin: .56rem .1rem 0 0;
    }
</style>
