<template>
  <div>
    <!-- height="400" -->
    <vxe-table
      row-id="id"
      :data="tableData"
      :expand-config="{expandRowKeys: ['1']}">
      <vxe-table-column type="expand" width="60">
        <template v-slot:content="{ row, rowIndex }">
          <template v-if="rowIndex <= 5">
            <!--<vxe-table
              border
              :data="tableData">
              <vxe-table-column field="role" title="Role"></vxe-table-column>
              <vxe-table-column field="date" title="Date"></vxe-table-column>
            </vxe-table>-->
            <vxe-table
              border
              :data="row.nest">
              <vxe-table-column field="nestTitle" title="nestTitle"></vxe-table-column>
              <vxe-table-column field="nestType" title="nestType"></vxe-table-column>
            </vxe-table>
          </template>
          <template v-else>
            <ul>
              <li>
                <span>ID：</span>
                <span>{{ row.id }}</span>
              </li>
              <li>
                <span>Name：</span>
                <span>{{ row.name }}</span>
              </li>
              <li>
                <span>UpdateTime：</span>
                <span>{{ row.updateTime }}</span>
              </li>
              <li>
                <span>CreateTime：</span>
                <span>{{ row.createTime }}</span>
              </li>
            </ul>
          </template>
        </template>
      </vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="date" title="Date"></vxe-table-column>
    </vxe-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created () {
      var list = []
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
          nest: [
            {
              nestTitle: 'testNestTitle' + index,
              nestType: 'testNestType' + index
            }
          ]
        }
        list.push(item)
      }
      this.tableData = list
    }
  }
</script>
