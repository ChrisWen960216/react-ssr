import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './containers/Home.jsx';

const app = express();

app.get('/', (request, response) => {
  response.send(renderToString(<Home />));
});

app.listen(3000);
