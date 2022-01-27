const express = require('express');
const Router = require('./router');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Eira api using express');
});

Router(app);
app.listen(3000);
