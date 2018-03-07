'use strict'
/**
 * TODO eslint
 * 处理一些公共的操作
 */
import ft from '@/api'

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
    loading: {
      show: false,
      test: '加载中...'
    },
    mockDate: [],
    text: {a: 1}
  },
  mutations: {
    showToast (state, payload) {
      state.toast = Object.assign({}, defaultToastOption, {
        shown: true,
        ...payload
      })
    },
    hideToast (state, payload) {
      state.toast = Object.assign({}, defaultToastOption, {
        shown: false,
        ...payload
      })
    },
    changeText (state, payload) {
      state.text = Object.assign({}, state.text, payload)
    }
  },
  actions: {
    login ({
      state,
      dispatch
    }, payload) {
      ft('/employee/login', payload, {
        needCode: true
      }).then((res) => {
        console.log(res)
      })
    },
    test ({
      state
    }) {
      ft('/test', {
        id: 1,
        name: 'shl'
      }, {
        needCode: true
      }).then(res => {
        console.log(res, 'res')
        state.mockDate = res || []
      })
    }
  }
}
