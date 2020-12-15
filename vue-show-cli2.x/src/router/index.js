/* router */
/* 注意vue-cli3的路由配置中，组件的引入方式 */

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Father from '@/pages/father/Father'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: () => import('../pages/HelloWorld'), meta: {keepAlive: true}},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/father', name: 'father', component: Father},
    {path: '/drag-table', name: 'element', component: () => import('../pages/dragTable/index')},
    {path: '/element', name: 'element', component: () => import('../pages/element/index'),
      children: [
        {path: '/element/tabs', name: 'tabs', component: () => import('../pages/element/components/Tabs')},
        {path: '/element/table', name: 'table', component: () => import('../pages/element/components/Table')},
        {path: '/element/tree', name: 'tree', component: () => import('../pages/tree/index')},
        {path: '/element/tree-inline', name: 'treeInline', component: () => import('../pages/tree/treeInline')},
        {path: '/element/tree-check-single', name: 'treeSingleCheck', component: () => import('../pages/tree/singleCheckTree')},
        {path: '/element/nav-menu', name: 'navMenu', component: () => import('../pages/element/components/navMenu')},
        // {path: '/element/tree-transfer', name: 'TreeTransfer', component: () => import('../pages/tree/treeTransfer')}
      ]
    }
  ]
})
