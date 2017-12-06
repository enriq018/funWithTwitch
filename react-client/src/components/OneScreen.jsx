import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';

const OneScreen = (props) => (

  <div className="container-fluid">
    <div className="row">
      <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} singleScreen = {props.singleScreen} info={props.info}/>
    </div>
  </div>
);

export default OneScreen;

//            src={`http://player.twitch.tv/?channel=${props.streamerNames}`}
