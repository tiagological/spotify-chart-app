import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='ui one column centered grid' id='header-container'>
      <h1 id='header-text'>Search a country for its top 10 on Spotify</h1>
    </div>
  );
};

export default Header;
