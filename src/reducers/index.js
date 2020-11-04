import { combineReducers } from 'redux';

const starterSongs = {
  songs: [
    { title: 'Tomorrow', album: 'My name is Michael Holbrook'},
    { title: 'Welcome to my life', album: 'Still not gettin any'},
    { title: 'Dream on', album: 'Aerosmith'},
    { title: 'Mojo Pin', album: 'Grace'}
  ]
}

const songsReducer = (state=starterSongs, action) => {
  // console.log('----')
  // console.log(action)
  // console.log("----");
  if (action.type === 'ADD_SONG') {

    return {
      ...state,
      songs: [
        ...state.songs,
        action.payload
      ]
    }
  }

  return state;
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
