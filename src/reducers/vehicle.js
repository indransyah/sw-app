const vehicle = (
  state = {
    isFetching: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_VEHICLE':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_VEHICLE':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
};

export default vehicle;
