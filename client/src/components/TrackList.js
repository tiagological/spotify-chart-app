import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../styles/TrackList.css';

const TrackList = props => {
  const data = props.tracks;
  const list = data.map(item => {
    return (
      <div
        key={item.track.id}
        className='ui one column centered grid track-item'>
        <div className='row'>
          <h3>{data.indexOf(item) + 1}</h3>
        </div>
        <div className='row'>
          <p>Artist: {item.track.artists[0].name}</p>
        </div>
        <div className='row'>
          <p>Track: {item.track.name}</p>
        </div>
        <div className='row'>
          <iframe
            title={item.track.name}
            src={`https://embed.spotify.com/?uri=${
              item.track.uri
            }&theme=white&view=coverart`}
            width='300'
            height='80'
            frameBorder='0'
            allowtransparency='true'
          />
        </div>
      </div>
    );
  });
  return props.error ? (
    <Redirect to='/' />
  ) : (
    <div className='ui container track-list-container'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <h1 className='centered-header'>{`${
        props.country
      } Top 10 on Spotify`}</h1>
      {list}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    error: state.error,
    country: state.countrySearched
  };
};

export default connect(mapStateToProps)(TrackList);
