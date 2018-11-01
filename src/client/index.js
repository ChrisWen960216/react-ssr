import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesList from '../routes';
import { getClientStore } from './store';


const APP = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {RoutesList.map(route => <Route {...route} key={route.path} />)}
      </div>
    </BrowserRouter>
  </Provider>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
