import express from 'express';

import render from './utils';

const app = express();
app.use(express.static('public'));


app.get('*', (request, response) => {
  response.send(render(request));
});

app.listen(3000);
