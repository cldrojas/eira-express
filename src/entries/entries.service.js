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
    entry ? this.entries.push(entry) : null;
  }

  getAll(category) {
    return category
      ? this.entries.filter((entry) => entry.category === category)
      : this.entries;
  }

  getById(id) {
    return this.entries.find((entry) => entry.id === id);
  }
}

module.exports = Service;
