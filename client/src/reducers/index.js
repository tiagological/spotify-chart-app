import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import searchTermReducer from './searchTermReducer';
import grabTokenReducer from './grabTokenReducer';
import errorToggleReducer from './errorToggleReducer';
import countrySearchedReducer from './countrySearchedReducer';

export default combineReducers({
  tracks: songsReducer,
  searchTerm: searchTermReducer,
  token: grabTokenReducer,
  error: errorToggleReducer,
  countrySearched: countrySearchedReducer
});
