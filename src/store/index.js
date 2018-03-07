import Vue from 'vue'
import Vuex from 'vuex'
// 状态持久化
import createPersistedState from 'vuex-persistedstate'
import common from './modules/common'
import t from './modules/t'
console.log(createPersistedState)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common: common,
    t: t
  },
  plugins: [createPersistedState()]  // 加上这个就可以了
})

export default store
