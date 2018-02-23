import Vue from 'vue'
import Vuex from 'vuex'
// 状态持久化

import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common: common
  }
})

export default store
