const initialState = {
  isFetching: false,
  data: {},
  selectedFilmIndex: null,
  selectedSpeciesIndex: null,
  selectedStarshipIndex: null,
  selectedVehicleIndex: null,
};
const person = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_PERSON':
      return Object.assign({}, state, initialState);
    case 'REQUEST_PERSON':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_PERSON':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        selectedFilmIndex: action.selectedFilmIndex,
        selectedSpeciesIndex: action.selectedSpeciesIndex,
        selectedStarshipIndex: action.selectedStarshipIndex,
        selectedVehicleIndex: action.selectedVehicleIndex,
      });
    case 'CHANGE_FILMS_INDEX':
      return Object.assign({}, state, {
        selectedFilmIndex: action.index,
      });
    case 'CHANGE_SPECIES_INDEX':
      return Object.assign({}, state, {
        selectedSpeciesIndex: action.index,
      });
    case 'CHANGE_VEHICLES_INDEX':
      return Object.assign({}, state, {
        selectedVehicleIndex: action.index,
      });
    case 'CHANGE_STARSHIPS_INDEX':
      return Object.assign({}, state, {
        selectedStarshipIndex: action.index,
      });
    default:
      return state;
  }
};

export default person;
