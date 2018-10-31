import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderComponent from './common/Header';
import getHomeList from '../redux/home/action';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.showMsg = this.showMsg.bind(this);
  }


  componentDidMount() {
    const { getHomeList: getHomeListReq } = this.props;
    return getHomeListReq();
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
  getHomeList: PropTypes.func.isRequired,
};

Home.defaultProps = {
  home: '',
};

function mapStateToProps(state) {
  return { ...state.home };
}

function mapDispatchToProps(dispatch) {
  return {
    getHomeList: () => dispatch(getHomeList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
