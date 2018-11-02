import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../redux/logIn/action';


class HeaderComponent extends Component {
  static loadData(store) {
    return store.dispatch(logIn());
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.renderNavList = this.renderNavList.bind(this);
  }

  renderNavList() {
    const { login } = this.props;
    const navList = login ? (
      <Fragment>
        {' '}
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/trans">trans</Link>
        </li>
      </Fragment>
    ) : (
      <li>
        {' '}
        <Link to="/login">Login</Link>
      </li>
    );
    return navList;
  }

  render() {
    return (
      <header>
        <ul>
          <li>
            {' '}
            <Link to="/">Home</Link>
          </li>
          {this.renderNavList()}
        </ul>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.login,
  };
}

function mapDispatchToProps() {
  return {};
}

HeaderComponent.propTypes = {
  login: PropTypes.bool,
};

HeaderComponent.defaultProps = {
  login: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
