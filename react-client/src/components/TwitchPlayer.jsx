import React from 'react';

// class TwitchPlayer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       streamer: 'Shiphtur',
//       chat: false,
//       chatText: 'Show Chat',
//       searchState: false,
//       searchText: '',
//       signedIn: false
//     };
//     this.addChat = this.addChat.bind(this);
//   }

//   getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   addChat() {
//     console.log('clicked chat');
//     this.setState({chat: !this.state.chat});
//     var chat = !this.state.chat ? 'Hide Chat' : 'Show Chat';
//     this.setState({chatText: chat});
//   }
//   componentDidMount() {
//     // var randomStreamer = this.props.streamerList[this.getRandomInt(0, this.props.streamerList.length)];
//     this.setState({streamer: this.props.savedList});
//   }
//   changeStreamer(name, hideSearch) {
//     // console.log('index:', this.props.index, 'name', name)
//     this.props.changeStream(this.props.index, name);
//     this.setState({streamer: name, searchState: hideSearch});
//   }
//   render() {
//     return (
//       <div className = "container-fluid TwitchPlayer" >
//         {console.log('------------', this.props.screenSize[0])}
//         <div>
//           {this.props.info ? <div className="dropdown">
//             <button className="btn btn-secondary dropdown-toggle"
//               type="button" id="dropdownMenu1" data-toggle="dropdown"
//               aria-haspopup="true" aria-expanded="false">
//               Change Streamer
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
//               {this.props.streamerList.map((el, index) => <a onClick= {()=> this.changeStreamer(el, false)} className="dropdown-item" id='name' key = {index}>{el}</a>)}
//             </div>
//             <button type="button" className="btn btn-info" ><span className="fa fa-star"></span> {this.state.streamer}</button>
//             {this.state.searchState ?
//               <span>
//                 <input placeholder="streamer name" onChange={(e)=> this.setState({searchText: e.target.value})}/>
//                 <button className="btn btn-info" onClick={()=> this.changeStreamer(this.state.searchText, false)}><span className="fa fa-arrow-right"></span></button>
//                 <button className="btn btn-info" onClick={()=> this.setState({searchState: false})}><span className="fa fa-remove"></span></button>
//               </span> :
//               <button className="btn btn-info" onClick = {() => this.setState({searchState: true})} ><span className="fa fa-search"></span> Search</button>
//             }
//             {this.props.singleScreen ? <button onClick = {() => this.addChat()} type="button" className="btn btn-info"><span className="fa fa-globe"></span> {this.state.chatText}</button> : <div></div>}
//           </div> : <div></div>}
//         </div>
//         <iframe className = 'stream' id="twichPlayerScreen"
//           src={`https://player.twitch.tv/?channel=${this.state.streamer}`}
//           frameBorder='0'
//           height={this.props.info ? (this.props.screenSize[0] - 30) + 'px' : this.props.screenSize[0] + 'px'}
//           width={this.state.chat ? parseInt(this.props.screenSize[1]) * .6 + 'px' : this.props.screenSize[1]}
//           allowFullScreen='true'
//         >
//         </iframe>
//         {this.state.chat ?
//           <iframe frameborder="0"
//             scrolling="no"
//             id="chat_embed"
//             src={`https://www.twitch.tv/${this.state.streamer}/chat`}
//             height={this.props.info ? (this.props.screenSize[0] - 30) + 'px' : this.props.screenSize[0] + 'px'}
//             width= {parseInt(this.props.screenSize[1]) * .35 + 'px'}>
//           </iframe> :
//           <div></div>
//         }
//       </div>
//     );
//   }
// }

// export default TwitchPlayer;






class TwitchPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamer: 'Shiphtur',
      chat: false,
      chatText: 'Show Chat',
      searchState: false,
      searchText: '',
      signedIn: false
    };
   // this.addChat = this.addChat.bind(this);
  }

  // getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  // }
  // addChat() {
  //   console.log('clicked chat');
  //   this.setState({chat: !this.state.chat});
  //   var chat = !this.state.chat ? 'Hide Chat' : 'Show Chat';
  //   this.setState({chatText: chat});
  // }
  // componentDidMount() {
  //   // var randomStreamer = this.props.streamerList[this.getRandomInt(0, this.props.streamerList.length)];
  //   this.setState({streamer: this.props.savedList});
  // }
  // changeStreamer(name, hideSearch) {
  //   // console.log('index:', this.props.index, 'name', name)
  //   this.props.changeStream(this.props.index, name);
  //   this.setState({streamer: name, searchState: hideSearch});
  // }
  render() {
    return <div className="column video-responsive">
        {/* RIGHT HERE ACTIVE AND NOT ACTIVE*/}
        {this.props.info ? <div className="dropdown">
            <div>
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Streamers</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Dropdown item
                  </a>
                  <a className="dropdown-item">Other dropdown item</a>
                  <a href="#" className="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" className="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
            <span className="tag is-info is-medium">imaqtpie</span>
            <span> </span>
            <span className="tag is-info is-medium">Search</span>
          </div> : <div />}

        <iframe className="stream" id="twichPlayerScreen" src={`https://player.twitch.tv/?channel=riotgames`} frameBorder="0" height={570 + "px"} width={"100%"} allowFullScreen="true" />
      </div>;
  }
}
export default TwitchPlayer;







