<template>
	<div id="app">
		<router-view></router-view>
		<loading v-model="loading.show" :text="loading.text" position="absolute"></loading>
		<toast v-model="toast.shown" :type="toast.type" :width="toast.width" :time="toast.time" :is-show-mask="toast.isShowMask" :text="toast.text" :position="toast.position"></toast>
	</div>
</template>

<script>
import { Toast, Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('common', ['toast', 'loading'])
  },
  methods: {

  },
  components: {
    Toast,
    Loading
  }
}
</script>
<style lang="less">
/*@import '~vux/src/styles/reset.less';*/
</style>