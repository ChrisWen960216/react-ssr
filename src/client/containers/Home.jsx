import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showMsg = this.showMsg.bind(this);
  }

  showMsg() {
    alert('Hello world');
  }

  render() {
    return (
      <div>
        <h1>Hello Christian</h1>
        <button onClick={this.showMsg}>Click</button>
      </div>
    );
  }
}
