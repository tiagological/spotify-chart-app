import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  fetchSongs,
  grabToken,
  clearSearchTerm,
  updateSearchTerm,
  updateCountry,
  errorToggler
} from '../actions';
import '../styles/SearchField.css';

class SearchField extends React.Component {
  componentDidMount = () => {
    this.props.grabToken();
  };

  searchFieldProcessor = () => {
    if (this.props.searchTerm.length < 1) {
      this.props.errorToggler('Please enter a country');
    } else {
      this.props.errorToggler('');
      this.props.fetchSongs(this.props.token, this.props.searchTerm);
      this.props.clearSearchTerm();
    }
  };

  fetchSongsHandler = () => {
    this.searchFieldProcessor();
  };

  searchFieldUpdater = e => {
    e.preventDefault();
    this.props.updateSearchTerm(e.target.value);
    this.props.updateCountry(e.target.value);
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.searchFieldProcessor();
      this.props.history.push('/results');
    }
  };

  render() {
    return (
      <div>
        <div className='ui one column centered grid' id='search-bar-container'>
          <div className='ui icon input'>
            <input
              className='prompt'
              id='search-bar'
              type='text'
              placeholder='Search for a country...'
              onKeyPress={this.onKeyPress}
              onChange={this.searchFieldUpdater}
              value={this.props.searchTerm}
              required
            />
          </div>
        </div>

        <div
          className='ui one column centered grid'
          id='search-button-container'>
          <Link to='/results'>
            <button
              className='ui button orange'
              id='search-button'
              onClick={this.fetchSongsHandler}>
              Search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    token: state.token,
    error: state.error,
    tracks: state.tracks
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchSongs,
      grabToken,
      clearSearchTerm,
      updateSearchTerm,
      updateCountry,
      errorToggler
    }
  )(SearchField)
);
