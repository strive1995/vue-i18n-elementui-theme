import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ztree from '@/components/ztree'
import Ztrees from '@/components/ztrees'
import Swipers from '@/components/swipers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ztree',
      name: 'ztree',
      component: Ztree
    },
    {
      path: '/ztrees',
      name: 'ztrees',
      component: Ztrees
    },
    {
      path: '/swipers',
      name: 'swipers',
      component: Swipers
    }
  ]
})
