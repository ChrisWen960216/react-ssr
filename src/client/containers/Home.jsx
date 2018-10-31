import React, { Component } from 'react';
import HeaderComponent from './common/Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.showMsg = this.showMsg.bind(this);
  }

  showMsg() {
    this.setState(preState => ({ count: preState.count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <HeaderComponent />
        <h1>
          Hello Christian:
          {count}
        </h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}
