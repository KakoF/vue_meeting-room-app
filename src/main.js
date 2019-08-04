import Vue from 'vue'
import axios from '@/plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';
import vuelidate from '@/plugins/vuelidate';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false

Vue.prototype.$http = axios;
const token = localStorage.getItem('token');

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')

