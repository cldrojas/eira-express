const whitelist = [
  'http://localhost:3000',
  'https://eira.com',
  'https://cldrojas.github.io/eira',
];

const options = {
  origin: (origin, callback) => {
    whitelist.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

module.exports = options;
