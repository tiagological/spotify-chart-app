import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { errorToggler } from '../actions';

const Menu = () => {
  return (
    <div className='ui inverted top fixed secondary menu'>
      <div className='item'>
        <Link to='/'>
          <button className='ui inverted orange button'>Home</button>
        </Link>
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
