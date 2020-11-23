<template>
  <div class="tab-view">
    <el-tabs
      :value="activeTabItem"
      @tab-remove="closeTab"
      @tab-click="tabClick"
      @contextmenu.prevent.native="openContextMenu($event)"
    >
      <el-tab-pane label="首页" name="adminIndex"></el-tab-pane>
      <el-tab-pane
        v-for="item in tabs"
        :label="item.label"
        :key="item.id"
        :name="item.id"
        :closable="item.closable"
      >
      </el-tab-pane>
    </el-tabs>
    <ul v-show="contextMenuVisible"
      :style="{left:left+'px',top:top+'px'}"
      class="contextmenu"
    >
      <li @click="closeAllTabs()">关闭所有</li>
      <li @click="closeOtherTabs('left')">关闭左边</li>
      <li @click="closeOtherTabs('right')">关闭右边</li>
      <li @click="closeOtherTabs('other')">关闭其他</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data () {
    return {
      tabs: [],
      contextMenuVisible: false,
      left: "",
      top: ""
    }
  },
  watch: {
    contextMenuVisible(value) {
      if (this.contextMenuVisible) {
        document.body.addEventListener("click", this.closeContextMenu);
      } else {
        document.body.removeEventListener("click", this.closeContextMenu);
      }
    }
  },
  methods: {
    openContextMenu(e) {
      console.log(e.srcElement);
      if (e.srcElement.id) {
        let currentContextTabId = e.srcElement.id.split("-")[1];
        this.contextMenuVisible = true;
        this.$store.commit("saveCurContextTabId", currentContextTabId);
        this.left = e.clientX;
        this.top = e.clientY + 10;
      }
    },
    // 关闭所有标签页
    closeAllTabs() {
      this.$store.commit("closeAllTabs");
      this.contextMenuVisible = false;
    },
    // 关闭其它标签页
    closeOtherTabs(par) {
      this.$store.commit("closeOtherTabs", par);
      this.contextMenuVisible = false;
    },
    // 关闭contextMenu
    closeContextMenu() {
      this.contextMenuVisible = false;
    },
  }
}
</script>

<style lang="css" scoped>
.contextmenu {
  width: 100px;
  margin: 0;
  border: 1px solid #ccc;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
}
.contextmenu li {
  margin: 0;
  padding: 7px 16px;
}
.contextmenu li:hover {
  background: #f2f2f2;
  cursor: pointer;
}
</style>