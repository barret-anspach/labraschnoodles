import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PuppyDetail from '@/components/PuppyDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:slug',
      name: 'PuppyDetail',
      component: PuppyDetail,
      props: (route) => route.params
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 48 }
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
