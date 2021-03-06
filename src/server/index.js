import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import RoutesList from '../routes';
import render from './utils';
import { generateStore } from '../client/store';


const app = express();
app.use(express.static('public'));
// http://47.95.113.63/ssr
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver(req) {
    return `/ssr/api${req.url}`;
  },
}));

app.get('*', (request, response) => {
  const store = generateStore(request);

  const matchedRoutes = matchRoutes(RoutesList, request.path);

  const promisese = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promisese.push(promise);
    }
  });

  Promise.all(promisese).then(() => {
    response.send(render(store, request));
  });
});

app.listen(3000);
