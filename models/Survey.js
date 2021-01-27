const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');

const surveySchema = mongoose.Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model('surveys', surveySchema);
