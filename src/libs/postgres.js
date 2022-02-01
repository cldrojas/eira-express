const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    database: 'eira',
    user: 'cldrojas',
    password: '123pollo',
    port: 5432,
  });

  client.connect();
  return client;
};

module.exports = getConnection;
