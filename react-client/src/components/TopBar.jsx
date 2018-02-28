import React from "react";
import Google from "./Google.jsx";
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNameText: "",
      saveGroupBox: false,
      dropDown: false,
      eyeStatus: false,
      screensClicked: false,
      searchState: false,
      streamSelector: false,
      streamerOneDrop: false,
      streamerTwoDrop: false,
      streamerThreeDrop: false,
      streamerFourDrop: false
    };
    this.saveGroup = this.saveGroup.bind(this);
    this.changeStreamer = this.changeStreamer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event, index) {
    console.log('enter pressed!!!!!!!!!!!!!!!!')
    if (event.key == "Enter") {
      this.changeStreamer(this.state.searchText, false, index), this.setState(
          {
            streamSelector: false,
            streamerOneDrop: false,
            streamerTwoDrop: false,
            streamerThreeDrop: false,
            streamerFourDrop: false
          }
        );
    }
  };

  changeStreamer(name, hideSearch, newIndex) {
    console.log("changeStreamer TOP BAR", name);
    // console.log('index:', this.props.index, 'name', name)
    this.setState({ streamer: name, searchState: false });
    this.props.changeStream(newIndex, name);
  }

  saveGroup() {
    let groupName = this.state.groupNameText;
    this.setState({ groupNameText: "" });
    this.props.saveGroup(groupName);
  }

  test(x, index) {
    if (x) {
      return (
        <div className="dropdown">
          <div>
            <div className="dropdown-trigger">
              <button
                onClick={() =>
                  this.setState({
                    searchState: !this.state.searchState
                  })
                }
                className="button is-light is-hidden is-left"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Streamers</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content" id="streamerList">
                <a className="dropdown-item">
                  <div>
                    <input
                    onKeyPress={(e)=> this.handleKeyPress(e, index)}
                      onChange={e =>
                        this.setState({
                          searchText: e.target.value
                        })
                      }
                      className="input is-small"
                      type="text"
                      placeholder="Search"
                    />
                    <button
                      onClick={() => {
                        this.changeStreamer(
                          this.state.searchText,
                          false,
                          index
                        ),
                          this.setState({
                            streamSelector: false,
                            streamerOneDrop: false,
                            streamerTwoDrop: false,
                            streamerThreeDrop: false,
                            streamerFourDrop: false
                          });
                      }}
                      className="button is-small"
                    >
                      <span className="icon is-right">
                        <i className="fas fa-search" />
                      </span>
                    </button>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                {this.props.streamerList.map((el, i) => (
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      this.changeStreamer(el, false, index),
                        this.setState({
                          streamSelector: false,
                          streamerOneDrop: false,
                          streamerTwoDrop: false,
                          streamerThreeDrop: false,
                          streamerFourDrop: false
                        });
                    }}
                    className="dropdown-item"
                    id="streamerListItem"
                    key={i}
                  >
                    {el}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  streamSelector() {
    return <div className={this.state.streamSelector ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger START!!!!!!!!!!!">
          <button
          id="streamSelectorButton"
           onClick={() => this.setState({
                streamSelector: !this.state.streamSelector,
                streamerOneDrop: false,
                streamerTwoDrop: false,
                streamerThreeDrop: false,
                streamerFourDrop: false,
                screensClicked: false
              })} className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>Streamers</span>
            <span className="icon is-small">
              <i className="fab fa-twitch" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content screenList HERE!!!!!!!!!!!!!!!!!!!">
            <div className="dropdown-item screenListItem">
              <span>{""}</span>
              <button className="button streamerDropdownButton" onClick={() => this.setState({
                    streamerOneDrop: true,
                    streamerTwoDrop: false,
                    streamerThreeDrop: false,
                    streamerFourDrop: false
                  })}>
                {" "}
                <span> {`Change: ${this.props.savedList[0]}`}</span>
                <span className="icon is-small">
                  <i className="fas fa-share" aria-hidden="true" />
                </span>
              </button>
              {this.test(this.state.streamerOneDrop, 0)}
            </div>
          </div>

          <div className="dropdown-content screenList HERE!!!!!!!!!!!!!!!!!!!">
            <div className="dropdown-item screenListItem">
              <button className="button streamerDropdownButton" onClick={() => this.setState({
                    streamerOneDrop: false,
                    streamerTwoDrop: true,
                    streamerThreeDrop: false,
                    streamerFourDrop: false
                  })}>
                {" "}
                <span> {`Change: ${this.props.savedList[1]}`}</span>
                <span className="icon is-small">
                  <i className="fas fa-share" aria-hidden="true" />
                </span>
              </button>
              {this.test(this.state.streamerTwoDrop, 1)}
            </div>
          </div>

          <div className="dropdown-content screenList HERE!!!!!!!!!!!!!!!!!!!">
            <div className="dropdown-item screenListItem">
              <button className="button streamerDropdownButton" onClick={() => this.setState({
                    streamerOneDrop: false,
                    streamerTwoDrop: false,
                    streamerThreeDrop: true,
                    streamerFourDrop: false
                  })}>
                {" "}
                <span> {`Change: ${this.props.savedList[2]}`}</span>
                <span className="icon is-small">
                  <i className="fas fa-share" aria-hidden="true" />
                </span>
              </button>
              {this.test(this.state.streamerThreeDrop, 2)}
            </div>
          </div>

          <div className="dropdown-content screenList HERE!!!!!!!!!!!!!!!!!!!">
            <div className="dropdown-item screenListItem">
              <button className="button streamerDropdownButton" onClick={() => this.setState({
                    streamerOneDrop: false,
                    streamerTwoDrop: false,
                    streamerThreeDrop: false,
                    streamerFourDrop: true
                  })}>
                {" "}
                <span> {`Change: ${this.props.savedList[3]}`}</span>
                <span className="icon is-small">
                  <i className="fas fa-share" aria-hidden="true" />
                </span>{" "}
              </button>
              {this.test(this.state.streamerFourDrop, 3)}
            </div>
          </div>
        </div>
      </div>;
  }

  screenSelector() {
    return (
      <div
        className={
          this.state.screensClicked ? "dropdown is-active" : "dropdown"
        }
      >
        <div className="dropdown-trigger">
          <button
            id="screensButton"
            onClick={() =>
              this.setState({
                screensClicked: !this.state.screensClicked,
                streamSelector: false
              })
            }
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>View</span>
            <span className="icon is-small">
              <i className="fas fa-th-large" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content screenList">
            <div
              className="dropdown-item screenListItem"
              onClick={() => {
                this.setState({
                  screensClicked: false
                }),
                  this.props.numberOfScreens("one");
              }}
            >
              <a>One Screen</a>
            </div>
            <div
              className="dropdown-item screenListItem"
              onClick={() => {
                this.setState({
                  screensClicked: false
                }),
                  this.props.numberOfScreens("two");
              }}
            >
              <a>Two Screens</a>
            </div>
            <div
              className="dropdown-item screenListItem"
              onClick={() => {
                this.setState({
                  screensClicked: false
                }),
                  this.props.numberOfScreens("four");
              }}
            >
              <a>Four Screens</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  middleBar() {
    if (this.props.signedIn) {
      return (
        <div className="column">
          <div className="columns is-gapless is-mobile">
            <div className="column is-4">
              <div className="field">
                <div className="control">
                  <input
                    onChange={e => (this.state.groupNameText = e.target.value)}
                    className="input"
                    type="text"
                    placeholder={this.state.groupNameText}
                  />
                </div>
              </div>
            </div>
            <button onClick={() => this.saveGroup()} className="button">
              Save Group
            </button>
            <div className="column">
              <div
                className={
                  this.state.dropDown ? "dropdown is-active" : "dropdown"
                }
              >
                <div className="dropdown-trigger">
                  <button
                    onClick={() =>
                      this.setState({
                        dropDown: !this.state.dropDown
                      })
                    }
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                  >
                    <span />
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                  <div className="dropdown-content" id="dropdownBlank">
                    <div className="dropdown-item">
                      {this.props.groupNames.map((el, index) => (
                        <div className="columns">
                          {" "}
                          <button
                            className="button is-success"
                            onClick={() => {
                              this.props.changeGroup(el.streamers),
                                this.setState({
                                  dropDown: !this.state.dropDown
                                });
                            }}
                            key={index}
                          >
                            <span className="fa fa-film" /> {el.groupName}
                          </button>{" "}
                          <button
                            onClick={() => {
                              this.props.deleteGroup(el.groupName),
                                this.setState({
                                  dropDown: !this.state.dropDown
                                });
                            }}
                            className="button is-danger"
                          >
                            {" "}
                            <span className="fas fa-times-circle" />{" "}
                            {el.groupName}
                          </button>{" "}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="column">
          <div className="columns is-mobile">
            <div className="column is-2" />
            <div className="column is-4">
              <img
                className=""
                src="https://javier-enriquez.000webhostapp.com/FunWithTwitchLogo3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      );
    }
  }

  rightBar() {
    if (this.props.signedIn) {
      return <div className="column is-4">
          <div className="columns is-gapless is-mobile">
            <div className="column">
              <div className="image is-48x48">
                <img id="picture" src={this.props.userData.profileObj.imageUrl} />
              </div>
            </div>

            <div className="column">
              <a href="" className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>Logout</span>
                <span className="icon is-small">
                  <i className="fas fa-sign-out-alt" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>;
    } else {
      return (
        <div className="column is-4">
          <div className="columns is-gapless is-mobile">
            <div className="column ">
              <div className="is-pulled-right">
                <Google id="google" renderSignIn={this.props.renderSignIn} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  THISONE() {
    <div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content" id="streamerList">
          <a className="dropdown-item">
            <div>
              <input
                onChange={e =>
                  this.setState({
                    searchText: e.target.value
                  })
                }
                className="input is-small"
                type="text"
                placeholder="Search"
              />
              <button
                onClick={() =>
                  this.changeStreamer(this.state.searchText, false)
                }
                className="button is-small"
              >
                <span className="icon is-right">
                  <i className="fas fa-search" />
                </span>
              </button>
            </div>
          </a>
          <hr className="dropdown-divider" />
          {this.props.streamerList.map((el, index) => (
            <a
              className="dropdown-item"
              onClick={() => this.changeStreamer(el, false)}
              className="dropdown-item"
              id="streamerListItem"
              key={index}
            >
              {el}
            </a>
          ))}
        </div>
      </div>
    </div>;
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-4 main">
          {this.streamSelector()}
          {this.screenSelector()}
        </div>
        {/* Input box and dropdown to select groups*/}
        {this.middleBar()}
        {this.rightBar()}
      </div>
    );
  }
}
export default TopBar;

// <button onClick={() => {
//             this.props.showInfo(), this.setState({
//                 eyeStatus: !this.state.eyeStatus
//               });
//           }} className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
//           <span>Streamers</span>
//           <span className="icon is-small">
//             <img className="fab fa-twitch" aria-hidden="true" />
//           </span>
//         </button>;

// <div className="dropdown-trigger">
//               <button onClick={()=> this.setState({screensClicked:!this.state.screensClicked})} className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
//                 <span>View</span>
//                 <span className="icon is-small">
//                   <i className="fas fa-th-large" aria-hidden="true" />
//                 </span>
//               </button>
//             </div>
//             <div className="dropdown-menu" id="dropdown-menu4" role="menu">
//               <div className="dropdown-content screenList">
//                 <div className="dropdown-item screenListItem" onClick={() => {this.setState({screensClicked:false}), this.props.numberOfScreens("one")}}>
//                   <a>One Screen</a>
//                 </div>
//                 <div className="dropdown-item screenListItem" onClick={() =>{this.setState({screensClicked:false}), this.props.numberOfScreens("two")}}>
//                   <a>Two Screens</a>
//                 </div>
//                 <div className="dropdown-item screenListItem" onClick={() => {this.setState({screensClicked:false}),this.props.numberOfScreens("four")}}>
//                   <a>Four Screens</a>
//                 </div>
//               </div>
//             </div>

// ;
// {
//   /* Input box and dropdown to select groups*/
// }
// <div className="column is-4">
//   <div className="columns is-gapless is-mobile">
//     <div className="column">
//       <p>Image........</p>
//     </div>

//     <div className="column">
//       <button
//         className="button"
//         aria-haspopup="true"
//         aria-controls="dropdown-menu3"
//       >
//         <span>Logout</span>
//         <span className="icon is-small">
//           <i className="fas fa-caret-square-up" aria-hidden="true" />
//         </span>
//       </button>
//     </div>
//   </div>
// </div>;

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

   {/* RIGHT HERE ACTIVE AND NOT ACTIVE*/}
//   <div className="dropdown">
//        <div>
//          <div className="dropdown-trigger">
//            <button onClick={() => this.setState({
//                  searchState: !this.state.searchState
//                })} className="button is-light" aria-haspopup="true" aria-controls="dropdown-menu">
//              <span>Streamers</span>
//              <span className="icon is-small">
//                <i className="fas fa-angle-down" aria-hidden="true" />
//              </span>
//            </button>
//          </div>
//          <div className="dropdown-menu" id="dropdown-menu" role="menu">
//            <div className="dropdown-content" id="streamerList">
//              <a className="dropdown-item">
//                <div>
//                  <input onChange={e => this.setState({
//                        searchText: e.target.value
//                      })} className="input is-small" type="text" placeholder="Search" />
//                  <button onClick={() => this.changeStreamer(this.state.searchText, false)} className="button is-small">
//                    <span className="icon is-right">
//                      <i className="fas fa-search" />
//                    </span>
//                  </button>
//                </div>
//              </a>
//              <hr className="dropdown-divider" />
//              {this.props.streamerList.map((el, index) => (
//                <a
//                  className="dropdown-item"
//                  onClick={() => this.changeStreamer(el, false)}
//                  className="dropdown-item"
//                  id="streamerListItem"
//                  key={index}
//                >
//                  {el}
//                </a>
//              ))}
//            </div>
//          </div>
//        </div>
//  </div>
