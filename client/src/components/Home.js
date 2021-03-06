import React from 'react';
import Header from './Header';
import SearchField from './SearchField';
import ErrorContainer from './ErrorContainer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='ui container' id='home-container'>
      <ErrorContainer />
      <Header />
      <SearchField />
    </div>
  );
};

export default Home;
