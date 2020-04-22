<template>
  <div class="element-view">
    <header>
      <ul>
        <li><router-link to="/element/table">table</router-link></li>
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
