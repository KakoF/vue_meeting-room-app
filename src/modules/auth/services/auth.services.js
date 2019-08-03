const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'

const header = { 'Authorization': 'Bearer ' + store.state.token }

export default {
  login: (data) => {
    return axios.post('Usuarios/autenticar', data)
  },
  requestToken: (data) => {
    const token = axios.post('token', data)
  },
  signup: (data) => {
  return axios.post('signup', data)
  },
  setToken: function(token) {
    store.commit('SET_TOKEN', token)
  },
  registerUser: function(data) {
    const user = data
    axios.post('token', user)
    .then(response=>{
      const token = response.data.token
      store.dispatch("login", { user, token })

    }).catch(error => {

    })


    
    //window.localStorage.setItem('AUTH_TOKEN', token)
    //store.commit('SET_TOKEN', data.token)
    //store.commit('SET_NAME', data.nome)
    //store.commit('SET_ID', data.id)
    //this.requestToken(data)
  },
  getToken: function() {
    return store.state.token
  },
  /*getUser: function() {
    console.log(store.state)
}*/

}

