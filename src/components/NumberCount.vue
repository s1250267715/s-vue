<template>
	<div id="number-count">
		<i class="left" :class="{disabled:count<=min}" @click.stop.prevent="change(-1)">-</i> {{count}}
		<i class="right" @click.stop.prevent="change(1)">+</i>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    count: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: Number,
    text: {
      type: String,
      default: '超出最大值'
    }
  },
  data  () {
    return {}
  },
  methods: {
    ...mapMutations('common', ['showToast']),
    change (s) {
      let nextCount = this.count
      console.log(s, 'sign')
      if (s > 0) {
        nextCount += this.step
        if (nextCount > this.max) {
          this.showToast({
            text: this.text
          })
          return false
        }
      } else {
        nextCount -= this.step
        if (nextCount < this.min) {
          this.showToast({
            type: 'cancel',
            text: '超出最小值'
          })
          return false
        }
      }
      console.log(nextCount)
      this.$emit('update:count', nextCount)
      this.$emit('change', nextCount)
      this.$emit('add')
    }
  }
}
</script>

<style lang="less">
#number-count {
  text-align: center;
  font-size: 30px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  .left {
    float: left;
    font-size: 44px;
    width: 35px;
    height: 100%;
    line-height: 35px;
    border: 1px solid #ddd;
  }
  .right {
    float: right;
    font-size: 35px;
    width: 35px;
    height: 100%;
    line-height: 35px;
    border: 1px solid #ddd;
  }
  .disabled {
    color: #999;
  }
}
</style>