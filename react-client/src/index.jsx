import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GoogleSignIn from 'react-google-signin';
import TopBar from './components/TopBar.jsx';
import OneScreen from './components/OneScreen.jsx';
import TwoScreen from './components/TwoScreen.jsx';
import FourScreen from './components/FourScreen.jsx';
import TwitchPlayer from "./components/TwitchPlayer.jsx";


const axios = require('axios');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       //hieght width
//       numberOfScreens: 'two',
//       info: true,
//       screenSize: {
//         //change height based on info being shown or not (+- 30px i think)
//         one: [570, '1250px'],
//         two: [570, '653px'],
//         four: [310, '645px']
//       },

//       groupNames: [],
//       streamerList: ['loltyler1', 'imaqtpie', 'c9sneaky', 'yoda' ],
//       savedList: ['loltyler1', 'imaqtpie', 'c9sneaky', 'yoda' ],
//       userId: 21,
//       userData: {profileObj: { name: 'bob', }},
//       signedIn: false

//     };
//     this.numberOfScreens = this.numberOfScreens.bind(this);
//     this.showInfo = this.showInfo.bind(this);
//     this.changeStream = this.changeStream.bind(this);
    // this.renderSignIn = this.renderSignIn.bind(this);
    // this.changeGroup = this.changeGroup.bind(this);
    // this.saveGroup = this.saveGroup.bind(this);
    // this.deleteGroup = this.deleteGroup.bind(this);
//   }

  // userName(obj) {
  //   return obj.thumbnail_url.split('_')[2].split('-')[0];
  // }

  // changeStream(index, name) {
  //   var updatedList = this.state.savedList;
  //   updatedList[index] = name;
  //   this.setState({savedList: updatedList});
  // }

  // showInfo() {
  //   //change height???
  //   this.setState({info: !this.state.info});
  // }

  // renderSignIn(data) {
  //   //need user id. currently using mock data
  //   this.setState({signedIn: !this.state.signedIn});
  //   this.setState({userData: data});
  //   this.setState({userId: data.googleId});
  //   this.getGroups(this.state.userId);
  // }

  // changeGroup(array) {
  //   var updateSaved = array.split(',');
  //   this.setState({savedList: updateSaved});
  //   this.numberOfScreens('four');
  // }

  // saveGroup(name, id) {
  //   var obj = {userId: this.state.userId, groupName: name, streamers: this.state.savedList};
  //   axios.post('/groupList', obj)
  //     .then(()=> {
  //       this.getGroups(this.state.userId);
  //     });
  // }

  // getGroups(id) {
  //   axios.get(`/groupList/${id}`)
  //     .then(data => {
  //       console.log('success groups', data);
  //       this.setState({groupNames: data.data});
  //     });
  // }

  // deleteGroup(groupName, id) {
  //   axios.delete(`/groupList/${this.state.userId}/${groupName}`)
  //     .then(() => {
  //       this.getGroups(this.state.userId);
  //     });
  // }

  // componentWillMount() {
  //   //set height based on user window size
  //   var height = window.innerHeight
  //   || document.documentElement.clientHeight
  //   || document.body.clientHeight;
  //   //set width based on user window size
  //   var width = window.innerWidth
  //   || document.documentElement.clientWidth
  //   || document.body.clientWidth;
  //   var widthOne = width * .95 + 'px';
  //   var widthTwo = Math.floor(width * .475) + 'px';
  //   var widthFour = Math.floor(width * .475) - 20 + 'px';
  //   var newSize = {
  //     //change height based on info being shown or not (+- 30px i think)
  //     one: [height * .88, widthOne],
  //     two: [height * .88, widthTwo],
  //     four: [Math.floor(height / 2 - 45), widthTwo]
  //   };
  //   //Adjust the twitch screen player based on user screen size
  //   this.setState({screenSize: newSize});
  //   //Get list of active streamers from twitch api then update client with data
  //   axios.get('/streamerList')
  //     .then(data => {
  //       console.log('success', data.data.data);
  //       var list = data.data.data.map((el, index) => this.userName(el));
  //       this.setState({streamerData: data.data.data });
  //       this.setState({streamerList: list});
  //     });
  // }

  // numberOfScreens(string) {
  //   console.log('clicked', string);
  //   this.setState({numberOfScreens: string});
  // }

  // renderScreens() {
  //   const {numberOfScreens} = this.state;

  //   if (numberOfScreens === 'one') {
  //     return <OneScreen screenSize = {this.state.screenSize.one} streamerList = {this.state.streamerList} savedList={this.state.savedList[0]
  //     } singleScreen = {true} info={this.state.info} changeStream={this.changeStream}/>;

  //   } else if (numberOfScreens === 'two') {
  //     return <TwoScreen screenSize = {this.state.screenSize.two} streamerList = {this.state.streamerList} savedList={this.state.savedList}
  //       singleScreen = {false} info={this.state.info} changeStream={this.changeStream}/>;

  //   } else if (numberOfScreens === 'four') {
  //     return <FourScreen screenSize = {this.state.screenSize.four} streamerList = {this.state.streamerList} savedList={this.state.savedList}
  //       singleScreen = {false} info={this.state.info} changeStream={this.changeStream} />;

  //   } else {

  //   }
  // }

//   render () {
//     return (
//       <div className="container-fluid main" >
//         <TopBar numberOfScreens = {this.numberOfScreens} showInfo={this.showInfo}
//           info={this.state.info} signedIn={this.state.signedIn} renderSignIn={this.renderSignIn}
//           groupNames={this.state.groupNames} changeGroup={this.changeGroup} saveGroup={this.saveGroup} deleteGroup={this.deleteGroup} userData={this.state.userData} signedIn={this.state.signedIn}/>
//         {this.renderScreens()}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));





//save to config file later
//Here is your client ID (google Login)
//401076163775-b7bp2sdjonq1a4225ncmgt1sjuo1eked.apps.googleusercontent.com
//client secret
//PDQqXpkN-OO3eZvIrYittz10




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      //hieght width
      numberOfScreens: "one",
      info: true,
      screenSize: {
        //change height based on info being shown or not (+- 30px i think)
        one: [570, "1250px"],
        two: [570, "653px"],
        four: [310, "645px"]
      },

      groupNames: [],
      streamerList: ["loltyler1", "imaqtpie", "c9sneaky", "yoda"],
      savedList: ["loltyler1", "imaqtpie", "c9sneaky", "yoda"],
      userId: 21,
      userData: { profileObj: { name: "bob" } },
      signedIn: false
    };
    this.showInfo = this.showInfo.bind(this);
    this.numberOfScreens = this.numberOfScreens.bind(this);
    this.changeStream = this.changeStream.bind(this);
    this.userName = this.userName.bind(this);
    this.renderSignIn = this.renderSignIn.bind(this);
    this.changeGroup = this.changeGroup.bind(this);
    this.saveGroup = this.saveGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  componentDidMount() {
    //set height based on user window size
    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    //set width based on user window size
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var widthOne = width * 0.95 + "px";
    var widthTwo = Math.floor(width * 0.475) + "px";
    var widthFour = Math.floor(width * 0.475) - 20 + "px";
    var newSize = {
      //change height based on info being shown or not (+- 30px i think)
      one: [height * 0.89, widthOne],
      two: [height * 0.89, widthTwo],
      four: [Math.floor(height / 2 - 45), widthTwo]
    };
    //Adjust the twitch screen player based on user screen size
    this.setState({ screenSize: newSize });
    //Get list of active streamers from twitch api then update client with data
    axios.get("/streamerList").then(data => {
      console.log("success", data);
      var list = data.data.data.map((el, index) => this.userName(el));
      console.log("!!!!!!!!!!!!!!!!!!!", list);
      this.setState({ streamerData: data.data.data, streamerList: list });
    });
  }

  userName(obj) {
    return obj.thumbnail_url.split("_")[2].split("-")[0];
  }

  showInfo() {
    this.setState({ info: !this.state.info });
  }

  renderSignIn(data) {
    //need user id. currently using mock data
    this.setState({ signedIn: !this.state.signedIn });
    this.setState({ userData: data });
    this.setState({ userId: data.googleId });
    this.getGroups(this.state.userId);
  }

  numberOfScreens(string) {
    this.setState({ numberOfScreens: string });
  }

  changeStream(index, name) {
    var updatedList = this.state.savedList;
    updatedList[index] = name;
    console.log("#####################", updatedList);
    this.setState({ savedList: updatedList });
  }

  changeGroup(array) {
    var updateSaved = array.split(",");
    this.setState({ savedList: updateSaved });
    this.numberOfScreens("four");
  }

  saveGroup(name, id) {
    let obj = {
      userId: this.state.userId,
      groupName: name,
      streamers: this.state.savedList
    };
    axios.post("/groupList", obj).then(() => {
      this.getGroups(this.state.userId);
    });
  }

  getGroups(id) {
    axios.get(`/groupList/${id}`).then(data => {
      console.log("success groups", data);
      this.setState({ groupNames: data.data });
    });
  }

  deleteGroup(groupName, id) {
    axios.delete(`/groupList/${this.state.userId}/${groupName}`).then(() => {
      this.getGroups(this.state.userId);
    });
  }

  renderScreens() {
    const { numberOfScreens } = this.state;

    if (numberOfScreens === "one") {
      return (
        <OneScreen
          screenSize={this.state.screenSize.one}
          streamerList={this.state.streamerList}
          savedList={this.state.savedList}
          singleScreen={true}
          info={this.state.info}
          changeStream={this.changeStream}
        />
      );
    } else if (numberOfScreens === "two") {
      return (
        <TwoScreen
          screenSize={this.state.screenSize.two}
          streamerList={this.state.streamerList}
          savedList={this.state.savedList}
          singleScreen={false}
          info={this.state.info}
          changeStream={this.changeStream}
        />
      );
    } else if (numberOfScreens === "four") {
      return (
        <FourScreen
          screenSize={this.state.screenSize.four}
          streamerList={this.state.streamerList}
          savedList={this.state.savedList}
          singleScreen={false}
          info={this.state.info}
          changeStream={this.changeStream}
        />
      );
    } else {
    }
  }

  render() {
    return (
      <div id="main">
        <TopBar
          numberOfScreens={this.numberOfScreens}
          showInfo={this.showInfo}
          signedIn={this.state.signedIn}
          renderSignIn={this.renderSignIn}
          groupNames={this.state.groupNames} changeGroup={this.changeGroup} saveGroup={this.saveGroup} deleteGroup={this.deleteGroup} userData={this.state.userData}
        />
        {this.renderScreens()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));



// <div className="dropdown">
//             <div className="dropdown-trigger">
//               <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
//                 <span>Dropdown button</span>
//                 <span className="icon is-small">
//                   <i className="fas fa-angle-down" aria-hidden="true"></i>
//                 </span>
//               </button>
//             </div>
//             <div className="dropdown-menu" id="dropdown-menu" role="menu">
//               <div className="dropdown-content">
//                 <a href="#" className="dropdown-item">
//                   Dropdown item
//                 </a>
//                 <a className="dropdown-item">
//                   Other dropdown item
//                 </a>
//                 <a href="#" className="dropdown-item is-active">
//                   Active dropdown item
//                 </a>
//                 <a href="#" className="dropdown-item">
//                   Other dropdown item
//                 </a>
//                 <hr className="dropdown-divider"/>
//                 <a href="#" className="dropdown-item">
//                   With a divider
//                 </a>
//               </div>
//             </div>
//           </div>
//           <span> </span>
          // <span className="tag is-info is-medium">Streamer Name</span>
          // <span> </span>
          // <span className="tag is-info is-medium">Search</span>
//           </div>