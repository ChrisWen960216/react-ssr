import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogStatus, logIn, logOut } from '../../redux/logIn/action';


class HeaderComponent extends Component {
  static loadData(store) {
    return store.dispatch(getLogStatus());
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.renderNavList = this.renderNavList.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logOut() {
    const { logOut: sendLogoOut } = this.props;
    return sendLogoOut();
  }

  logIn() {
    const { logIn: sendLogIn } = this.props;
    return sendLogIn();
  }

  renderNavList() {
    const { login } = this.props;
    const navList = login ? (
      <Fragment>
        {' '}
        <li>
          <button type="button" onClick={this.logOut}>LogOut</button>
        </li>
        <li>
          <Link to="/trans">trans</Link>
        </li>
      </Fragment>
    ) : (
      <li>
        {' '}
        <Link to="/login">Login</Link>
        <button type="button" onClick={this.logIn}>LogIn</button>
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

function mapDispatchToProps(dispatch) {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
  };
}

HeaderComponent.propTypes = {
  login: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
  login: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
