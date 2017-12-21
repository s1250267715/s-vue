<template>
	<div id="about">
		<h1 v-for="(v,i) in mockDate.list" :key="i">name{{i}}:{{v.name}}</h1>
		<ol>
			<li v-for="(v,i) in arr" :key="i">age{{i}}:{{v}}</li>
		</ol>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      arr: []
    }
  },
  computed: {
    ...mapState('common', ['mockDate'])
  },

  watch: {
    mockDate: {
      handler: function (val) {
        console.log(typeof val)
        this.forEach(val.list, i => {
          console.log(i)
          i.age > 20 && this.arr.push(i.age)
        })
      },
      deep: true
    }
  },
  created () {
    this.test()
  },
  methods: {
    ...mapActions('common', ['test'])
  }
}
</script>

<style lang='less'>
h1,
li {
  margin-top: 20px;
  font-size: 30px;
}
</style>