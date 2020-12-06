<template>
  <span>Hello {{ message }}</span>
</template>
<script>
export default {
  name: "Child",
  props: ['message']
}
</script>
