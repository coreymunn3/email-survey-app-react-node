const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = require('../models/Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

router.get('/', async (req, res) => {
  // query mongo for survey documents where user id is _user
  // res.json that data
  res.send('Implement This');
});

router.post('/', requireLogin, requireCredits, async (req, res) => {
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
  try {
    // send the email
    const template = surveyTemplate(survey);
    const mailer = new Mailer(survey, template);
    await mailer.send();
    // save the survey
    await survey.save();
    // subtract credits from user
    req.user.credits -= 1;
    await req.user.save();
    // send back survey
    res.json(survey);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
