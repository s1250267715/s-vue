import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/views/HelloWorld')
const About = () => import('@/views/about')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
