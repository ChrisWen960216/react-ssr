import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getHomeList from '../redux/home/action';

class Home extends Component {
  static loadData(store) {
    return store.dispatch(getHomeList());
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.showMsg = this.showMsg.bind(this);
  }

  componentDidMount() {
    const { getHomeList: getHomeListReq, homeList } = this.props;
    if (!homeList.length) {
      return getHomeListReq();
    }
    return true;
  }

  showMsg() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  renderHomeList() {
    const { homeList } = this.props;
    const homeListDOM = homeList.length > 0
      ? homeList.map(item => <div key={item.id}>{item.title}</div>)
      : null;
    return homeListDOM;
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>
          {count}
        </h1>
        {this.renderHomeList()}
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
