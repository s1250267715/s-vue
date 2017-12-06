/*
 * 公共api
 */
'use strict'

import axios from 'axios'
import store from '../store'
import vm from "@/main"

const USE_DEV_SERVER = false
const rootPath = USE_DEV_SERVER ? '/api' : '/sunrise-gateway'

// 拦截模式
let defaultMode = {
	intercept: true,
	showToast: true,
	needLogin: true
}

// create a new instance of axios with a custom config
const instance = axios.create({
	baseURL: `${window.location.origin}${rootPath}`,
	timeout: 10000,
	headers: {
		post: {
			'Content-Type': 'application/json;charset=UTF-8;'
		}
	}
})

let delay //在加载比较快时Loading组件一闪而过体验也不大好，延迟设置loading状态。

// 请求拦截器
instance.interceptors.request.use(function(config) {
	delay = setTimeout(function() {
		store.state.common.loading.show = true
	}, 150)
	if(config.method === 'post') {
		// 封装参数为该格式 {body: ... , ctrlData: {pageIndex: ..., pageSize: ...}}
		// 处理post请求
		const query = {}
		const data = config.data
		if(data) {
			if(data.hasOwnProperty('pageIndex') || data.hasOwnProperty('pageSize')) {
				query['ctrlData'] = {
					'pageIndex': data.pageIndex || 1,
					'pageSize': data.pageSize || 10
				}
				delete data.pageIndex
				delete data.pageSize
			}
			query.body = JSON.stringify(data)
		}
		config.data = query
	} else {
		// TODO 需要处理get请求
	}
	return config
}, function(error) {
	console.error('request error intercepted:', error)
	return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function(response) {
	clearTimeout(delay)
	const mode = response.config.mode
	if(mode.intercept) {
		if(!response.data || !response.data.hasOwnProperty('code')) {
			return Promise.reject(response)
		}
		// 处理部分异常
		switch(response.data.code) {
			case 'LOGIN_001': 
			case '999999':
			case 'AUTH_002':
			case 'AUTH_005':
			case 'CBS0001':
			case 'SUPERC0002':
			case 'SUPERC0005':
			case 'SUPERC0010':
			case 'SUPERC0011':
			case 'SUPERC0019':
			case 'SUPERC0050':
				mode.showToast && store.commit('common/showToast', {
					type: 'cancel',
					text: response.data.message
				})
				return Promise.reject(response)
			case 'AUTH_001':
			case 'LOGIN_006':
				// 登录失败、未登录
				if(window.browser !== 'app' && window.browser !== 'wx') {
					mode.showToast && mode.needLogin && store.commit('common/showToast', {
						type: 'cancel',
						text: '请登录后操作'
					})
					return Promise.reject(response)
				} else if(mode.needLogin) {
					window.$vm.gotoLogin()
					return Promise.reject(response)
				} else {
					return Promise.resolve(response)
				}
			case '000000':
				return Promise.resolve(response)
			default:
				mode.showToast && store.commit('common/showToast', {
					type: 'cancel',
					text: response.data.message || '未知状态码'
				})
				return Promise.reject(response)
		}
	} else {
		return response
	}
}, function(error) {
	// Do something with response error
	let errMsg
	if(error.response) {
		const status = error.response.status
		switch(status) {
			case 500:
				errMsg = '服务器错误'
				break
			case 404:
				errMsg = '资源不存在'
				break
			default:
				errMsg = '网络错误'
		}
	} else if(error.code === 'ECONNABORTED') {
		errMsg = '连接超时'
	}
	store.commit('common/showToast', {
		type: 'cancel',
		text: errMsg
	})
	return Promise.reject(error)
})

// 参数： [url, method, params] [object]
export default function ft() {
	const config = {}
	if(typeof arguments[0] === 'string') {
		config.url = arguments[0]
		config.method = arguments.length > 2 && typeof arguments[1] === 'string' ? arguments[1] : 'post' // 默认post方式
		if(['post', 'put', 'patch'].indexOf(config.method) !== -1) {
			config.data = arguments.length > 1 ? arguments[1] : {}
		} else {
			config.params = arguments.length > 1 ? arguments[1] : {}
		}
		config.mode = Object.assign({}, defaultMode, arguments.length > 2 ? arguments[2] : {}) // 第三个参数默认为{}
	} 
	return new Promise((resolve, reject) => {
		instance.request(config)
			.then(response => {
				resolve(response.data.data, response)
			}, err => {
				reject(err)
			})
			.catch((error) => { // 其他未捕获的异常
				reject(error)
			})
	})
}