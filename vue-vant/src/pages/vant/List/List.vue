<template>
  <div>
    <h5>van demo</h5>
    <div class="button">
      <van-button type="primary">xxx</van-button>
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
  }
}
</script>

<style scoped>

</style>
