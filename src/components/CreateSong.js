import React from 'react';
import { connect } from 'react-redux';

import { addSong } from '../actions';

class CreateSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: " ",
      inputAlbum: " ",
    };
  }

  newSong = () => {
    const song = { title: this.state.inputTitle, album: this.state.inputAlbum }
    this.props.addSong(song);
  }

  render() {
    return (
      <form onSubmit={(event) => this.newSong(event)} className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
            type="text"
            name="title"
            placeholder="Title"
          ></input>
        </div>
        <div className="field">
          <label>Duration</label>
          <input
            onChange={(e) => this.setState({ inputAlbum: e.target.value })}
            type="text"
            name="duration"
            placeholder="Duration"
          ></input>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
};

export default connect(null, { addSong })(CreateSong);

