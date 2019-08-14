import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import Vuelidate from 'vuelidate';
import Axios from 'axios';

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuelidate)

//Use vue serve to look or run just 1 component


Vue.config.productionTip = false
Vue.prototype.$http = Axios
const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')