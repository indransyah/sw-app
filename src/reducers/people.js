const initialState = {
  isFetching: false,
  pagination: {
    next: null,
    previous: null,
    count: 0,
  },
  data: [],
};
const people = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_PEOPLE':
      return Object.assign({}, state, initialState);
    case 'REQUEST_PEOPLE':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_PEOPLE':
      return Object.assign({}, state, {
        isFetching: false,
        pagination: {
          next: action.data.next,
          previous: action.data.previous,
          count: action.data.count,
        },
        data: action.data.results,
      });
    default:
      return state;
  }
};

export default people;
