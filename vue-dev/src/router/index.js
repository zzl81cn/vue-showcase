import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '../pages/Blog'
import H1 from '../pages/H1'
import H2 from '../pages/H2'
import Qipa from '../pages/Qipa'
import NoFind from '../pages/noFind'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/blog',
      name: "Blog",
      component: Blog,
      children: [
        {
          path: 'h1',
          component: H1
        },
        {
          path: 'h2',
          component: H2
        }
      ]
    },
    {
      path: '/qipa',
      name: 'qipa',
      component: Qipa
    },
    {
      path: '*',
      name: 'noFind',
      component: NoFind
    }
  ]
})
