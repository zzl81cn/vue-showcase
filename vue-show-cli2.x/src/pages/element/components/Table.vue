<template>
  <el-table :data="tableData"
    highlight-current-row	
    :row-key="getRowKeys"
    :expand-row-keys="expands"
    @expand-change="exChange"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table :data="props.row.value">
          <el-table-column prop="title" label="title"></el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="name"></el-table-column>
  </el-table>
  <!-- <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div> -->
</template>

<script>
  export default {
    name: "Table",
    data() {
      return {
        tableData: [],
        getRowKeys: (row) => { //获取当前行id
          // console.log(row)
          return row.id   //这里看这一行中需要根据哪个属性值是id
        },
        expands: []
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      exChange(row, rowList) {
        let that = this
        console.log('exChange', row)
        // 只展开一行//说明展开了
        if (rowList.length) {
          that.expands = []
          if (row) {
            that.expands.push(row.id)
          }
          //  this.tablaData(row.eqId)  这里可以调用接口数据渲染
        } else {
          // 说明收起了
          that.expands = []
        }
      }
    },
    created () {
      var list = [];
      for(var index = 0; index < 10; index++){
        var item = {
          id: index + 10000,
          checked: false,
          name: 'test' + index,
          role: 'developer',
          sex: 'Man',
          date: '2019-05-01',
          time: 1556677810888 + index * 500,
          region: 'ShenZhen',
          address: 'address abc' + index,
          value: [
            {
              title: 'testNestTitle' + index,
              type: 'testNestType' + index
            }
          ]
        }
        list.push(item)
      }
      this.tableData = list
    }
  }
</script>

<style scoped>

</style>
