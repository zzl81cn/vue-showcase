<!--
    1. vue 的父子组件传参
    2. 组件
    3. fetch for created lifecycle
   -->

<template>
  <div>
    <Child :message="name"></Child>
    <Count></Count>
    <Count></Count>
  </div>
</template>

<script>
  import Child from './Child'
  import Count from '@/pages/Count'

  export default {
    name: "Father",
    components: {
      Count,
      Child
    },
    data () {
      return {
        posts: [],
        name: 'zzl81cn'
      }
    },
    created: function() {
      var vm = this;
      // this.fetchData();
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          vm.posts = data;
          console.log(vm.posts)
        })
    },
    methods: {
      fetchData: function() {
      }
    }
  }
</script>

<style scoped>

</style>
