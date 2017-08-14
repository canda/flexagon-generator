import React from 'react';

import Flexagon from './Flexagon';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
      x: 0,
      y: 0
    }
  }

  handleRotationChange = (e) => {
    this.setState({
      rotation: e.target.value
    })
  }
  handleXChange = (e) => {
    this.setState({
      x: e.target.value
    })
  }
  handleYChange = (e) => {
    this.setState({
      y: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Flexagon
          rotation={this.state.rotation}
          x={this.state.x}
          y={this.state.y}
        />
      </div>
    );
  }
}


export default App;
