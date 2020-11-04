import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>{selectedSong.title}</p>
      <p>{selectedSong.album}</p>
    </div>
  );

}
const mapStateToProps = state => {
  return { selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);
