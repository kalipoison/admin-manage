import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
// 导入阿里字体样式
import './assets/fonts/iconfont.css'
// 导入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
