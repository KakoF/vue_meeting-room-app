const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'

const header = { 'Authorization': 'Bearer ' + store.state.token }
export default {

  list: () => {
    return axios.post('agendamentos', header, data)
  }
}
