import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    statictics: 0,
    dou: 5
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
    }
  }
})
