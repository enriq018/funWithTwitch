import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';

const FourScreen = props => (
  <div className="container is-fullhd">
    <div className="container is-fluid">
      <div className="columns is-gapless is-multiline is-mobile ">
        <div className="column is-6 ">
          <div className="video-responsive">
            <TwitchPlayer savedList={props.savedList} index={0} />
          </div>
        </div>
        <div className="column is-6 ">
          <div className="video-responsive">
            <TwitchPlayer savedList={props.savedList} index={1} />
            />
          </div>
        </div>
        <div className="column is-6 ">
          <div className="video-responsive">
            <TwitchPlayer savedList={props.savedList} index={2} />
          </div>
        </div>
        <div className="column is-6 ">
          <div className="video-responsive">
            <TwitchPlayer savedList={props.savedList} index={3} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FourScreen;
