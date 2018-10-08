const species = (
  state = {
    isFetching: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_SPECIES':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_SPECIES':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
};

export default species;
