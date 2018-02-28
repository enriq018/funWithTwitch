import React from 'react';

const TwitchPlayer = props => (
  <iframe className="" src={`https://player.twitch.tv/?channel=${props.savedList[props.index]}`}
  frameBorder="0" height="500px" width={"100%"} allowFullScreen="true" />
);

export default TwitchPlayer;
