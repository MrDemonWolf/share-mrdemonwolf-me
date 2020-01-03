const jwt = require('jsonwebtoken');
const sha512 = require('js-sha512');
const moment = require('moment');

/**
 * Load MongoDB models.
 */
const Token = require('.././models/Token');

/**
 * Create Token Controler - Creates a API token for the user to use with sharex or other tools.
 */
exports.postToken = async (req, res, next) => {
  try {
    const { name, expire } = req.body;
    let expireAt;
    let expiresIn;

    if (expire !== 'custom') {
      switch (expire) {
        case '1':
          expireAt = moment().add('24', 'h');
          expiresIn = '24h';
          break;
        case '7':
          expireAt = moment().add('7', 'd');
          expiresIn = '7d';
          break;
        case '30':
          expireAt = moment().add('1', 'm');
          expiresIn = '1m';
          break;
        default:
          expireAt = moment().add('100', 'y');
          expiresIn = '100y';
      }
    }

    const jwtToken = jwt.sign({}, process.env.API_SECRET, {
      issuer: process.env.TITLE,
      subject: req.user.id.toString(),
      expiresIn
    });

    const jwtHash = sha512(jwtToken);

    const token = new Token({
      user: req.user.id,
      hash: jwtHash,
      name,
      expireAt
    });

    console.log(expireAt);
    console.log(expiresIn);
    await token.save();

    req.flash(
      'success',
      `Here's your API token ${jwtToken} .  This will not be showed again for security reasons.`
    );
    res.redirect('/tokens');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
