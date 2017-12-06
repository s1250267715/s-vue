<template>
	<div class="hello">
		<img src="../assets/images/logo.png">
		<h1>{{ msg }}</h1>
		<p class="mt-10">{{time | time}}</p>
		<number-count class="mt-10" :count.sync="num" :step="5" :max="20" :min="5" text="自己默认的提示语" v-on:change="dosth"></number-count>
		<br />
		<router-link to="about">
			/about
		</router-link>
	</div>
</template>

<script>
	import { mapActions } from "vuex"
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				num: 10
			}
		},
		computed: {
			time() {
				return new Date()
			}
		},
		created() {
			console.log(this.mockDate, "mock")
			this.login({
				appId: 2,
				loginName: "13362626284",
				loginPass: "e10adc3949ba59abbe56e057f20f883e",
				loginType: "1",
				pageIndex: 2,
				pageSize: 20
			})
		},
		methods: {
			...mapActions("common", ["login"]),
			dosth(payload) {
				console.log("todo", payload)
			}
		}
	}
</script>

<style lang="less">
	.hello {
		h1 {
			color: @theme-color;
			font-size: 30px
		}
	}
</style>