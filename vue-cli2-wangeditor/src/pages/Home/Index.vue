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
    <Footer></Footer>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import Footer from '@/components/Footer'
export default {
  name: 'HomeIndex',
  components: {
    [NavBar.name]: NavBar,
    Footer
  },
  methods: {
    goBack () {},
    showShare () {}
  }
}
</script>

<style scoped>

</style>
