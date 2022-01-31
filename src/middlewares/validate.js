const boom = require('@hapi/boom');

function validate(dto, prop) {
  return (req, res, next) => {
    const data = req[prop];
    const { error } = dto.validate(data, { abortEarly: false });

    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validate;
