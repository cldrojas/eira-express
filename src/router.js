const express = require('express');
const entriesRouter = require('./routes/entries/entries.router');

const Router = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/entries', entriesRouter);
};

module.exports = Router;
