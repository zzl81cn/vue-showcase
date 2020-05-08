<template>
  <div class="element-view">
    <header>
      <ul class="second-nav-list">
        <li><router-link to="/element/table">table</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree">Tree</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree-inline">TreeInline(rc)</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "elementIndex"
  }
</script>

<style scoped>
</style>
