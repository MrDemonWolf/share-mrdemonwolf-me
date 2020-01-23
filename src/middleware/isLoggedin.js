module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You need to be logged in to do that!');
    res.redirect(401, '/login');
    return;
  }
  next();
};
