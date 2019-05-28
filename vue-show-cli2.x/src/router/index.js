/* router */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld, meta: {keepAlive: true}},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact}
  ]
})
