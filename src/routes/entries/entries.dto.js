const joi = require('joi');

const categories = ['test', 'tested']; // get categories from db

const id = joi.number().integer().positive();
const title = joi.string().min(6).max(50);
const content = joi.string().min(10).max(1000);
const category = joi.string().valid(...categories);
const intensity = joi.number().integer().positive();

const createEntry = joi.object({
  title: title.required(),
  content: content.required(),
  category: category.required(),
  intensity: intensity.required(),
});

const updateEntry = joi.object({
  title: title,
  content: content,
  category: category,
  intensity: intensity,
});

const getEntry = joi.object({
  id: id.required(),
});

module.exports = { createEntry, updateEntry, getEntry };
