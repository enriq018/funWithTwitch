import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';

const TwoScreen = props => (
  <div className="columns is-gapless is-mobile">
    <TwitchPlayer savedList={props.savedList} index={0} />
    <TwitchPlayer savedList={props.savedList} index={1} />
  </div>
);

export default TwoScreen;

