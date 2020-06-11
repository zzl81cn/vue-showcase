import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CkeditorDoc from '@/pages/ckeditorDoc/ckeditorDoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ckeditor-doc',
      name: 'CkeditorDoc',
      component: CkeditorDoc
    }
  ]
})
