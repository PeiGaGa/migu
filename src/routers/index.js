import Vue from 'vue'
import Router from 'vue-router'

import index from "./index/index"
import music from "./music"
import download from "./download"
import search from "./search"
import mp4 from "./mp4"
import read from "./read"
import copplay from './copplay'
import service from './service'
import about from './about'
import game from './game'
import run from './run'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
     path:'/',
     redirect:"/index",
    },
    index,
    music,
    download,
    search,
    mp4,
    read,
    copplay,
    service,
    about,
    game,
    run,

    {
      path:"**",
      redirect:"/index"
    }

   
  ]
})
