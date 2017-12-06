<template>
	<div id="about"> 
		<h1 v-for="i in mockDate.list">{{i.name}}</h1>
		<ol>
			<li v-for="i in arr">{{i}}</li>
		</ol>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[]
			}
		},
		created(){
			this.forEach(this.mockDate.list,i=>{
				//随便写的，并无意义
				this.forEach(i.obj,v=>{
					this.arr.indexOf(v)===-1&&this.arr.push(v)
				})
			})
			
		}
	}
</script>

<style>
</style>