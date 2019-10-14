<template>
  <div class="global-footer">
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'List'}">vant</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
