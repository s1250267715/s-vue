// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./assets/script/filter.js"
import router from './router'
import component from './components'
import store from './store'
import "./assets/styles/common.less"


Vue.config.productionTip = false
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