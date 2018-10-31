import React, { Component } from 'react';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showMsg = this.showMsg.bind(this);
  }

  showMsg() {}

  render() {
    return (
      <div>
        <h1>Hello LogIn</h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}
