
import axios from 'axios';

const url = "http://localhost:9000/api";

export default {
    state: {
        offers: [],
    },
    mutations: {
        setOffer(state, offer) {
            state.offers = offer
        }
    },
    getters: {
        offers: state => state.offers
    },
    actions: {
        async getOffer({ commit }) {
            try {
                const response = await axios.get(url + "/markets")
                const data = response.data
                const offers = []
                for (let key in data) {
                    const offer = data[key]
                    data.id = key
                    offers.push(offer)
                }
                commit('setOffer', offers)
            } catch (err) {
                console.log(err)
            }
        }
    },
    setOffer({ commit }, offer) {
        axios.post(url + "/markets", offer)
    },

};