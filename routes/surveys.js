const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = require('../models/Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

router.get('/', (req, res) => res.send('hello from surveys'));

router.post('/', requireLogin, requireCredits, (req, res) => {
  // construct the survey
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: new Date(),
  });
  // send the email
  const template = surveyTemplate(survey);
  const mailer = new Mailer(survey, template);
  mailer.send();
  res.send('Email Sent');
});

module.exports = router;
