import React from 'react';

import SongList from './SongList';
import SongDetails from './SongDetails';
import CreateSong from './CreateSong';

const App = () => {
  return (
    <div className="ui container grid">
      <h1 className="header">Save your songs</h1>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column four wide">
          <SongDetails />
        </div>
      </div>
      <div className="ui row">
        <CreateSong />
      </div>
    </div>
  );
}

export default App;
