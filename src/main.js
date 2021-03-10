import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from 'common/icons/index'
import 'common/styles/index.scss'
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
