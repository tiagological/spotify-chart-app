import axios from 'axios';
import { data } from '../data/playlists';

export const grabToken = () => async dispatch => {
  const response = await axios.get('/spotify-authorization');

  let accessToken = response.data;

  dispatch({
    type: 'GRAB_TOKEN',
    payload: accessToken
  });
};

export const updateSearchTerm = searchTerm => {
  return {
    type: 'SEARCH_TERM',
    payload: searchTerm
  };
};

export const updateCountry = searchTerm => {
  return { type: 'COUNTRY_SELECTED', payload: searchTerm };
};

export const clearSearchTerm = () => {
  return {
    type: 'CLEAR_SEARCH'
  };
};

export const errorToggler = payload => {
  return {
    type: 'ERROR_TOGGLE',
    payload: payload
  };
};

export const fetchSongs = (token, searchTerm) => async dispatch => {
  const countrySearched = searchTerm.toLowerCase();

  let playlistId = '';

  for (let i = 0; i < data.length; i++) {
    if (data[i].country === countrySearched) {
      playlistId = data[i].id;
    }
  }

  if (playlistId.length < 1) {
    dispatch({
      type: 'ERROR_TOGGLE',
      payload: 'Sorry, that country was not found'
    });
  } else {
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      headers: {
        authorization: 'Bearer ' + token
      },
      params: {
        limit: 10
      }
    });

    let tracksData = [];

    if (response.data.items.length === 0) {
      dispatch({
        type: 'ERROR_TOGGLE',
        payload: 'Your search returned no results'
      });
    } else if (response.data.items.length > 0) {
      for (let i = 0; i < 10; i++) {
        tracksData.push(response.data.items[i]);
      }
    }

    dispatch({ type: 'FETCH_PLAYLISTS', payload: tracksData });
  }
};
