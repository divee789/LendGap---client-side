import Vue from 'vue'
import Vuex from 'vuex'
import Offers from './modules/offers'
import Requests from './modules/requests'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Offers,
    Requests,
    Auth
  }
})
