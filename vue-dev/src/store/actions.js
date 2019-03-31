export const changeMsg = ({commit}) => {
  commit({
    type: 'mutationMsg',
    msg: '我是修改后的数据'
  })
}
