import { combineReducers } from 'redux';
import film from './film';
import people from './people';
import person from './person';
import planet from './planet';
import species from './species';
import starship from './starship';
import vehicle from './vehicle';

export default combineReducers({
  people,
  person,
  planet,
  film,
  species,
  vehicle,
  starship,
});
