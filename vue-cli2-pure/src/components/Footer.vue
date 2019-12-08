<template>
  <ul id="footer">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/child">Child</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
  #footer {
    display: flex;
    list-style: none;
    padding: 10px;
    li {
      display: flex;
      flex: 1;
      justify-content: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
</style>
