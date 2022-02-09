const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error');

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const Router = require('./router');
const corsOptions = require('./config/cors');

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Eira api using express');
});

Router(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listening on port', port);
});
