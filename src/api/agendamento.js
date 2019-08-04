import axios from 'axios'
import store from '@/store'
const header = { 'Authorization': 'Bearer ' + store.state.token }

const instance = axios.create({
  baseURL: 'http://localhost:5001/api/',
  headers: { 'Authorization': 'Bearer ' + store.state.token }
});

export default {

  list: () => {
    return instance.get('agendamentos')
  },
  post: (data) => {
    data.usuario_id = store.state.user_id
    return instance.post('agendamentos', data)
  }
}
