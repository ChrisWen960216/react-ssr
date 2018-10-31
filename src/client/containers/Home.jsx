import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { home } = this.props;
    return (
      <div>
        <HeaderComponent />
        <h1>
          Hello
          {' '}
          {home}
:
          {count}
        </h1>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}

Home.propTypes = {
  home: PropTypes.string,
};

Home.defaultProps = {
  home: '',
};

function mapStateToProps(state) {
  return { ...state.home };
}

export default connect(mapStateToProps)(Home);
