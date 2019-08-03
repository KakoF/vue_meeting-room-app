const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'

const header = { 'Authorization': 'Bearer ' + store.state.token }
export default {
  list: () => {
    console.log(store.state.token)
    return axios.get('salas', 
    { 'headers': { 'Authorization': 'Bearer ' + store.state.token } })
  }
}
