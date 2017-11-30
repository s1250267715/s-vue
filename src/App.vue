<template>
	<div id="app">
		<img src="./assets/images/logo.png">
		<router-view></router-view>
		<toast v-model="toast.shown" :type="toast.type" :width="toast.width" :time="toast.time" :is-show-mask="toast.isShowMask" :text="toast.text" :position="toast.position"></toast>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Toast } from 'vux'
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'app',
		computed: {
			...mapState("common", ["toast"])
		},
		created() {
			console.log(this.toast)
		},
		methods: {

		},
		components: {
			Toast
		}
	}
</script>
