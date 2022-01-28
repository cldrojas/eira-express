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

  create(entry) {
    const Entry = {
      id: this.entries.length + 1,
      ...entry,
    };
    this.entries.push(Entry);
    return Entry;
  }

  getAll(category) {
    return category
      ? this.entries.filter((entry) => entry.category === category)
      : this.entries;
  }

  getById(id) {
    return this.entries.find((entry) => entry.id === id);
  }

  update(id, changes) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index === -1) {
      throw new Error('Entry not found');
    }
    const entry = this.entries[index];
    this.entries[index] = { ...entry, ...changes };
    return this.entries[index];
  }

  delete(id) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index === -1) {
      throw new Error('Entry not found');
    }
    this.entries.splice(index, 1);
    return { message: 'Deleted', id };
  }
}

module.exports = Service;
