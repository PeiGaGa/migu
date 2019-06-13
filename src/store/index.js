import Vue from 'vue'
import Vuex from 'vuex'
import Index from "./index/index"
import music from "./music/index"
import mp4 from "./mp4/index"
import read from "./read/index"

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
      Index,
      music,
      mp4,
      read
   }
})
