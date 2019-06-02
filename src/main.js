import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false

Vue.use(VueTouch,{
  name:'v-touch'
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
