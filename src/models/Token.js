const mongoose = require('mongoose');

const { Schema } = mongoose;
const tokenSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      default: 'Default Token Label'
    },
    hash: {
      type: String,
      required: true
    },
    lastUsed: Date,
    expireAt: {
      type: Date,
      expires: -1
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Token', tokenSchema);
