<template>
  <div id="AppInside">
    <img src="./assets/file-logo.png">
    <MyHeader></MyHeader>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <p>Test {{ getterMsg }}</p>
    <p>TestInfo {{ getterInfo }}</p>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyHeader from '@/components/MyHeader';
// import xxx from  '@/components/xxx' 中的@表示src，在webpack的resolve中alias（别名）配置
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
import MyFooter from '@/components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  /* 通过计算属性引入vuex的mapGetters对应的getters */
  computed: {...mapGetters(['getterMsg', 'getterInfo'])}
}
</script>

<style>
#AppInside {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
