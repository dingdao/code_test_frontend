import Vue from 'vue'
//import App from './App.vue'
import App from './components/Home.vue'

import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,Axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
