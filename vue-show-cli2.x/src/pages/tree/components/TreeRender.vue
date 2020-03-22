<template>
  <span class="el-co">
    <span class="el-icon-document">
      <!--{this.showOrEdit(data)}-->
      {{DATA.label}}
    </span>
    <div class="tree_node_op" style="float:right">
      <!--<i class="el-icon-edit" @click.stop="nodeEdit(ev, STORE, DATA)"></i>-->
      <i class="el-icon-edit" @click.stop="nodeEdit(DATA, NODE, STORE)"></i>
      <i class="el-icon-delete" @click.stop="nodeDelete(NODE, DATA)"></i>
      <i class="el-icon-upload2" @click.stop="nodeUp(NODE, DATA)"></i>
      <i class="el-icon-download" @click.stop="nodeDown(STORE, NODE, DATA)"></i>
      <i class="el-icon-plus" @click.stop="nodeAppend(STORE, NODE, DATA)"></i>
    </div>
  </span>
</template>

<script>
  export default {
    name: "TreeRender",
    props: ['NODE', 'DATA', 'STORE'],
    methods: {
      /* 编辑 */
      nodeEdit(data, node, store) {
        // console.log('ev', ev)
        this.$emit('nodeEdit', data, node, store)
      },
      nodeDelete(node, data) {
        this.$emit('nodeDelete', node, data)
      },
      nodeUp(node, data) {
        this.$emit('nodeUp', node, data)
      },
      nodeDown(store, node, data) {
        this.$emit('nodeDown', store, node, data)
      },
      nodeAppend(store, node, data) {
        this.$emit('nodeAppend', store, node, data)
      },
      /*showOrEdit(data) {
        if (data.isEdit) {
          return <input type="text" value={data.label} on-blur={ev => this.edit_sure(ev, data)}/>
        } else {
          return <span className="node_labe">{data.label}</span>
        }
      }*/
    }
  }
</script>

<style scoped>

</style>
