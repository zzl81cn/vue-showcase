<template>
    <div id="MyFooter">
      <span>Copyright &copy; <a href="">zzl81cn</a> All rights reserved</span>
      <button @click="routerHome">home</button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        methods: {
          /* 编程式路由 https://router.vuejs.org/zh/guide/essentials/navigation.html */
          routerHome() {
            this.$router.push({
              path: '/'
            })
          }
        }
    }
</script>

<style scoped>
  #MyFooter{height:50px;position:fixed;bottom:0px;left: 0px;background-color: #eeeeee;width: 100%;padding-top: 10px;}
</style>
