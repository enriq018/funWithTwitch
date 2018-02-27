import React from 'react';
import TwitchPlayer from './TwitchPlayer.jsx';
// const TwoScreen = (props) => (

//   <div className="container-fluid">
//     {console.log('%%%%%%%%%%%%%%%', props.savedList)}
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
//     </div>
//   </div>
// );

// export default TwoScreen;


const TwoScreen = props => (
    <div className="columns is-gapless is-mobile">
      <TwitchPlayer
        screenSize={props.screenSize}
        streamerList={props.streamerList}
        savedList={props.savedList}
        singleScreen={props.singleScreen}
        info={props.info}
        index={0}
        changeStream={props.changeStream}
        numberOfStreams={"two"}
      />

      <TwitchPlayer
        screenSize={props.screenSize}
        streamerList={props.streamerList}
        savedList={props.savedList}
        singleScreen={props.singleScreen}
        info={props.info}
        index={1}
        changeStream={props.changeStream}
        numberOfStreams={"two"}
      />
    </div>
);

export default TwoScreen;

