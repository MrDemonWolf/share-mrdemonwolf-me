const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = (req, res, next) => {
  let { password, comfirmPassword } = req.body;

  // eslint-disable-next-line prefer-const
  let errors = {};

  password = !isEmpty(password) ? password : '';
  comfirmPassword = !isEmpty(comfirmPassword) ? comfirmPassword : '';

  if (Validator.isEmpty(password)) {
    errors.password = 'New Password is required.';
  }

  if (Validator.isEmpty(comfirmPassword)) {
    errors.comfirmPassword = 'Comfirm new password required.';
  }

  if (password !== comfirmPassword) {
    errors.match = 'Both passwords must match';
  }

  if (!isEmpty(errors)) {
    req.flash('error', errors);
    return res.redirect(400, `/user/reset-password/${req.params.token}`);
  }
  next();
};
