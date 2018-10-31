import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from '../routes';

const reducer = (state = { name: 'christianWen' }) => state;

const store = createStore(reducer);

const APP = () => (
  <Provider store={store}>
    <BrowserRouter>

      {Routes}

    </BrowserRouter>
  </Provider>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
