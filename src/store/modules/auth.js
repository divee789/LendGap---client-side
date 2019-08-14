
import axios from 'axios';
const url = "http://localhost:9000/api";

export default {
    state: {
        accessToken: localStorage.getItem('access_token') || '',
        userData: {}
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
                console.log("vuex res", response)
                return response
                
            } catch (error) {
                console.log("catch", error)
                return error
            }
        },
        async logIn({ commit }, logIndata) {
            try {
                console.log('logging in')
                const response = await axios.post(url + '/login', logIndata)
                console.log('vuex log', response)

            } catch (error) {
                console.log("catch login", error)
                localStorage.removeItem('access_token')
            }
        },
        async logOut({ commit }) {
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