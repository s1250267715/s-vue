// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import './assets/script/filter.js'
import './assets/script/mock.js'
import {
  forEach
} from './assets/script/utils.js'
import router from './router'
import component from './components'
import store from './store'
// import 'reset-css'
import './assets/styles/reset.css'
// 富文本
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import './assets/styles/common.less'

// 添加Fastclick移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

// 将sth挂载到vue原型上
Vue.prototype.forEach = forEach

component.init()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
