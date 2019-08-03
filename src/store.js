import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_TOKEN = 'SET_TOKEN'
const store = new Vuex.Store({
//export default new Vuex.Store({
  state: {
    token: '',
    nome: '',
    id: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, nome) => {
      state.nome = nome
    },
    SET_ID: (state, id) => {
      state.id = id
    },
  },
  actions: {

  }
})

export default store;