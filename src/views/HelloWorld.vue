<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p class="mt-10">{{time | time}}</p>
		<number-count class="mt-10" :count.sync="num" :step="5" :max="20" :min="5" text="自己默认的提示语" v-on:change="dosth"></number-count>
	</div>
</template>

<script>
	import { Actionsheet } from 'vux'
	export default {
		name: 'HelloWorld',
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
		components: {
			Actionsheet
		},
		methods: {
			dosth(payload) {
				console.log("todo", payload)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	/*@import url("../assets/styles/theme.less");*/
	
	h1 {
		color: @theme-color;
		font-size: 30px
	}
</style>