/*
 * 处理一些公共的操作
 */
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
	},
	mutations: {
		showToast(state, payload) {
			state.toast = Object.assign({}, defaultToastOption, {
				shown: true,
				...payload
			})
		}
	},
	actions: {}
}