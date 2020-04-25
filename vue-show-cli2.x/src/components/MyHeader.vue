<template>
  <div id="header" class="wrap">
    <div class="logo-box">
      <h1 class="logo">
        <router-link to="/">logo
          <!--<img src="@/assets/logo.png" alt width="100">-->
        </router-link>
      </h1>
    </div>
    <div class="top-nav">
      <div id="navList" class="navlist-wrap">
        <ul class="navlist clearfix">
          <li class="nav-btn">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/father">Father</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/element">Element</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/drag-table">dragTable</router-link>
          </li>
          <li class="nav-btn">
            <span>{{title}}</span>
          </li>
          <li class="nav-btn">
            <span>test</span>
            <input type="text" v-model="username" @change="setUser"> <!-- 1.当<input>的值发生变化的时候，将 username 传递给 App.vue

首先声明一个了方法 setUser，用 change 事件来调用 setUser -->
          </li>
        </ul>
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
<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: row;

  background-color: #fcfcfc;
}
.logo-box {
  display: flex;
  /*width: 1105px;*/
  /*margin: 0 auto;*/
  /*height: 111px;*/
  padding: 5px 0;
  position: relative;
  *z-index: 1;
  .logo {
    /*width: 300px;*/
    /*height: 100px;*/
    margin-left: 10px;
    font-size: 18px;
    height: initial;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.top-nav .navlist .nav-btn {
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #666;
  vertical-align: middle;
  text-decoration: none;
  font-size: large;
}
</style>
