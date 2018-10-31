// import React from 'react';
// import { Route } from 'react-router-dom';

import Home from './client/containers/Home';
import LogIn from './client/containers/LogIn';

export default [{
  path: '/',
  component: Home,
  exact: true,
  loadData: Home.loadData,
}, {
  path: '/login',
  component: LogIn,
},
];
