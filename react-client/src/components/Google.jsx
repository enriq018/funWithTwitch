import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

//  var responseGoogle = (response) => {
//   console.log('!!!!!!!!!!!!!!!!', response);

// };


class Google extends React.Component {
  constructor(props) {
    super(props);

  }
  responseGoogle(data) {
    this.props.renderSignIn(data);
    // this.props.renderSignIn(data);
  }

  render() {
    return (
      <div>
      <GoogleLogin
      clientId="401076163775-b7bp2sdjonq1a4225ncmgt1sjuo1eked.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={(data) => this.responseGoogle(data)}
      onFailure={(data) => console.log('failed to login', data)}
      id="fml"
    />
    </div>
    )
  }
}


export default Google;
