import Vue from 'vue'
import Router from 'vue-router'
import index from "./index/index"
import music from "./music/index"
import download from "./download"
import mp4 from "./mp4"
import game from "./game"
import read from "./read"
import copplay from "./copplay"
import run from "./run"



Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
     path:'/',
     redirect:"/index"

    },
    index,
    music,
    download,
    mp4,
    game,
    read,
    copplay,
    run

   
  ]
})
