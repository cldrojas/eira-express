const boom = require('@hapi/boom');

const getConnection = require('../../libs/postgres');

class Service {
  constructor() {}

  async create(entry) {
    const Entry = {
      id: this.entries.length + 1,
      ...entry,
    };
    this.entries.push(Entry);
    return Entry;
  }

  async getAll(category) {
    const client = await getConnection();
    const res = await client.query('SELECT * FROM entries');
    const entries = res.rows;
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
    const entry = this.entries.find((entry) => entry.id === id);
    if (entry === undefined) {
      throw boom.notFound('Entry not found');
    }
    return entry;
  }

  async update(id, changes) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index === -1) {
      throw boom.notFound('Entry not found');
    }
    const entry = this.entries[index];
    this.entries[index] = { ...entry, ...changes };
    return { message: 'Updated', ...index };
  }

  async delete(id) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index === -1) {
      throw boom.notFound('Entry not found');
    }
    this.entries.splice(index, 1);
    return { message: 'Deleted', id };
  }
}

module.exports = Service;
