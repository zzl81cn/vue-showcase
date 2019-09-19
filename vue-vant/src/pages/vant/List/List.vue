<template>
  <div>
    <h5>van demo</h5>
    <div class="button">
      <van-button type="primary" @click="checkHmt">xxx</van-button>
      <van-button type="warning">warning</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'List',
  components: {
    [Button.name]: Button
  },
  methods: {
    checkHmt () {
      if (window._hmt) {
        console.log('list', window._hmt)
      } else {
        console.log('no')
      }
    }
  }
}
</script>

<style scoped>

</style>
