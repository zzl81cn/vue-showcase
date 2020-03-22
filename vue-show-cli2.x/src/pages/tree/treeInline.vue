<template>
  <div>
    <div class="exam_structure">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      <el-button type="primary" size="small" class="add_new_question" @click="add_new_question"><i></i>添加父节点</el-button>
    </div>
    <div class="question_info_lists">
      <el-tree ref="tree" :key="tree_key" :data="treeData" node-key="id" :render-content="renderContent" :expand-on-click-node="false" :default-expanded-keys="defaultExpand" show-checkbox :filter-node-method="filterNode"></el-tree>
      <el-row class="add_question" v-show="add_question_flag">
        <el-col :span="12">
          <el-input v-model="new_question_name" placeholder="请输入大题名称"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button size="mini" class="btn_sure" @click.stop="add_question_sure">确定</el-button>
          <el-button size="mini" class="btn_cancel" @click.stop="add_question_cancel">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="修改节点" :visible.sync="dialogTreeEdit">
      <el-row>
        <el-col>
          <el-input  v-if="curData" v-model="curData"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" sizi="mini">ok</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  /** https://blog.csdn.net/qq_37818095/article/details/86299336
    * https://segmentfault.com/a/1190000011574698, single tree components event with transform
   * */
  import TreeRender from './components/TreeRender'
  import treeDataLev from '../../../static/treeDataLev.json'
  export default {
    name: "tree1",
    components: {
      TreeRender
    },
    data () {
      return {
        dialogTreeEdit: false, /* 树组件修改弹窗 */
        filterText: '',
        treeData: treeDataLev.data,
        add_question_flag: false,
        new_question_name: '',
        tree_key: 0,
        defaultExpand: [],
        curData: null,
        curNode: null
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      // 添加新大题
      add_new_question() {
        this.add_question_flag = true
      },
      //确定
      add_question_sure() {
        const nodeObj = {id: '', label: this.new_question_name, isEdit: false, children: []}
        this.treeData.push(nodeObj)
        this.add_question_flag = false
      },
      //取消
      add_question_cancel() {
        this.add_question_flag = false
        this.new_question_name = ''
      },
      // 结构树操作group node,
      renderContent(h, {node, data, store}) {
        let that = this
        return h(TreeRender, {
          props: {
            DATA: data,
            NODE: node,
            STORE: store
          },
          on: {
            nodeEdit: ((data, node, store) => that.nodeEdit(data, node, store)),
            nodeDelete: ((node, data) => that.nodeDelete(node, data)),
            nodeUp: ((node, data) => that.nodeUp(node, data)),
            nodeDown: ((store, node, data) => that.nodeDown(store, node, data)),
            nodeAppend: ((store, node, data) => that.nodeAppend(store, node, data))
          }
        })
      },
      // 增加
      nodeAppend(store, node, data) {
        var maxid = '20'
        //新增数据
        const nodeapp = {id: ++maxid, label: '增加节点', isEdit: false, children: []}
        data.children.push(nodeapp)
        if (!node.expanded) {
          node.expanded = true
        }
        const parent = node.parent
        const children = parent.data
        const cIndex = children.findIndex(d => d.id === data.id)
        const tempChildrenNodex2 = children[cIndex]  //拿到被添加的上一级
        console.log(tempChildrenNodex2.children[cIndex - 1])
      },
      // 修改
      /*nodeEdit(ev, store, data) {
        data.isEdit = true
        this.$nextTick(() => {
          const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
          !$input ? '' : $input.focus()
        })
      },*/
      nodeEdit(data, node, store) {
        console.log('nodeEdit', data, node, store, 'node.parent', node.parent)
        this.dialogTreeEdit = true
        this.curData = data.label
      },
      edit_sure(ev, data) {
        const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
        if (!$input) {
          return false
        } else {
          data.label = $input.value
          data.isEdit = false
        }
      },
      // 节点删除
      nodeDelete(node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },
      // 节点上移
      nodeUp(node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const cIndex = children.findIndex(d => d.id === data.id)
        if (parent.level === 0 && cIndex === 0) {
          return
        } else if (parent.level !== 0 && cIndex === 0) { //不同父节点中移动
          alert('不同父节点中移动')
          // const parent2 = parent.parent
          // const children2 = parent2.data.children || parent2.data
          // const pIndex2 = parseInt(children2.findIndex(p => p.id === parent.data.id), 10) - 1
          // if (pIndex2 < 0) return
          // children2[pIndex2].children.push(data)
          // children.splice(cIndex, 1)
          // this.defaultExpand[0] = children2[pIndex2].id
        } else if ((parent.level === 0 && cIndex !== 0) || (parent.level !== 0 && cIndex !== 0)) {
          const tempChildrenNodex1 = children[cIndex - 1]
          const tempChildrenNodex2 = children[cIndex]
          this.$set(children, cIndex - 1, tempChildrenNodex2)
          this.$set(children, cIndex, tempChildrenNodex1)
          this.defaultExpand[0] = data.id
        }
        this.tree_key++
      },
      /* 仅限于根一级目录节点 */
      handleRootNodeDown (data, node, store) {
        let allData = store.data
        let allDataLen = allData.length
        let currentTarget = node.data
        let currentTargetIdx = allData.findIndex(item => currentTarget.id.toString() === item.id.toString())
        if (currentTargetIdx !== -1) {
          if (currentTargetIdx < allDataLen -1) {
            let tempTarget = allData[currentTargetIdx + 1]
            console.log('Move down successfuly', tempTarget)
            /* target Id */
          } else {
            console.log('is last not move down')
          }
        }
      },
      // 节点下移
      nodeDown(store, node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const cIndex = children.findIndex(d => d.id === data.id)
        const cLength = children.length - 1 // 最边上的节点
        const allLevel = store.data.length - 1 // 树的深度
        if (parent.level === allLevel && cIndex === cLength) { // 最最末的节点
          return
        } else if (parent.level !== allLevel && cIndex === cLength) { //父节点不同
          alert('不能移动')
          // const parent2 = parent.parent
          // const children2 = parent2.data.children || parent2.data
          // const pIndex2 = parseInt((children2.findIndex(p => p.id === parent.data.id)), 10)
          // if (pIndex2 === allLevel) return
          // children2[pIndex2 + 1].children.push(data)
          // children.splice(cIndex, 1)
          // this.defaultExpand[0] = children2[pIndex2 + 1].id
        } else if ((parent.level === allLevel && cIndex !== cLength) || (parent.level !== allLevel && cIndex !== cLength)) { // 父节点相同
          const tempChildrenNodex1 = children[cIndex + 1]
          const tempChildrenNodex2 = children[cIndex]
          this.$set(children, cIndex + 1, tempChildrenNodex2)
          this.$set(children, cIndex, tempChildrenNodex1)
          this.defaultExpand[0] = data.id
        }
        this.tree_key++
      }
    }
  }
</script>

<style>
  .tree_node_op {
    display: none;
  }
.el-tree-node__content:hover .tree_node_op {
  display: block;
}
</style>
