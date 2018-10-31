import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../routes';

const app = express();
app.use(express.static('public'));


app.get('/', (request, response) => {
  const content = renderToString((
    <StaticRouter context={{}} location={request.path}>
      {Routes}
    </StaticRouter>
  ));

  response.send(
    `
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
</html>`,
  );
});

app.listen(3000);
