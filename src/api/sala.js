import axios from 'axios'
import store from '@/store'

export default {
  list: () => {
    return axios.get('salas')
  }
}
