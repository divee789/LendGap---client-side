import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
var Api = "https://lendgap-bce9c.firebaseio.com/"

export default new Vuex.Store({
    state: {
        loadedMarket:[]
    },
    mutations:{
        setMarket(state,market){
            state.loadedMarket = market
        }
    },
    actions:{
        setMarket({commit},market){
            commit('setMarket',market)
        }
    },
    getters:{
        loadedMarket(state){
            return state.loadedMarket
        }
    }
});