const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const User = require('../models/User');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/isSessionValid');

/**
 * Require authentication middleware.
 */
const requireAuth = passport.authenticate('jwt', {
  session: false
});

/**
 * @route /account
 * @method GET
 * @description Allows a logged in user to get there data.
 * @access Private
 */
router.get('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Get the current user data and remove sensitive data
     */
    const user = await User.findById(req.user.id).select('-password -__v');

    res.status(200).json({ code: 200, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/update
 * @method PUT
 * @description Allows a logged in user to update their account details
 * @access Private
 *
 * @param (body) {String} username New Username for the current account
 */
router.put('/update', async (req, res) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(
      req.user.id,
      {
        username
      },
      {
        $safe: true
      }
    );
    res.status(200).json({ code: 200, message: 'Updated user profile.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/update/email
 * @method POST
 * @description Allows a logged in user to update their email address with a new one
 * This does require them to have to verify said new email.
 * @access Private
 *
 * @param (body) {String} username New Username for the current account
 */
router.post('/update/email', async (req, res) => {
  try {
    const { newEmail } = req.body;
    const user = await User.findById(req.user.id);

    user.newEmail = newEmail;
    await user.save();
    res.status(200).json({ code: 200, message: '' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/update/twofactor/:boolean
 * @method PUT
 * @description Allows a logged in user to update their account details
 * @access Private
 *
 * @param (body) {String} username New Username for the current account
 */
router.put('/update/twofactor/:boolean', async (req, res) => {
  try {
    res.status(200).json({ code: 200, message: 'Updated user profile.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/verify/twofactor/:token
 * @method PUT
 * @description Allows a logged in user to update their account details
 * @access Private
 *
 * @param (body) {String} username New Username for the current account
 */
router.put('/verify/twofactor/:token', async (req, res) => {
  try {
    res.status(200).json({ code: 200, message: 'Updated user profile.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/verify/email/:token
 * @method PUT
 * @description Allows a logged in user to update their account details
 * @access Private
 *
 * @param (body) {String} username New Username for the current account
 */
router.put('/verify/email/:token', async (req, res) => {
  try {
    res.status(200).json({ code: 200, message: 'Updated user profile.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/delete
 * @method DELETE
 * @description Allows a logged in user to delete their account and all releated infomation.
 * @access Private
 */

/**
 * @route /account/email-change/:token
 * @method POST
 * @description Allows a logged in user to comfirm their email with the token send to it.
 * @access Private
 */

module.exports = router;