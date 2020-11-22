import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    statictics: 0,
    dou: 5,
    tabs: [],
    curContextTabId: "",
    activeTabItem: ""
  },
  mutations: {
    add: state => state.count++,
    dec: state => state.count--,
    // mutation传参(朴实无华的方式 )
    incrementStatictics: (state, n) => {
      // n是从组件中传来的参数
      state.statictics += n;
    },
    // 对象风格提交参数
    decrementStatictics: (state, payload) => {
      state.statictics -= payload.amount
    },
    plusDou: (state, n) => {
      state.dou += n;
    }
  },
  actions: {
    plusDouAction(context, args) {
      context.commit("plusDou", args)
    },
    // 保存右键点击tab的id
    saveCurContextTabId(state, curContextTabId) {
      state.curContextTabId = curContextTabId
    },
    // 关闭所有标签
    closeAllTabs(state) {
      state.tabs = [];
      this.commit("switchTab", "adminIndex")
      router.push("/home")
    },
    // 关闭其它标签页
    closeOtherTabs(state, par) {
      let tabs = state.tabs;
      let length = tabs.length;
      let curContextTabId = state.curContextTabId;
      let activeTabItem = state.activeTabItem
      console.log(activeTabItem)
      let id; // 右键点击时的tab在整个tabs数组中的id
      let curId // 左键点击时的tab在整个tabs数组中的id
      tabs.forEach((tab, index) => {
        if (tab.id == curContextTabId) {
          id = index
        }
        if (tab.id == activeTabItem) {
          curId = index
        }
      })
      //  console.log(id, curId)
      //  return
      if (par == "left") {
        if (id > curId) {
          this.commit("switchTab", curContextTabId)
          router.push(tabs[id].path)
        }
        state.tabs = state.tabs.slice(id, length)
      }
      if (par == "right") {
        if (id < curId) {
          this.commit("switchTab", curContextTabId)
          router.push(tabs[id].path)
        }
        state.tabs = state.tabs.slice(0, id + 1)
      }
      if (par == "other") {
        state.tabs = [state.tabs[curId]]
      }
    }
  }
})
