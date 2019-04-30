// import React, { Component } from 'react';
//
// class MusicPlayer extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       play: false,
//       pause: true,
//       currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a',
//     }
//     this.url = this.state.currentSong;
//   }
//
//   render() {
//
//   return (
//       <audio controls>
//         <source src={this.url} />
//       </audio>
//     );
//   }
// }
//
// export default MusicPlayer;
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row } from 'reactstrap';

function MusicPlayer(props) {
  return (
    <div>
      <audio controls>
        <source src={props.currentSong} />
      </ audio>
      <div/>
    </div>

  )
}
MusicPlayer.propTypes = {
  currentSong: PropTypes.string,
}
export default MusicPlayer
