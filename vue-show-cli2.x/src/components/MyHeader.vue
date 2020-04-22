<template>
  <div id="header" class="wrap">
    <div class="header">
      <h1 class="logo">
        <!--<router-link to="/">
          <img src="@/assets/logo.png" alt width="100">
        </router-link>-->
        logo
      </h1>
    </div>
    <div class="top-nav">
      <div id="navList" class="navlist-wrap">
        <div class="navlist clearfix">
          <span class="nav-btn">
            <router-link to="/">Home</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/about">About</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact">Contact</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/father">Father</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/element">Element</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/tree">Tree</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/tree-inline">TreeInline</router-link>
          </span>
          <span class="nav-btn">
            <span>{{title}}</span>
          </span>
          <span class="nav-btn">
            <span>test</span>
            <input type="text" v-model="username" @change="setUser"> <!-- 1.当<input>的值发生变化的时候，将 username 传递给 App.vue

首先声明一个了方法 setUser，用 change 事件来调用 setUser -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data: function() {
    return {
      "nav-btn": "nav-btn",
      username: ""
    };
  },
  props: ['title'],
  methods: {
    /* this.$emit('hook', value) 这种子组件的事件抛出一个值[https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC] */
    setUser: function() {
      this.$emit('transferUser', this.username)
    }
  }
};
</script>
<style scoped>
#header {
  display: flex;
  flex-direction: row;

  background-color: #fcfcfc;
}
.header {
  display: flex;
  /*width: 1105px;*/
  /*margin: 0 auto;*/
  /*height: 111px;*/
  padding: 10px 0;
  position: relative;
  *z-index: 1;
}
.header .logo {
  /*width: 300px;*/
  /*height: 100px;*/
  margin-left: 10px;
  font-size: 18px;
  height: initial;
}
.top-nav .navlist-wrap {
  /*width: 1050px;*/
  margin: 0 auto;
  position: relative;
}
.top-nav .navlist {
  /*position: absolute;*/
  /*right: 130px;*/
  /*top: -40px;*/
}
.top-nav .navlist .nav-btn {
  float: left;
  margin-left: 60px;
  color: #666;
  vertical-align: middle;
  text-decoration: none;
  font-size: large;
}
</style>
