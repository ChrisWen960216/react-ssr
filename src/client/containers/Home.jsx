import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './common/Header';

class Home extends Component {
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
    const { name } = this.props;
    return (
      <div>
        <HeaderComponent />
        <h1>
          Hello
          {' '}
          {name}
:
          {count}
        </h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { name: state.name };
}

export default connect(mapStateToProps)(Home);
