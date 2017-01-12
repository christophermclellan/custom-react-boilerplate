import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Container</h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;