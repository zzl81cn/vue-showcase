/**
 * store(vuex)
  */

import Vue from 'vue'
import Vuex from 'vuex'

/* index.js、mutations.js、actions.js、getters.js及rootState.js */
import state from './rootState'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

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
});
