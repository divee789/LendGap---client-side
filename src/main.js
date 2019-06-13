import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vuelidate from 'vuelidate'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuelidate)

//Use vue serve to look run just 1 component


Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')