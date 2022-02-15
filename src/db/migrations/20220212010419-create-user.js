'use strict';

const { EntrySchema, ENTRY_TABLE } = require('../models/entry.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ENTRY_TABLE, EntrySchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(ENTRY_TABLE);
  },
};
