const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
  tokenHash: {
    type: String,
    required: true
  },
  refreshTokenHash: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isRevoked: {
    type: Boolean,
    default: false
  },
  expireAt: {
    type: Date,
    required: true,
    expires: -1
  }
});

module.exports = mongoose.model('Session', sessionSchema);