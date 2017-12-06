import React from 'react';

const TopBar = (props) => (
<div className="container topBar">
  <div className="row">
    <div className="col-md-4">
      <div className="btn-group btn-group-sm buttons" role="group" aria-label="Basic example">

			  <button onClick = {()=> props.numberOfScreens('one')} type="button" className="btn btn-secondary">1</button>
			  <button onClick = {()=> props.numberOfScreens('two')} type="button" className="btn btn-secondary">2</button>
			  <button onClick = {()=> props.numberOfScreens('four')} type="button" className="btn btn-secondary">4</button>

			</div>
    </div>
    <div className="col-md-4">
      <h5>TwitchyLite</h5>
    </div>
    <div className="col-md-4">

    </div>
  </div>
</div>

)


export default TopBar;


