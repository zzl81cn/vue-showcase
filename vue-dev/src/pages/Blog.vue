<template>
  <div id="blog">
    <div>公用部分{{ msg }}</div>
    <div>{{ count }}</div>
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Blog',
    data (){
      return {
        msg: 'I am a pages Blog.vue',
        localCount: 1
      }
    },
    methods: {
      add () {
        this.$store.commit(add)
      },
      dec () {
        this.$store.commit(dec)
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>
<style scoped>
  #home{width: 100%;margin: 0 auto;background-color: khaki;height: 400px}
</style>
