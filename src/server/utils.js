import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesList from '../routes';
import generateStore from '../client/store';


export default function render(req) {
  const store = generateStore();

  const matchRoutes = [];

  RoutesList.some((route) => {
    const match = matchPath(req.path, route);
    if (match) { matchRoutes.push(route.loadData(match)); }
    return match;
  });

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>
          {RoutesList.map(route => <Route {...route} key={route.path} />)}
        </div>
      </StaticRouter>
    </Provider>,
  );

  return (`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id='root'>${content}</div>
  <script src='/index.js'></script>
</body>
</html>`);
}
