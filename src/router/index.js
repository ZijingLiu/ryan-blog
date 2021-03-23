import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from 'views/Movies'
import Books from 'views/Books'
import Moments from 'views/Moments'
import NewBlog from 'views/NewBlog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/Home",
    display: false
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    icon: 'Home',
    display: true
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
    icon: 'Movie',
    display: true
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    icon: 'Book',
    display: true
  },
  {
    path: '/moments',
    name: 'Moments',
    component: Moments,
    icon: 'Moment',
    display: true
  }
  // ,
  // {
  //   path: '/newBlog',
  //   name: 'NewBlog',
  //   component: NewBlog,
  //   icon: 'NewBlog',
  //   display: true
  // }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'route-class'
})

export default router
