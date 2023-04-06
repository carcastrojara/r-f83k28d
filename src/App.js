import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.handleIncrement}>Incrementa</button>
      </div>
    );
  }
}

export default App;