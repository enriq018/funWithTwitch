import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GoogleSignIn from "react-google-signin";
import TopBar from "./components/TopBar.jsx";
import OneScreen from "./components/OneScreen.jsx";
import TwoScreen from "./components/TwoScreen.jsx";
import FourScreen from "./components/FourScreen.jsx";
import TwitchPlayer from "./components/TwitchPlayer.jsx";
import axios from 'axios'
// const axios = require("axios");


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfScreens: "two",
      info: true,
      groupNames: [],
      streamerList: ["loltyler1", "ninja", "c9sneaky", "imaqtpie"],
      savedList: ["loltyler1", "ninja", "c9sneaky", "imaqtpie"],
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
    axios.get("/streamerList").then(data => {
      let list = data.data.data.map((el, index) => this.userName(el));
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
    let updatedList = this.state.savedList;
    updatedList[index] = name;
    this.setState({ savedList: updatedList });
  }

  changeGroup(array) {
    let updateSaved = array.split(",");
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
        <OneScreen savedList={this.state.savedList}/>
      );
    } else if (numberOfScreens === "two") {
      return (
        <TwoScreen savedList={this.state.savedList}/>
      );
    } else if (numberOfScreens === "four") {
      return (
        <FourScreen savedList={this.state.savedList} />
      );
    } else {
    }
  }

  render() {
    return (
      <div id="main">
        <TopBar
          savedList={this.state.savedList}
          changeStream={this.changeStream}
          streamerList={this.state.streamerList}
          numberOfScreens={this.numberOfScreens}
          showInfo={this.showInfo}
          signedIn={this.state.signedIn}
          renderSignIn={this.renderSignIn}
          groupNames={this.state.groupNames}
          changeGroup={this.changeGroup}
          saveGroup={this.saveGroup}
          deleteGroup={this.deleteGroup}
          userData={this.state.userData}
        />
        {this.renderScreens()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

//save to config file later
//Here is your client ID (google Login)
//401076163775-b7bp2sdjonq1a4225ncmgt1sjuo1eked.apps.googleusercontent.com
//client secret
//PDQqXpkN-OO3eZvIrYittz10