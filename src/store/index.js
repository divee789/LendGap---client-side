import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import { setupMaster } from "cluster";

Vue.use(Vuex);
const url = "http://localhost:9000/api";

export default new Vuex.Store({
    state: {
        offers: [],
        requests: [],
        userData: []
    },
    mutations: {
        setOffer(state, offer) {
            state.offers = offer
        },
        setRequest(state, request) {
            state.requests = request
        },
        setUser(state, user) {
            state.userData = user
        }
    },
    getters: {
        offers: state => state.offers,
        requests: state => state.requests,
        getUser: state => state.userData
    },
    actions: {
        getOffer({ commit }) {
            axios.get(url + "/markets").then(res => {
                const data = res.data
                const offers = []
                for (let key in data) {
                    const offer = data[key]
                    data.id = key
                    offers.push(offer)
                }
                commit('setOffer', offers)
            })
        },
        setOffer({ commit }, offer) {
            axios.post(url + "/markets", offer)
        },
        getRequest({ commit }) {
            axios.get(url + "/requests").then(res => {
                const data = res.data
                const requests = []
                for (let key in data) {
                    const request = data[key]
                    data.id = key
                    requests.push(request)
                }
                commit('setRequest', requests)
            })
        },
        setRequest({ commit }, request) {
            axios.post(url + "/requests", request)
        }
    }
});