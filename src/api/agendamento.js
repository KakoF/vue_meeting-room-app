import axios from 'axios'
import store from '@/store'
const header = { 'Authorization': 'Bearer ' + store.state.token }

export default {

  list: () => {

    const instance = axios.create({
      baseURL: 'https://localhost:44328/api/',
      headers: { 'Authorization': 'Bearer ' + store.state.token }
    });
    return instance.get('agendamentos')
  },
  post: (data) => {
    data.usuario_id = store.state.user_id
    return axios.post('agendamentos', data)
  }
}
