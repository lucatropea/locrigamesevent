import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Crew from '../views/Crew.vue'
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueRouter)
Vue.use(VueQrcodeReader);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Crew',
    name: 'Crew',
    component: Crew
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
