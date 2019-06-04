import Vue from 'vue'
import Router from 'vue-router'
import index from "./index/index"
import music from "./music/index"


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

   
  ]
})
