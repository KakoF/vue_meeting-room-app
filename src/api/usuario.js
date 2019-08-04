const TokenKey = 'Admin-Token'
import axios from 'axios'
import store from '@/store'
const instance = axios.create({
  baseURL: 'http://localhost:5001/api/',
  headers: { 'Authorization': 'Bearer ' + store.state.token }
});
//const header = { 'Authorization': 'Bearer ' + store.state.token }
export default {

  get: () => {
    return instance.get(`Usuarios/${store.state.user_id}`)
  }
}
