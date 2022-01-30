const joi = require('joi');

const id = joi.number().integer().positive();
const title = joi.string().min(6).max(50);
const category = joi.string().min(3).max(50);
const content = joi.string().min(10).max(1000);
const intensity = joi.number().integer().positive();

const createEntry = joi.object({
  title: title.required(),
  category: category.required(),
  content: content.required(),
  intensity: intensity.required(),
});

const updateEntry = joi.object({
  id: id.required(),
  title: title,
  category: category,
  content: content,
  intensity: intensity,
});

const getEntry = joi.object({
  id: id.required(),
});

module.exports = { createEntry, updateEntry, getEntry };
