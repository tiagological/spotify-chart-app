import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import TrackList from './TrackList';
import '../styles/App.css';

const App = () => {
  return (
    <div className='ui container' id='app-container'>
      <Header />
      <SearchBar />
      <SearchButton />
      <TrackList />
    </div>
  );
};

export default App;
