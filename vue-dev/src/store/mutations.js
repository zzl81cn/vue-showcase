/**
 * @description 4.vuex mutations
 * @param {*} state 
 * @param {*} payload 
 */

const mutationMsg = (state, payload) => {
  console.log('mutaition msg state ', state);
  /* {
      __ob__: Observer}
      info: "origin info"
      msg: "我是修改后的数据"
      ...
    } */
  console.log('mutaition msg payload ', payload);
  /* mutaition msg payload  {type: "mutationMsg", msg: "我是修改后的数据"} */
  state.msg = payload.msg
};

const mutationInfo = (state, payload) => {
  console.log('mutaition info state ', state);
  console.log('mutaition info payload ', payload);
  state.info = payload.info;
};

export {mutationMsg, mutationInfo}