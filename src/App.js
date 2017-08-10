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
        <div>
          <input type="number" onChange={this.handleRotationChange} value={this.state.rotation} />
          <input type="number" onChange={this.handleXChange} value={this.state.x} />
          <input type="number" onChange={this.handleYChange} value={this.state.y} />
        </div>
      </div>
    );
  }
}


export default App;
