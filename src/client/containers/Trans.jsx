import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTransList from '../redux/trans/action';

class Trans extends Component {
  static loadData(store) {
    return store.dispatch(getTransList());
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getTransList: sendgetTransListReq, trans } = this.props;
    if (!trans.length) {
      return sendgetTransListReq();
    }
    return true;
  }

  renderHomeList() {
    const { trans } = this.props;
    const homeListDOM = trans.length > 0
      ? trans.map(item => <li key={item.id}>{item.title}</li>)
      : null;
    return homeListDOM;
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderHomeList()}
        </ul>
      </div>
    );
  }
}

Trans.propTypes = {
  trans: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })),
  getTransList: PropTypes.func.isRequired,
};

Trans.defaultProps = {
  trans: [],
};

function mapStateToProps(state) {
  return { ...state.home, ...state.trans };
}

function mapDispatchToProps(dispatch) {
  return {
    getTransList: () => dispatch(getTransList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trans);
