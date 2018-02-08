<template>
 <vue-q-art :config="config"></vue-q-art>
</template>
<script>
import VueQArt from 'vue-qart'
import qrcodeImg from '@/assets/images/logo.png'

export default {
  data () {
    return {
      qrcodeImg: qrcodeImg,
      config: {
        value: 'https://www.baidu.com',
        imagePath: qrcodeImg,
        filter: 'color'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  components: { VueQArt }

}
</script>


