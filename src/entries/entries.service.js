const boom = require('@hapi/boom');

class Service {
  constructor() {
    this.entries = [
      { id: 1, title: 'Hello world', category: 'test', content: 'first entry' },
      {
        id: 2,
        title: 'Hello world',
        category: 'test',
        content: 'second entry',
      },
      {
        id: 3,
        title: 'Hello world',
        category: 'tested',
        content: 'third entry',
      },
      { id: 4, title: 'Hello world', category: 'test', content: 'edit this' },
    ];
  }

  async create(entry) {
    const Entry = {
      id: this.entries.length + 1,
      ...entry,
    };
    this.entries.push(Entry);
    return Entry;
  }

  async getAll(category) {
    if (this.entries.length === 0) {
      throw boom.notFound('No entries found');
    }
    if (category) {
      const filtered = this.entries.filter(
        (entry) => entry.category === category
      );
      if (filtered.length === 0) {
        throw boom.notFound('No entries found with that category');
      }
      return filtered;
    } else {
      return this.entries;
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
