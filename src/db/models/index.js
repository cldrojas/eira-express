const { Entry, EntrySchema } = require('./entry.model');
// const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Entry.init(EntrySchema, Entry.config(sequelize));
  // User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
