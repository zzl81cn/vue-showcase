import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import WlTreeTransfer from 'wl-tree-transfer' 
import 'wl-tree-transfer/lib/wl-tree-transfer.css'
Vue.use(WlTreeTransfer)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
