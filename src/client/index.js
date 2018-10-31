import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

const APP = () => (
  <BrowserRouter>
    {Routes}
  </BrowserRouter>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
