import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: () => import('@/pages/Home/Index')
    },
    {
      path: '/child',
      name: 'HomeChild',
      component: () => import('@/pages/Child/Index')
    },
    {
      path: '/play',
      name: 'PlayIndex',
      component: () => import('@/pages/Play/Index')
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
