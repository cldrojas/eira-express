const { Sequelize } = require('sequelize');

const config = require('../config/config');
const setupModels = require('../db/models');

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const uri = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(uri, { dialect: 'postgres' });

setupModels(sequelize);

module.exports = sequelize;
