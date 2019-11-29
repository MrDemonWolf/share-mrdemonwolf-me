const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  // eslint-disable-next-line prefer-const
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmpty(data.email)) {
    errors.email = 'Email is required.';
  }
  if (!Validator.isEmpty(data.email)) {
    errors.password = 'Password is required.';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invaild.  Example (example@example.com)';
  }
};
