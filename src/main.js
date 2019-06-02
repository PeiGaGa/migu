import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
