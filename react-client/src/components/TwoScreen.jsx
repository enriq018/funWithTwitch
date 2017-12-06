import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';
const TwoScreen = (props) => (

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} info={props.info}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} info={props.info}/>
        </div>
      </div>
    </div>
  </div>
)

export default TwoScreen;

