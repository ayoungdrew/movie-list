import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MovieList from '@/components/MovieList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    }
  ]
})
