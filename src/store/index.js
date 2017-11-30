import Vue from 'vue'
import Vuex from 'vuex'


import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		common:common,
	}
})
export default store