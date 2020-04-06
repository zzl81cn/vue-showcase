/* router */
/* 注意vue-cli3的路由配置中，组件的引入方式 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Father from '@/pages/father/Father'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld, meta: {keepAlive: true}},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/father', name: 'father', component: Father},
    {path: '/tree', name: 'tree', component: () => import('../pages/tree/index')},
    {path: '/tree-inline', name: 'treeInline', component: () => import('../pages/tree/treeInline')},
    {path: '/element', name: 'element', component: () => import('../pages/element/index')}
  ]
})
