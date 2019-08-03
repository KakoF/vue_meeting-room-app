import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_TOKEN = 'SET_TOKEN'
const store = new Vuex.Store({
//export default new Vuex.Store({
  state: {
    token:  localStorage.getItem('token') || '',
    status: '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    /*SET_TOKEN: (state, token) => {
      //localStorage.setItem('access_token', value);
      //console.log(window.localStorage.getItem('uid'))
      state.token = token
    },
    SET_NAME: (state, nome) => {
      state.nome = nome
    },
    SET_ID: (state, id) => {
      state.id = id
    },*/
  },
  actions: {
    login({ commit }, user) {
      console.log(user)
      return new Promise((resolve, reject) => {
        commit('auth_request')
        localStorage.setItem('token', user.token)
          // Add the following line:
        axios.defaults.headers.common['Authorization'] = user.token
        commit('auth_success', user.token, user.user)
         
      })
    },
    /*register({ commit }, user) {
      console.log('register')
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },*/
    logout({ commit }) {
      console.log('logout')
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
})

export default store;