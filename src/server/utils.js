import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import RoutesList from '../routes';
import generateStore from '../client/store';


export default function render(req) {
  const store = generateStore();

  const matchedRoutes = matchRoutes(RoutesList, req.path);
  console.log(matchedRoutes);

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
  <link rel="shortcut icon" href="./title.png">
</head>
<body>
  <div id='root'>${content}</div>
  <script src='/index.js'></script>
</body>
</html>`);
}
