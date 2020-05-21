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
    <ChildSlot>
      <h1>123</h1>
    </ChildSlot>
  </div>
</template>

<script>
  import Child from './Child'
  import ChildSlot from "./ChildSlot";
  import Count from '@/pages/Count'

  export default {
    name: "Father",
    components: {
      Count,
      Child,
      ChildSlot
    },
    data () {
      return {
        posts: [],
        name: 'zzl81cn',
        arr1: ['abc', 'def'],
        arr2: ['def', 'abc', 1]
      }
    },
    /*created: function() {
      this.fetchData()
    },*/
    mounted() {
      this.compare()
    },
    methods: {
      fetchData: function() {
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
      compare() {
        let arr1 = JSON.parse(JSON.stringify(this.arr1))
        let arr2 = JSON.parse(JSON.stringify(this.arr2))
        for (let i = 0, alen = arr1.length; i < alen; i++) {
          for (let j = 0, blen = arr2.length; j < blen; j++) {
            if (arr1[i] ===  arr2[j]) {
              console.log('j', j);
              // console.log('if', aData[i].field_alias, bData[j].field_alias, aData[i].field_alias.indexOf(bData[j].field_alias) !== -1)
              arr1.splice(i, 1);
              i = j === ( blen - 1) ? (i - 1) : i;
              j = 0;
              alen--
            }
          }
        }
        if (arr1.length === 0) {
          console.log('haha')
        } else {
          console.log('ahah')
        }
      }
    }
  }
</script>

<style scoped>

</style>
