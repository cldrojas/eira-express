const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error');

const express = require('express');
const cors = require('cors');
const app = express();

const Router = require('./router');
const corsOptions = require('./config/cors');

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Eira api using express');
});

Router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000);
