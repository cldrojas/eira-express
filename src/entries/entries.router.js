const express = require('express');
const Service = require('./entries.service');

const router = express.Router();
const service = new Service();

router.get('/', (req, res) => {
  const { category } = req.query;
  const entries = service.getAll(category);

  res.status(200).json(entries);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // TODO: validate id
  res.status(200).json({
    id: parseInt(id),
    title: 'Hello world',
    content: 'test entry id',
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const Entry = {
    id: 4,
    ...body,
  };

  res.status(201).json({ message: 'Created', Entry });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const Entry = {
    id: parseInt(id),
    ...body,
  };
  // TODO: update entry
  res.status(200).json({ message: 'Updated', Entry });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // TODO: delete entry
  res.status(200).json({ message: 'Deleted', id });
});

module.exports = router;
