const film = (
  state = {
    isFetching: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_FILM':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_FILM':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
};

export default film;
