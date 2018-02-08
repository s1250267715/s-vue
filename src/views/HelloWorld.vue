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
    <router-link to="about">
      /about
    </router-link>
    <div>
      <a href="tel:18703871613">测试打电话</a>
    </div>
    <router-link to="quill">
      /quill
    </router-link>
    <br>
    <router-link to="qrcode">
      /qrcode
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App随便写的什么的但是大多数都是',
      msgp: '随便写的什么的但是大多数都是',
      num: 10
    }
  },
  computed: {
    time () {
      return new Date()
    }
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
  },
  methods: {
    ...mapActions('common', ['login']),
    dosth (payload) {
      console.log('todo', payload)
    },
    parent () {
      console.log('parent')
    },
    another () {
      console.log('add')
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