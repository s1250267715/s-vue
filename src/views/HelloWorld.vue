<template>
  <div class="hello">
    <div class="VueToNuxtLogo">
      <div class="Triangle Triangle--two"></div>
      <div class="Triangle Triangle--one"></div>
      <div class="Triangle Triangle--three"></div>
      <div class="Triangle Triangle--four"></div>
    </div>
    <h1>{{ msg }}</h1>
    <p class="mt-10">{{time | time}}</p>
    <p>{{ msgp }}</p>
    <div @click="parent">
      <number-count class="mt-10" :count.sync="num" :step="5" :max="20" :min="5" text="自己默认的提示语" @change="dosth" @add="another"></number-count>
    </div>
    <br />
    <div @click="goPage">
      /about
    </div>
    <div>
      <a href="tel:18703871613">测试打电话</a>
    </div>
    <br />
    <router-link to="quill">
      /quill
    </router-link>
    <br>
    <router-link to="qrcode">
      /qrcode
    </router-link>
    <div class="mt-10">
      <p>{{text.a}}</p>
      <br>
      <button @click="t(1)"> 11</button>
      <button @click="t(-1)"> 22</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { Icon } from 'vux'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App随便写的什么的但是大多数都是',
      msgp: '随便写的什么的但是大多数都是',
      num: 10
    }
  },
  components: {
    Icon
  },
  computed: {
    time () {
      return new Date()
    },
    ...mapState('common', ['text'])
  },
  created () {
    // this.login({
    //   appId: 2,
    //   loginName: '13362626284',
    //   loginPass: 'e10adc3949ba59abbe56e057f20f883e',
    //   loginType: '1',
    //   pageIndex: 2,
    //   pageSize: 20
    // })
    let m = [{ a: 'xx' }, { a: 'yy' }]
    // let n = [...m,{a:'xx'}]
    let n = Object.assign({}, ...m, { a: 'xx' })
    console.log(n)
  },
  methods: {
    ...mapActions('common', ['login']),
    ...mapMutations('common', ['changeText']),
    dosth (payload) {
      console.log('todo', payload)
    },
    parent () {
      console.log('parent')
    },
    another () {
      console.log('add')
    },
    goPage () {
      this.text.a = 10
      this.$router.push({ name: 'about', query: { a: JSON.stringify({ text: 'ceshi' }) } })
    },
    t (n) {
      if (n > 0) {
        // this.text.a = 10
        this.changeText({ a: 10 })
      } else {
        // this.text.a = -10
        this.changeText({ a: -10 })
      }
    }
  }
}
</script>

<style lang="less">
.hello {
  padding: 20px;
  h1 {
    color: @theme-color;
    font-size: 30px;
  }
  p {
    font-size: 30px;
  }
  a {
    font-size: 30px;
    display: inline-block;
    margin-top: 20px;
  }
}
</style>