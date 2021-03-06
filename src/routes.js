// import React from 'react';
// import { Route } from 'react-router-dom';

import Home from './client/containers/Home';
import LogIn from './client/containers/LogIn';
import Trans from './client/containers/Trans';
import App from './app';

const RoutesList = [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [{
    path: '/login',
    component: LogIn,
    loadData: LogIn.loadData,
  },
  {
    path: '/trans',
    component: Trans,
    loadData: Trans.loadData,
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
