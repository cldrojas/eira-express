const config = require('../config/config');

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const uri = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: uri,
    dialect: 'postgres',
  },
  production: {
    url: uri,
    dialect: 'postgres',
  },
};
