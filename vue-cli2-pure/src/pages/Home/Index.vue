<template>
  <div class="page-view">
    <van-nav-bar
      title="项目详情"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="goBack"
      @click-right="showShare"
      fixed
    ></van-nav-bar>
    <h1>Home</h1>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'HomeIndex',
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    goBack () {},
    showShare () {}
  }
}
</script>

<style scoped>

</style>
