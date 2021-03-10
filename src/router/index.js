import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from 'views/Movies'
import Books from 'views/Books'
import Moments from 'views/Moments'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'Home'
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
    icon: 'Movie'
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    icon: 'Book'
  },
  {
    path: '/moments',
    name: 'Moments',
    component: Moments,
    icon: 'Moment'
  }
]

const router = new VueRouter({
  routes
})

export default router
