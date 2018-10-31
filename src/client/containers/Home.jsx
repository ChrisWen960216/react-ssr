import React, { Component } from 'react';
import HeaderComponent from './common/Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showMsg = this.showMsg.bind(this);
  }

  showMsg() {}

  render() {
    return (
      <div>
        <HeaderComponent />
        <h1>Hello Christian</h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}
