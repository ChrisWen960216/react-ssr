import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesList from '../routes';
import generateStore from './store';


const APP = () => (
  <Provider store={generateStore()}>
    <BrowserRouter>
      <div>
        {RoutesList.map(route => <Route {...route} key={route.path} />)}
      </div>
    </BrowserRouter>
  </Provider>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
