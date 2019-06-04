import Vue from 'vue'
import Vuex from 'vuex'
import Index from "./index/index"
import music from "./music/index"

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
      Index,
      music
   }
})
