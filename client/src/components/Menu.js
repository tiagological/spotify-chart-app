import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { errorToggler } from '../actions';

const Menu = props => {
  const resultsHandler = () => {
    if (props.tracks.length < 1) {
      props.errorToggler('Please search for a country first');
    }
  };
  return (
    <div className='ui inverted top fixed secondary menu'>
      <div className='item'>
        <Link to='/'>
          <button className='ui inverted orange button'>Home</button>
        </Link>
      </div>
      <div className='right menu'>
        <div className='item'>
          <Link to='/results'>
            <button
              className='ui inverted orange button'
              onClick={resultsHandler}>
              Results
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    tracks: state.tracks
  };
};

export default connect(
  mapStateToProps,
  { errorToggler }
)(Menu);
