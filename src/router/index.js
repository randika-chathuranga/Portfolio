import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Qualifications from '../views/Qualifications.vue'
import Services from '../views/Services'
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
    path: '/qualifications',
    name: 'Qualifications',
    component: Qualifications
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
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
