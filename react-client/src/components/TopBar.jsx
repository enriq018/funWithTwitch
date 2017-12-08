import React from 'react';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNameText: '',
      saveGroupBox:false
    }
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
              <input onChange={(e)=> this.setState({groupNameText:e.target.value})} placeholder="group name"/>
              <button type="button" className="btn btn-secondary" onClick={()=> this.props.saveGroup(this.state.groupNameText)}> <span className="fa fa-download"></span> Save Group</button>
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                {this.props.groupNames.map((el, index) => <a onClick={()=> this.props.changeGroup(el.streamers)}className="dropdown-item" key ={index}>{el.group}</a>)}
              </div>
            </div>:
               <h5>T-Lite</h5>}
            
          </div>
          <div className="col-md-4">
            <button onClick={()=> this.props.renderSignIn()}> clickMe </button>

          </div>

        </div>
      </div>
    )
  }
} 


export default TopBar;


