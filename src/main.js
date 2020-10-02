import Vue from 'vue'
import App from './App.vue'

import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';
//import 'spectre.css/dist/spectre-icons.mim.css'

import router from '@/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
