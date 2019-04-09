/* export const changeMsg = ({commit}) => {
  commit({
    type: 'mutationMsg', //对应mutation.js中的mutationsMsg方法
    msg: '我是修改后的数据'
  })
} */
const changeMsg = ({ commit }) => {
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