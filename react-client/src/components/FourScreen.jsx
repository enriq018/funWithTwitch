import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';
//fix
// const FourScreen = (props) => (

//   <div className="container-fluid">
//     <div className="row">
//       <div className="col-md-6">
//         <div className="row">
//           <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} savedList={props.savedList[0]} info={props.info} index={0} changeStream={props.changeStream}/>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className="row">
//           <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} savedList={props.savedList[1]} info={props.info} index={1} changeStream={props.changeStream}/>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className="row">
//           <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} savedList={props.savedList[2]} info={props.info} index={2} changeStream={props.changeStream}/>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className="row">
//           <TwitchPlayer screenSize = {props.screenSize} streamerList = {props.streamerList} savedList={props.savedList[3]} info={props.info} index={3} changeStream={props.changeStream}/>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default FourScreen;


const FourScreen = props => (
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

export default FourScreen;
