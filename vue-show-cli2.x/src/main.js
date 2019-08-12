// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'
import store from './store'
// const Axios = require('axios')
// import api from "./api/index";

Vue.config.productionTip = false;
// Vue.use(api)
//添加VueLazyload 选项
Vue.use(VueLazyload)
Vue.use(ElementUI)
// Vue.prototype.$http = Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
