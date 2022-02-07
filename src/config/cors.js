const whitelist = [
  'http://localhost:5000',
  'https://eira.com',
  'https://cldrojas.github.io/eira',
];

const options = {
  origin: (origin, callback) => {
    whitelist.includes(origin) || !origin
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  },
};

module.exports = options;
