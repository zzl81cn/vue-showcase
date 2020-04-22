<template>
  <div id="app">
    <MyHeader :title="titleInfo" @transferUser="getUser"></MyHeader>
    <!--<ElHeader></ElHeader>-->
    <div>{{user}}</div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  import MyHeader from "./components/MyHeader";
  import ElHeader from "./components/ElHeader";
  import MyFooter from "./components/MyFooter";

  export default {
    name: "App",
    components: {
      MyHeader,
      ElHeader,
      MyFooter
    },
    data: function () {
      return {
        titleInfo: 'testTitle',
        user: ""
      }
    },
    methods: {
      getUser(msg) {
        this.user = msg
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  /* 用于占据整行的元素，带上下内边距 */
  .full-block {
    padding: 1rem 0;
  }
</style>
