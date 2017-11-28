import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';
//fix
const FourScreen = (props) => (

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList}/>
        </div>
      </div>
    </div>
  </div>
)

export default FourScreen;