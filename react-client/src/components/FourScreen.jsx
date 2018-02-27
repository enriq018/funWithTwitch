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
    <div className="container is-fluid">
    <div className="columns is-gapless is-multiline is-mobile ">
      <div className="column is-6 ">
        <div className="video-responsive">
          <TwitchPlayer
            screenSize={props.screenSize}
            streamerList={props.streamerList}
            savedList={props.savedList}
            singleScreen={props.singleScreen}
            info={props.info}
            index={3}
            changeStream={props.changeStream}
            numberOfStreams={"four"}
          />
        </div>
      </div>
      <div className="column is-6 ">
        <div className="video-responsive">
          <TwitchPlayer
            screenSize={props.screenSize}
            streamerList={props.streamerList}
            savedList={props.savedList}
            singleScreen={props.singleScreen}
            info={props.info}
            index={3}
            changeStream={props.changeStream}
            numberOfStreams={"four"}
          />
        </div>
      </div>
      <div className="column is-6 ">
        <div className="video-responsive">
          <TwitchPlayer
            screenSize={props.screenSize}
            streamerList={props.streamerList}
            savedList={props.savedList}
            singleScreen={props.singleScreen}
            info={props.info}
            index={3}
            changeStream={props.changeStream}
            numberOfStreams={"four"}
          />
        </div>
      </div>
      <div className="column is-6 ">
        <div className="video-responsive">
          <TwitchPlayer
            screenSize={props.screenSize}
            streamerList={props.streamerList}
            savedList={props.savedList}
            singleScreen={props.singleScreen}
            info={props.info}
            index={3}
            changeStream={props.changeStream}
            numberOfStreams={"four"}
          />
        </div>
      </div>
    </div>
    </div>
    </div>
);

export default FourScreen;

