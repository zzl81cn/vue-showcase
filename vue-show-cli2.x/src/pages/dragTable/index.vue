<template>
  <el-row>
    <el-col :span="12">xx</el-col>
    <el-col :span="12">xx</el-col>
  </el-row>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        params: {
          data: {
            table_id: 'sdfsdf',
            tr: {
              sort: [
                {sdfs: 'sdfsdf'},
                {sdfs: 'sdfsdf'},
              ]
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
