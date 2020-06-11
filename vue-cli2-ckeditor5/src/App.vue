<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">home</router-link>
      <router-link to="/ckeditor-doc">ckeditor doc</router-link>
    </div>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  .nav {
    padding: 5px 10px;
  }
</style>
