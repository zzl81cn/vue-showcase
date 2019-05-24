<template>
  <div class="father">
    <Child :message="name"></Child>
    <count></count>
    <count></count>
  </div>
</template>
/* https://jsfiddle.net/zzl81cn/wg4Lnfok/ */
<script>
  import Child from './Child.vue';
  import count from '../components/count';
  export default {
    components: {
      Child,
      count
    },
    data() {
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

