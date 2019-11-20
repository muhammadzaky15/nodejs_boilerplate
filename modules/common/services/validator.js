const Validator = require('fastest-validator');

const v = new Validator();

module.exports = {
  validate: (schema, data) => {
    const check = v.compile(schema);

    return check(data);
  },
};
