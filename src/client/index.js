import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import RoutesList from '../routes';
import { getClientStore } from './store';


const APP = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {renderRoutes(RoutesList)}
        {/* {RoutesList.map(route => <Route {...route} key={route.path} />)} */}
      </div>
    </BrowserRouter>
  </Provider>
);


ReactDOM.hydrate(<APP />, document.getElementById('root'));
