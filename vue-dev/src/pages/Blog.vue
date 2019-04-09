<template>
  <div id="blog">
    <!--<div>公用部分{{ msg }}</div>
    <div>{{ count }}</div>
    <button @click="add">+</button>
    <button @click="dec">-</button>-->
    <button @click="changeMsg">changeMsg</button>
    <p>getterMsg中的数据是 {{ getterMsg }}</p>
    <p>getterInfo中的数据是 {{ getterInfo }}，这个数据在首页修改</p>
    <router-view></router-view>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: 'Blog',
    data () {
      return {
        msg: 'I am a pages Blog.vue',
        localCount: 1
      }
    },
    computed: {...mapGetters(['getterMsg', 'getterInfo'])}, //对应getters.技术中的gettersMsg
    methods: {...mapActions(['changeMsg'])} //对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
    /*methods: {
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
    }*/
  }
</script>
<style scoped>
  #blog{width: 100%;margin: 0 auto;background-color: rgb(226, 226, 226);height: 400px}
</style>
