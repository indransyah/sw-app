const planet = (
  state = {
    isFetching: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_PLANET':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_PLANET':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
};

export default planet;
