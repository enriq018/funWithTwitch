import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';

// const OneScreen = (props) => (

//   <div className="container-fluid">
//     <div className="row">
      // <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} savedList={props.savedList}
      //  singleScreen = {props.singleScreen} info={props.info} index={0} changeStream={props.changeStream}/>
//     </div>
//   </div>
// );

// export default OneScreen;

//            src={`http://player.twitch.tv/?channel=${props.streamerNames}`}


const OneScreen = props => (
  <div className="container is-fullhd">
    <div className="columns is-gapless is-mobile">
      <TwitchPlayer
        screenSize={props.screenSize}
        streamerList={props.streamerList}
        savedList={props.savedList}
        singleScreen={props.singleScreen}
        info={props.info}
        index={0}
        changeStream={props.changeStream}
      />
    </div>
  </div>
);

export default OneScreen;
