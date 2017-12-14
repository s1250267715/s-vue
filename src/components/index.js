/*
 * 注册全局组件
 */

import Vue from 'vue'

import NumberCount from '@/components/NumberCount'

export default {
  init  () {
    Vue.component('NumberCount', NumberCount)
  }
}
