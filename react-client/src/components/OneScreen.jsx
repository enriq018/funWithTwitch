import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';

const OneScreen = props => (
  <div className="container is-fullhd">
    <div className="container is-fluid">
      <div className="columns is-gapless is-mobile video-responsive">
        <TwitchPlayer savedList={props.savedList} index={0} />
      </div>
    </div>
  </div>
);

export default OneScreen;
