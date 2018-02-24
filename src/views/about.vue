<template>
  <div id="about">
    <h1 v-for="(v,i) in mockDate.list" :key="i">name{{i}}:{{v.name}}</h1>
    <ol>
      <li v-for="(v,i) in arr" :key="i">age{{i}}:{{v}}</li>
    </ol>
    <p>{{text.a}}</p>
    <div>
      <p>{{obj.a}}</p>
      <button @click="t(1)"> 11</button>
      <button @click="t(-1)"> 22</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      arr: []
    }
  },
  computed: {
    ...mapState('common', ['mockDate', 'text']),
    ...mapState('t', ['obj'])
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
    ...mapActions('common', ['test']),
    ...mapMutations('t', ['changeText']),
    t (n) {
      if (n > 0) {
        console.log(1)
        this.changeText({ a: 10 })
      } else {
        this.changeText({ a: -10 })
      }
    }
  }
}
</script>

<style lang='less'>
h1,
li {
  margin-top: 20px;
  font-size: 30px;
}
p {
  color: red;
  font-size: 50px;
}
</style>