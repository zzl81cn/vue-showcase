const mutationMsg = (state, payload) => {
  state.msg = payload.msg
};

const mutationInfo = (state, payload) => {
  state.info =payload.info
};

export {mutationMsg, mutationInfo}