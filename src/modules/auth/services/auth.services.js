const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'

const header = { 'Authorization': 'Bearer ' + store.state.token }

export default {
  login: (data) => {
    return axios.post('token', data)
  },
  signup: (data) => {
  return axios.post('signup', data)
  },
  setToken: function(token) {
    store.commit('SET_TOKEN', token)
  },
  setUser: function(data) {
    //window.localStorage.setItem('AUTH_TOKEN', token)
    store.commit('SET_TOKEN', data.token)
    store.commit('SET_NAME', data.nome)
    store.commit('SET_ID', data.id)
  },
  getToken: function() {
    return store.state.token
  },
  /*getUser: function() {
    console.log(store.state)
}*/

}

