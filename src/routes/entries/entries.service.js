const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class Service {
  constructor() {}

  async create(entry) {
    const Entry = await models.Entry.create(entry);
    return Entry;
  }

  async getAll(category) {
    const entries = await models.Entry.findAll();

    if (entries.length === 0) {
      throw boom.notFound('No entries found');
    }

    if (category) {
      const filtered = entries.filter((entry) => entry.category === category);
      if (filtered.length === 0) {
        throw boom.notFound('No entries found with that category');
      }
      return filtered;
    } else {
      return entries;
    }
  }

  async getById(id) {
    const entry = await models.Entry.findByPk(id);

    if (!entry) {
      throw boom.notFound('Entry not found');
    }
    return entry;
  }

  async update(id, changes) {
    const entry = await this.getById(id);
    const res = await entry.update(changes);
    return res;
  }

  async delete(id) {
    const entry = await this.getById(id);
    await entry.destroy();
    return { 'deleted entry': id };
  }
}

module.exports = Service;
