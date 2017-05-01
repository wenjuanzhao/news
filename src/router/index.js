import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select'
import Point from '@/components/Point'
import Author from '@/components/Author'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/point',
      component: Point
    },
    {
      path: '/author',
      component: Author
    }
  ]
})
