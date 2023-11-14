import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      user:0
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.counter + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyClassComponent;