<template>
  <button @click="changeTitle">switch {{originTitle}}</button>
</template>

<script>
export default {
  name: 'ChildHelloWorld',
  props: ['originTitle'],
  data () {
    return {
      title: 'newTitle'
    }
  },
  methods: {
    changeTitle () {
      this.$emit('childChange', this.title)
    }
  }
}
</script>

<style scoped>

</style>
