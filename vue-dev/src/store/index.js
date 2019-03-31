import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './rootState'

Vue.use(Vuex);

/*export default new Vuex.Store({
  state: {count: 0},
  mutations: {
    add: state => state.count++,
    dec: state => state.count--
  }
})*/

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
