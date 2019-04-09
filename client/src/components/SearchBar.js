import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm, fetchSongs, clearSearchTerm } from '../actions';
import '../styles/SearchBar.css';

const SearchBar = props => {
  const searchFieldHandler = e => {
    e.preventDefault();
    props.updateSearchTerm(e.target.value);
  };

  let searchTerm = props.searchTerm;

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.fetchSongs(props.token, searchTerm);
      props.clearSearchTerm();
    }
  };

  return (
    <div className='ui one column centered grid' id='search-bar'>
      <form>
        <div className='ui input'>
          <input
            type='search'
            placeholder='Search for a country...'
            onKeyPress={onKeyPress}
            onChange={searchFieldHandler}
            value={props.searchTerm}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm, token: state.token };
};

export default connect(
  mapStateToProps,
  { updateSearchTerm, fetchSongs, clearSearchTerm }
)(SearchBar);
