import React from 'react';
import { connect } from 'react-redux';
import '../styles/TrackItem.css';

const TrackList = props => {
  const data = props.tracks;
  const list = data.map(item => {
    return (
      <div
        key={item.track.id}
        className='ui one column centered grid'
        id='track-item'>
        <div className='row'>{data.indexOf(item) + 1}</div>
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
  return <div className='ui container'>{list}</div>;
};

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  };
};

export default connect(mapStateToProps)(TrackList);
