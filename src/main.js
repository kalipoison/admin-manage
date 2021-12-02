import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
// 导入阿里字体样式
import './assets/fonts/iconfont.css'
// 导入全局样式
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'


// 请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use(config => {
  // 为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token');
  // 在最后必须 return config
  return config;
})


Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
