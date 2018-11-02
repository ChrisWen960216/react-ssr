// import React from 'react';
// import { Route } from 'react-router-dom';

import Home from './client/containers/Home';
import LogIn from './client/containers/LogIn';
import App from './app';

const RoutesList = [{
  path: '/',
  component: App,
  routes: [{
    path: '/login',
    component: LogIn,
  },
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
  },
  ],
},
];

export default RoutesList;
