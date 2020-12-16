<template>
  <div class="element-view">
    <header>
      <ul class="second-nav-list">
        <li><router-link to="/element/tabs">tabs</router-link></li>
        <li><router-link to="/element/table">table</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree">Tree</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree-inline">TreeInline(rc)</router-link></li>
        <li class="nav-btn"><router-link to="/element/tree-check-single">TreeCheckSingle</router-link></li>
        <li class="nav-btn"><router-link to="/element/nav-menu">navMenu</router-link></li>
        <li class="nav-btn"><router-link to="/element/nav-nest">navNest</router-link></li>
        <!-- <li class="nav-btn"><router-link to="/element/tree-transfer">treeTransfer</router-link></li> -->
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
          /*{
            "field_code": "def",
            "field_alias": "count_def",
            "field_name": "456",
            "type": "count"
          },*/
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
        this.aPro = []
        // console.log('h')
        // debugger
        // let tempData = this.aTwinListData.concat(this.allreadyData)
        /*for (let i=0, len = tempData.length; i<len; i++) {
          for (let j=i+1; j<len; j++) {
            if (tempData[i].hasOwnProperty('type')) {
              console.log('te', i, tempData[i], tempData[i].field_alias === tempData[j].field_alias, tempData[i].field_code, tempData[j].field_code)
              if (tempData[i].field_alias.indexOf(tempData[j].field_alias) !== -1) {
                tempData.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
              }
            } else {
              if (tempData[i].field_code.indexOf(tempData[j].field_code) !== -1 && (!tempData[j].hasOwnProperty('type'))) {
                tempData.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
              }
            }
          }
        }*/
        let aData = this.aTwinListData
        let bData = this.allreadyData
        for (let i = 0, alen = aData.length; i < alen; i++) {
          for (let j = 0, blen = bData.length; j < blen; j++) {
            if (aData[i].hasOwnProperty('type') && bData[j].hasOwnProperty('type')) {
              console.log('if', aData[i].field_alias, bData[j].field_alias, aData[i].field_alias.indexOf(bData[j].field_alias) !== -1)
              if (aData[i].field_alias.indexOf(bData[j].field_alias) !== -1) {
                aData.splice(i, 1);
                i = j === ( blen - 1) ? (i - 1) : i;
                j = 0;
                alen--
              }
            } else {
              console.log('else', aData[i].field_code, bData[j].field_code, aData[i].field_code.indexOf(bData[j].field_code) !== -1)
              if (aData[i].field_code.indexOf(bData[j].field_code) !== -1 && (!aData[i].hasOwnProperty('type'))) {
                aData.splice(i, 1);
                i = j === ( blen - 1) ? (i - 1) : i;
                j = 0;
                alen--
              }
            }
          }
        }
          this.aPro = aData
      }
    },
    mounted() {
      this.process()
    }
  }
</script>

<style scoped>
</style>
