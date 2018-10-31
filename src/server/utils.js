import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from '../routes';


export default function render(req) {
  const reducer = (state = { name: 'ChristianWen' }) => state;
  const store = createStore(reducer, applyMiddleware(thunk));


  const content = renderToString((
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  ));

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
