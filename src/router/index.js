import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
