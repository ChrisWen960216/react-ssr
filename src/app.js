import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import RoutesList from './routes';
import HeaderComponent from './client/containers/common/Header';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { route } = this.props;
    console.log(route);
    return (
      <div>
        <HeaderComponent />
        {renderRoutes(RoutesList[0].routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    routes: PropTypes.any.isRequired,
  }).isRequired,
};
