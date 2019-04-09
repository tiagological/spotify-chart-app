import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import searchTermReducer from './searchTermReducer';
import grabTokenReducer from './grabTokenReducer';

export default combineReducers({
  tracks: songsReducer,
  searchTerm: searchTermReducer,
  token: grabTokenReducer
});
