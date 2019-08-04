"use strict";

import Vue from 'vue';
import axios from "axios";
import store from '@/store'
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = 'http://localhost:5001/api/';
axios.defaults.headers.common = {'Authorization': `bearer ${store.state.token}`}
// axios.defaults.withCredentials = false;
// axios.defaults.responseEncoding = 'utf8'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

let config = {
  // baseURL: 'https://localhost:44328/api/',
  /*headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  },*/
  //timeout: 60 * 1000, // Timeout
  //responseEncoding: 'utf8',
  //withCredentials: false, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
