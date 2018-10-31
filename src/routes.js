import React from 'react';
import { Route } from 'react-router-dom';

import Home from './client/containers/Home';
import LogIn from './client/containers/LogIn';

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LogIn} />
  </div>
);
