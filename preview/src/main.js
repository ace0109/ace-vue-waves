import Vue from 'vue'
import App from './App.vue'

import aceVueWaves from 'ace-vue-waves'
Vue.use(aceVueWaves)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
