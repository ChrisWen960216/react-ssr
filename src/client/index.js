import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../routes';
import generateStore from './store';


const APP = () => (
  <Provider store={generateStore()}>
    <BrowserRouter>

      {Routes}

    </BrowserRouter>
  </Provider>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
