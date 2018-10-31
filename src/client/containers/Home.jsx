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

  renderHomeList() {
    const { homeList } = this.props;
    const homeListDOM = homeList.length > 0
      ? homeList.map(item => <li key={item.id}>{item.title}</li>)
      : null;
    return homeListDOM;
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <HeaderComponent />
        <h1>
          {count}
        </h1>
        <ul>
          {this.renderHomeList()}
        </ul>
        <button onClick={this.showMsg} type="button">Click</button>
      </div>
    );
  }
}

Home.propTypes = {
  homeList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })),
  getHomeList: PropTypes.func.isRequired,
};

Home.defaultProps = {
  homeList: [],
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
