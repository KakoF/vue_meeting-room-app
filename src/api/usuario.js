const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'

const header = { 'Authorization': 'Bearer ' + store.state.token }
export default {

  get: () => {
      return axios.get(`Usuarios/${store.state.user_id}`, header)
  }
}
