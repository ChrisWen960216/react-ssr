import React, { Component } from 'react';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.showMsg = this.showMsg.bind(this);
  }

  showMsg() {
    this.setState(preState => ({ ...preState, count: preState.count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>
          LogInCount:
          {count}
        </h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}
