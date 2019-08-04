import axios from 'axios'
import store from '@/store'
const instance = axios.create({
  baseURL: 'http://localhost:5001/api/',
  headers: { 'Authorization': 'Bearer ' + store.state.token }
});

export default {
  list: () => {
    return instance.get('salas')
  }
}
