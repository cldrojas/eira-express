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
  const entry = service.getById(parseInt(id));

  entry
    ? res.status(200).json(entry)
    : res.status(404).json({ message: 'Entry not found' });
});

router.post('/', (req, res) => {
  const Entry = service.create(req.body);

  res.status(201).json(Entry);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const Entry = service.update(parseInt(id), body);
  res.status(200).json(Entry);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const deleted = service.delete(parseInt(id));
  res.status(200).json(deleted);
});

module.exports = router;
