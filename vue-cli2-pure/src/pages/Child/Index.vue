<template>
  <div class="page-view">
    <Footer></Footer>
    <h2>Child</h2>
    <p>{{title}}</p>
    <child-hello-world :originTitle="title" @childChange="childChange"></child-hello-world>
  </div>
</template>

<script>
import ChildHelloWorld from '@/pages/Child/components/ChildHelloWorld'
import Footer from '@/components/Footer'
export default {
  name: 'Index',
  components: {
    Footer,
    ChildHelloWorld
  },
  data () {
    return {
      title: 'normal'
    }
  },
  methods: {
    childChange (title) {
      this.title = title !== 'normal' ? title : 'newTitle'
    }
  }
}
</script>

<style scoped>

</style>
