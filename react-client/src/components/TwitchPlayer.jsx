import React from 'react';

class TwitchPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamer: 'Shiphtur',
      chat: false,
      chatText: 'Show Chat',


    };
    this.addChat = this.addChat.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  addChat() {
    console.log('clicked chat');
    this.setState({chat: !this.state.chat});
    var chat = !this.state.chat ? 'Hide Chat' : 'Show Chat';
    this.setState({chatText: chat});


  }

  componentDidMount() {
    var randomStreamer = this.props.streamerList[this.getRandomInt(0, this.props.streamerList.length)];
    this.setState({streamer: randomStreamer})
  }


  render() {
    return (
      <div className = "container-fluid TwitchPlayer">
          {console.log('------------', this.state.chatResize)}

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle"
              type="button" id="dropdownMenu1" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Live Streamers
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {this.props.streamerList.map((el, index) => <a onClick= {()=> this.setState({streamer: el})} className="dropdown-item" key = {index}>{el}</a>)}
            </div>
            {console.log('thahthtehaehe', this.props)}
            <button type="button" className="btn btn-info">{this.state.streamer}</button>
            {this.props.singleScreen ? <button onClick = {() => this.addChat()} type="button" className="btn btn-info">{this.state.chatText}</button> : <div></div>}
          </div>
        <iframe className = 'stream'
          src={`http://player.twitch.tv/?channel=${this.state.streamer}`}
          frameBorder='0'
          height={this.props.screenSize[0]}
          width={this.state.chat ? '850' : this.props.screenSize[1]}
          allowFullScreen='true'
        >
        </iframe>
        {this.state.chat ? 

        <iframe frameborder="0" 
                scrolling="no" 
                id="chat_embed" 
                src={`http://www.twitch.tv/${this.state.streamer}/chat`}
                height = "570"
                width="350">
        </iframe> : 
        <div></div>
        }
      </div>
    );
  }


}

export default TwitchPlayer;


