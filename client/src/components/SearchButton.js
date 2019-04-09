import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs, grabToken, clearSearchTerm } from '../actions';
import '../styles/SearchButton.css';

class SearchButton extends React.Component {
  componentDidMount = () => {
    this.props.grabToken();
  };

  fetchSongsHandler = () => {
    const token = this.props.token;
    const searchTerm = this.props.searchTerm;
    if (searchTerm.length < 1) {
      alert('Please enter a country');
    } else {
      this.props.fetchSongs(token, searchTerm);
      this.props.clearSearchTerm();
    }
  };

  render() {
    return (
      <div className='ui one column centered grid' id='search-button'>
        <button className='ui button orange' onClick={this.fetchSongsHandler}>
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { fetchSongs, grabToken, clearSearchTerm }
)(SearchButton);
