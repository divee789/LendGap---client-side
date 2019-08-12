
import axios from 'axios';
const url = "http://localhost:9000/api";

export default {
    state: {
        requests: [],
    },
    mutations: {
        setRequest(state, request) {
            state.requests = request
        },
    },
    getters: {
        requests: state => state.requests
    },
    actions: {
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
};