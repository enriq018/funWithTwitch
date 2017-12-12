import React from 'react';
import Google from './Google.jsx';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNameText: '',
      saveGroupBox: false
    }
  }

  saveGroup() {
    var groupName = this.state.groupNameText;
    this.setState({groupNameText: ''});
    this.props.saveGroup(groupName);
  }

  render() {
    return (
      <div className="container topBar">
        <div className="row">
          <div className="col-md-4">
            <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
              <button onClick = {()=> this.props.showInfo()} type="button" className="btn btn-secondary">{this.props.info ? 'Hide Stream Info' : 'Show Stream Info'}</button>

              <button onClick = {()=> this.props.numberOfScreens('one')} type="button" className="btn btn-secondary">1</button>
              <button onClick = {()=> this.props.numberOfScreens('two')} type="button" className="btn btn-secondary">2</button>
              <button onClick = {()=> this.props.numberOfScreens('four')} type="button" className="btn btn-secondary">4</button>

            </div>
          </div>
          <div className="col-md-4">
            {this.props.signedIn ? 

              <div className="btn-group">
              <input onChange={(e)=> this.setState({groupNameText:e.target.value})} placeholder='group name' value={this.state.groupNameText}/>
              <button type="button" className="btn btn-secondary" onClick={()=> this.saveGroup()}> <span className="fa fa-download"></span> Save Group</button>
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                {this.props.groupNames.map((el, index) => <div> <button className="btn btn-success" onClick={()=> this.props.changeGroup(el.streamers)} key ={index}><span className="fa fa-film"></span> {el.groupName}</button> <button onClick={()=> this.props.deleteGroup(el.groupName)}className="btn btn-danger"> <span className="fa fa-remove"></span> {el.groupName}</button> </div>)}
              </div>
            </div>:
               <h5 id="googleInfo" className="font-italic">Sign In to Save Groups</h5>}
            
          </div>
          <div className="col-md-1">
            {this.props.signedIn ?
              <span> <span id="googleInfo" class="badge badge-dark">Hi {this.props.userData.profileObj.givenName}</span><h3 id='googleInfo'>  <span className="badge badge-secondary"> </span> </h3> </span> : 
              <Google renderSignIn={this.props.renderSignIn}/>}
          </div>
          <div className="col-md-1">
            {this.props.signedIn ?
              <img id='pic' src={"https://lh6.googleusercontent.com/--KsDT5oIN7I/AAAAAAAAAAI/AAAAAAAAAHI/7paI78Gux_o/s96-c/photo.jpg"}/>
 : 
              <span></span>}
          </div>
          <div className="col-md-2">
            {this.props.signedIn ?
             <form className="form-inline">
  <button type="submit" id="logout" className="btn btn-primary btn-sm" href=''>Logout</button>
</form>: 
              <span></span>}
          
          </div>

        </div>
      </div>
    )
  }
} 

export default TopBar;


            // <button onClick={()=> this.props.renderSignIn()}> clickMe </button>



//data.
// profileObj:
// {…}
// email:
// "jav.enriquez@gmail.com"
// familyName:
// "Enriquez"
// givenName:
// "Javier"
// googleId:
// "100300693732495718765"
// imageUrl:
// "https://lh6.googleusercontent.com/--KsDT5oIN7I/AAAAAAAAAAI/AAAAAAAAAHI/7paI78Gux_o/s96-c/photo.jpg"
// name:
// "Javier Enriquez"
// tokenId:
// "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0MDU4ZTJiOTllNTc2MTAyZGMyYWVmZDVkZDAzNmVlZjQ1NmUzNWYifQ.eyJhenAiOiI0MDEwNzYxNjM3NzUtYjdicDJzZGpvbnExYTQyMjVuY21ndDFzanVvMWVrZWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhd…"
// tokenObj:
// {…}