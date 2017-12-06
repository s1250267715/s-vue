/*
 * 处理一些公共的操作
 */

import ft from "@/api"

const defaultToastOption = {
	shown: false,
	time: 2000,
	type: 'text',
	width: 'auto',
	position: 'top',
	isShowMask: false,
	text: '提示信息'
}
export default {
	namespaced: true,
	state: {
		toast: {
			...defaultToastOption
		},
		loading: {
			show: false,
			test: '加载中...'
		},
	},
	mutations: {
		showToast(state, payload) {
			state.toast = Object.assign({}, defaultToastOption, {
				shown: true,
				...payload
			})
		}
	},
	actions: {
		login({
			state,
			dispatch
		}, payload) {
			ft("/employee/login", payload,{needCode:true}).then((res)=>{
				console.log(res)
			})
		}
	}
}