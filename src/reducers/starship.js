const starship = (
  state = {
    isFetching: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_STARSHIP':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_STARSHIP':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
};

export default starship;
