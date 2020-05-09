<template>
  <div class="element-view">
    <header>
      <ul class="second-nav-list">
        <li><router-link to="/element/table">table</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree">Tree</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree-inline">TreeInline(rc)</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import twinListData from '../../../static/twinListData.json'
  export default {
    name: "elementIndex",
    data () {
      return {
        allreadyData: [
          {
            "field_code": "abc",
            "field_name": "123"
          }
        ],
        aTwinListData: twinListData.data,
        aPro: []
      }
    },
    methods: {
      process() {
        // console.log('h')
        let tempData = this.aTwinListData.concat(this.allreadyData)
        for (let i=0, len = tempData.length; i<len; i++) {
          for (let j=i+1; j<len; j++) {
            if (tempData[i].hasOwnProperty('type')) {
              console.log('te', i, tempData[i], tempData[i] == tempData[j], tempData[i].field_code, tempData[j].field_code)
              if (tempData[i].field_alias === tempData[j].field_alias) {
                tempData.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
              }
            } else {
              if (tempData[i].field_code === tempData[j].field_code && (!tempData[j].hasOwnProperty('type'))) {
                tempData.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
              }
            }
          }
        }
        this.aPro = tempData
      }
    },
    mounted() {
      this.process()
    }
  }
</script>

<style scoped>
</style>
