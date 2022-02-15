const { Model, DataTypes, Sequelize } = require('sequelize');

const ENTRY_TABLE = 'entries';

const EntrySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  intensity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Entry extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ENTRY_TABLE,
      modelName: 'Entry',
      timestamps: false,
    };
  }
}

module.exports = { ENTRY_TABLE, EntrySchema, Entry };
