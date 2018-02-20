import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import AboutPage from '@/components/AboutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})
