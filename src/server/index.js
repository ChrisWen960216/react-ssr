import express from 'express';

import { matchRoutes } from 'react-router-config';
import render from './utils';
import { generateStore } from '../client/store';
import RoutesList from '../routes';

const app = express();
app.use(express.static('public'));


app.get('*', (request, response) => {
  const store = generateStore();

  const matchedRoutes = matchRoutes(RoutesList, request.path);

  const promisese = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promisese.push(item.route.loadData(store));
    }
  });

  Promise.all(promisese).then(() => {
    response.send(render(store, request));
  });
});

app.listen(3000);
