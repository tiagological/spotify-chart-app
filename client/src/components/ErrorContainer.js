import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { errorToggler } from '../actions';
import '../styles/ErrorContainer.css';

const ErrorContainer = props => {
  const errorTogglerHandler = () => {
    props.errorToggler('');
  };

  const errorMessage =
    props.error !== '' ? (
      <div className='ui floating warning message'>
        <i className='close icon' onClick={errorTogglerHandler} />
        <div className='header'>{props.error}</div>
      </div>
    ) : null;

  return <div id='error-container'>{errorMessage}</div>;
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { errorToggler }
  )(ErrorContainer)
);
