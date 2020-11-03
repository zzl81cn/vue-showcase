<template>
  <div class="page-view">
    <router-link to="/" replace>back</router-link>
    <h2>Child</h2>
    <p>{{title}}</p>
    <child-hello-world :originTitle="title" @childChange="childChange"></child-hello-world>
    <Footer></Footer>
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
