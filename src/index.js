const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error');

const express = require('express');
const Router = require('./router');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Eira api using express');
});

Router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000);
