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
      info: false,
      screenSize: {
        //change height based on info being shown or not (+- 30px i think)
        one: [600, '1250px'],
        two: [600, '650px'],
        four: [330, '620px']
      },

      streamerList: ['Shiphtur','scarra','c9sneaky', 'imaqtpie']
    };
    this.numberOfScreens = this.numberOfScreens.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  userName(obj) {
    return obj.thumbnail_url.split('_')[2].split('-')[0]
  }

  showInfo() {
    //change height???
    this.setState({info: !this.state.info});
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
    console.log('clicked', string)
    this.setState({numberOfScreens: string});
  }

  renderScreens() {
    const {numberOfScreens} = this.state;

    if (numberOfScreens === 'one') {
      return <OneScreen screenSize = {this.state.screenSize.one} streamerList = {this.state.streamerList} singleScreen = {true} info={this.state.info}/>

    } else if (numberOfScreens === 'two') {
      return <TwoScreen screenSize = {this.state.screenSize.two} streamerList = {this.state.streamerList} singleScreen = {false} info={this.state.info}/>

    } else if (numberOfScreens === 'four') {
      return <FourScreen screenSize = {this.state.screenSize.four} streamerList = {this.state.streamerList} singleScreen = {false} info={this.state.info} />

    } else {

    }
  }

  render () {
    return (
      <div className="container-fluid main" >
        <TopBar numberOfScreens = {this.numberOfScreens} showInfo={this.showInfo} info={this.state.info}/>
        {this.renderScreens()}
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));