import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:4113',
}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
