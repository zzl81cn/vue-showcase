// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App' /* 引入App这个组件 */
import router from './router' /* 引入路由配置 */
import store from './store/index'; /* 引入store */

Vue.config.productionTip = false;

/* 局部注册 https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C */
/* eslint-disable no-new */
new Vue({
  el: '#App', /*最后效果将会替换页面中id为app的div元素*/
  router, /*使用路由*/
  store,
  components: { App }, /*告知当前页面想使用App这个组件*/
  template: '<App/>' /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
});
