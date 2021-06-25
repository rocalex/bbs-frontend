import Vue from 'vue'
import VueRouter from 'vue-router'
import Home      from "@/views/Home"
import AboutUs   from "@/views/AboutUs"
import ContactUs from "@/views/ContactUs"
import FAQs      from "@/views/FAQs"
import Careers   from "@/views/Careers"
import Services  from "@/views/Services"
import Order     from "@/views/Order"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: FAQs
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
