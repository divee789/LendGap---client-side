
import axios from 'axios';
const url = "http://localhost:9000/api";

export default {
    state: {
        userData: [],
        accessToken: localStorage.getItem('access_token') || '',
    },
    mutations: {
        login(state, token) {
            state.accessToken = token
        }
    },
    getters: {
        getUser: state => state.userData
    },
    actions: {
        async signUp({ commit }, signUpData) {
            try {
                console.log('signing up')
                const response = await axios.post(url + "/register", signUpData)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
        async signIn({ commit }, data) {
            try {
                const response = await axios.post('/login', data)
                const token = response.data.access_token
                const expiryDate = response.data.exp
                localStorage.setItem('access_token', token)
                localStorage.setItem('expiry_date', expiryDate)
                axios.defaults.headers.common['Authorization'] = token
                commit('login', token)
            } catch (error) {
                console.log(error)
                localStorage.removeItem('access_token')
            }
        },
        async logOut ({ commit }) {
            commit('logout')
            localStorage.removeItem('access_token')
            delete axios.defaults.headers.common['Authorization']
          },
        async getProfile({ commit }) {
            try {
                const response = await axios.get(url + "")
                const user = response.data.user
                commit('auth_success', user)
            } catch (error) {
                console.log(error)
            }
        }
    }
};