const express = require('express');
const Service = require('./entries.service');

const router = express.Router();
const service = new Service();

router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    const entries = await service.getAll(category);
    res.status(200).json(entries);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const entry = await service.getById(parseInt(id));
    res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  // TODO: get error handling on service
  const entry = await service.create(req.body);
  res.status(201).json(entry);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const entry = await service.update(parseInt(id), body);
    res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await service.delete(parseInt(id));
    res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
