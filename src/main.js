import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bulma from 'bulma/css/bulma.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  bulma,
  render: h => h(App)
  // render: function (h) { return h(App) }
}).$mount('#app')
