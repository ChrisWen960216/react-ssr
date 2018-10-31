import React from 'react';
import { Route } from 'react-router-dom';

import Home from './client/containers/Home';

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
  </div>
);
