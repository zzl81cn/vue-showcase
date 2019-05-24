/**
 * @description 5.vuex actions
 * @param {*} param0 
 */

/* export const changeMsg = ({commit}) => {
  commit({
    type: 'mutationMsg', //对应mutation.js中的mutationsMsg方法
    msg: '我是修改后的数据'
  })
} */
const changeMsg = ({ commit }) => {
  console.log('changeMsg commit', commit);
  /* 
    changeMsg commit is:
    ƒ boundCommit (type, payload, options) {
      return commit.call(store, type, payload, options)
    }
  */
  /* commit的对象参数作为mutations对应type的payload传过去 */
  commit({
    type: 'mutationMsg', //对应mutation.js中的mutationsMsg方法
    msg: '我是修改后的数据'
  })
}

const changeInfo = ({ commit }) => {
  commit({
    type: 'mutationInfo',
    info: 'changed info'
  })
}

export {changeMsg, changeInfo};