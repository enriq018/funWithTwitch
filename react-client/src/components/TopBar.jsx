import React from 'react';
import Google from './Google.jsx';
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNameText: '',
      saveGroupBox: false
    };
  } // saveGroup() { // var groupName = this.state.groupNameText;
// this.setState({groupNameText: ''}); // this.props.saveGroup(groupName); // }
render() {
  return <div className="columns is-mobile">
      <div className="column is-4">
        <div className="dropdown">
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
              <span>Hide</span>
              <span className="icon is-small">
                <i className="far fa-eye-slash" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Overview
              </a>
              <a href="#" className="dropdown-item">
                Modifiers
              </a>
              <a href="#" className="dropdown-item">
                Grid
              </a>
              <a href="#" className="dropdown-item">
                Form
              </a>
              <a href="#" className="dropdown-item">
                Elements
              </a>
              <a href="#" className="dropdown-item">
                Components
              </a>
              <a href="#" className="dropdown-item">
                Layout
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                More
              </a>
            </div>
          </div>
        </div>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span>Screens</span>
              <span className="icon is-small">
                <i className="fas fa-th-large" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <p>
                  You can insert
                  <strong>
                    any type of content
                  </strong> within the dropdown menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Input box and dropdown to select groups*/}
      <div className="column">
        <div className="columns is-gapless is-mobile">
          <div className="column is-4">
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="group name" />
              </div>
            </div>
          </div>
          <button className="button">Save Group</button>
          <div className="column">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                  <span />
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <p>
                      You can insert <strong>any type of content</strong> within the dropdown menu.
                    </p>
                  </div>
                  <hr className="dropdown-divider" />
                  <div className="dropdown-item">
                    <p>You simply need to use a instead.</p>
                  </div>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    This is a link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Input box and dropdown to select groups*/}
      <div className="column is-4">
        <div className="columns is-gapless is-mobile">
          <div className="column">
            <p>Image........</p>
          </div>

          <div className="column">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Logout</span>
                  <span className="icon is-small">
                    <i className="fas fa-caret-square-up" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Overview
                  </a>
                  <a href="#" className="dropdown-item">
                    Modifiers
                  </a>
                  <a href="#" className="dropdown-item">
                    Grid
                  </a>
                  <a href="#" className="dropdown-item">
                    Form
                  </a>
                  <a href="#" className="dropdown-item">
                    Elements
                  </a>
                  <a href="#" className="dropdown-item">
                    Components
                  </a>
                  <a href="#" className="dropdown-item">
                    Layout
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;}
}
export default TopBar;





      // <div className="container-fluid topBar">
      //   <div className="row" id = "topBarSpace">
      //     <div className="col-md-4 col-sm-4">
      //       <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
      //         <button onClick = {()=> this.props.showInfo()} type="button" className="btn btn-secondary">{this.props.info ? 'Hide Stream Info' : 'Show Stream Info'}</button>
      //         <button onClick = {()=> this.props.numberOfScreens('one')} type="button" className="btn btn-primary">1</button>
      //         <button onClick = {()=> this.props.numberOfScreens('two')} type="button" className="btn btn-primary">2</button>
      //         <button onClick = {()=> this.props.numberOfScreens('four')} type="button" className="btn btn-primary">4</button>
      //       </div>
      //     </div>
      //     <div className="col-md-4 col-sm-4">
      //       {this.props.signedIn ?
      //         <div className="btn-group">
      //           <input onChange={(e)=> this.setState({groupNameText: e.target.value})} placeholder='group name' value={this.state.groupNameText}/>
      //           <button type="button" className="btn btn-secondary" onClick={()=> this.saveGroup()}> <span className="fa fa-download"></span> Save Group</button>
      //           <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //             <span className="sr-only">Toggle Dropdown</span>
      //           </button>
      //           <div className="dropdown-menu">
      //             {this.props.groupNames.map((el, index) => <div> <button className="btn btn-success" onClick={()=> this.props.changeGroup(el.streamers)} key ={index}><span className="fa fa-film"></span> {el.groupName}</button> <button onClick={()=> this.props.deleteGroup(el.groupName)}className="btn btn-danger"> <span className="fa fa-remove"></span> {el.groupName}</button> </div>)}
      //           </div>
      //         </div> :
      //         <h5 id="googleInfo" className="font-italic">Sign in to save layout!</h5>}
      //     </div>
      //     <div className="col-md-1 col-sm-1">
      //       {this.props.signedIn ?
      //         <span> <h3 id='googleInfo'>  <span className="badge badge-secondary"> </span> </h3> </span> :
      //         <span></span>}
      //     </div>
      //     <div className="col-md-1 col-sm-1">
      //       {this.props.signedIn ?
      //         <img id='pic' src={this.props.userData.profileObj.imageUrl}/> : <span></span>}
      //     </div>
      //     <div className="col-md-2 col-sm-2">
      //       {this.props.signedIn ?
      //         <form className="form-inline">
      //         <span id="googleInfo2" className="badge badge-dark">Hi {this.props.userData.profileObj.givenName}</span>
      //           <button type="submit" id="logout" className="btn btn-primary btn-sm" href=''>Logout</button>
      //         </form> :
      //         <Google id = 'google' renderSignIn={this.props.renderSignIn}/>}
      //     </div>
      //   </div>
      // </div>








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