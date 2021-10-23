import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    count: 0
  },
  render: h => h(App)
}).$mount('#app')
