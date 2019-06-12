<template>
  <div class="full-block">This is Father components tarnsfer to Child components {{ message }}</div>
</template>

<script>
  export default {
    name: "Child",
    props: ['message']
  }
</script>

<style scoped>

</style>
