import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/containers/Home';

const app = express();
app.use(express.static('public'));

const content = renderToString(<Home />);

app.get('/', (request, response) => {
  response.send(
    `<html>
    <header>
    <title>Hello world</title>
    </header>

      <body>
        <div id='root'>${content}</div>
        <script src='./index.js'></script>
      </body>
    </html>`,
  );
});

app.listen(3000);
