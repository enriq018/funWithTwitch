import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TopBar from './components/TopBar.jsx';
import OneScreen from './components/OneScreen.jsx';
import TwoScreen from './components/TwoScreen.jsx';
import FourScreen from './components/FourScreen.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      //hieght width
      numberOfScreens: 'one',
      info: true,
      screenSize: {
        //change height based on info being shown or not (+- 30px i think)
        one: [590, '1250px'],
        two: [588, '653px'],
        four: [320, '645px']
      },
      groupNames: [],
      streamerList: ['callofduty','scarra','c9sneaky', 'imaqtpie'],
      savedList: ['callofduty','scarra','c9sneaky', 'imaqtpie'],
      userId: 21
    };
    this.numberOfScreens = this.numberOfScreens.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.changeStream = this.changeStream.bind(this);
    this.renderSignIn = this.renderSignIn.bind(this);
    this.changeGroup = this.changeGroup.bind(this);
    this.saveGroup = this.saveGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  userName(obj) {
    return obj.thumbnail_url.split('_')[2].split('-')[0]
  }

  changeStream(index, name) {
    var updatedList = this.state.savedList;
    updatedList[index] = name;
    this.setState({savedList: updatedList});
  }

  showInfo() {
    //change height???
    this.setState({info: !this.state.info});
  }

  renderSignIn() {
    //need user id. currently using mock data
    this.setState({signedIn: !this.state.signedIn});
    this.getGroups(this.state.userId);

  }

  changeGroup(array) {
    var updateSaved = array.split(',');
    this.setState({savedList: updateSaved});
    this.numberOfScreens('four');
  }

  saveGroup(name) {
    var obj = {userId: this.state.userId, groupName: name, streamers: this.state.savedList};
    axios.post('/groupList',obj)
      .then(()=> {
        this.getGroups(this.state.userId)
      })
  }

  getGroups(id) {
    console.log('@@@@@@@@@@@');
    axios.get(`/groupList/${id}`)
      .then(data => {
        console.log('success groups', data);
        this.setState({groupNames: data.data});
      });
  }

  deleteGroup(groupName) {
    axios.delete(`/groupList/${this.state.userId}/${groupName}`)
      .then(() => {
        this.getGroups(this.state.userId);
      });
  }


  componentWillMount() {
    axios.get('/streamerList')
      .then(data => {
        console.log('success', data.data.data);
        var list = data.data.data.map((el, index) => this.userName(el))
        this.setState({streamerData: data.data.data });
        this.setState({streamerList: list});
      });
  }

  numberOfScreens(string) {
    console.log('clicked', string);
    this.setState({numberOfScreens: string});
  }

  renderScreens() {
    const {numberOfScreens} = this.state;

    if (numberOfScreens === 'one') {
      return <OneScreen screenSize = {this.state.screenSize.one} streamerList = {this.state.streamerList} savedList={this.state.savedList[0]
      } singleScreen = {true} info={this.state.info} changeStream={this.changeStream}/>

    } else if (numberOfScreens === 'two') {
      return <TwoScreen screenSize = {this.state.screenSize.two} streamerList = {this.state.streamerList} savedList={this.state.savedList}
       singleScreen = {false} info={this.state.info} changeStream={this.changeStream}/>

    } else if (numberOfScreens === 'four') {
      return <FourScreen screenSize = {this.state.screenSize.four} streamerList = {this.state.streamerList} savedList={this.state.savedList}
       singleScreen = {false} info={this.state.info} changeStream={this.changeStream} />

    } else {

    }
  }

  render () {
    return (
      <div className="container-fluid main" >
        <TopBar numberOfScreens = {this.numberOfScreens} showInfo={this.showInfo} 
        info={this.state.info} signedIn={this.state.signedIn} renderSignIn={this.renderSignIn} 
        groupNames={this.state.groupNames} changeGroup={this.changeGroup} saveGroup={this.saveGroup} deleteGroup={this.deleteGroup}/>
        {this.renderScreens()}
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));