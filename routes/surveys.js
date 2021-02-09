const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = require('../models/Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');

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

// For Sendgrid, displayed when user responds to an email.
// remove later
router.get('/feedback', (req, res) => {
  res.send('Thanks for Voting! Your response has been recorded.');
});

router.post('/webhooks', (req, res) => {
  // map over body of request to pull out meaningful survey data
  const events = _.map(req.body, ({ email, url }) => {
    if (url) {
      // extract pathname from url in webhook event
      const pathname = new URL(url).pathname;
      // extract path params from pathname
      const p = new Path('/api/surveys/:surveyId/:choice');
      const match = p.test(pathname);
      if (match) {
        return {
          ...match,
          email,
        };
      }
    }
  });
  // remove non-click events
  const compactEvents = _.compact(events);
  // remove duplicate events
  const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');
  console.log(uniqueEvents);
  // respond
  res.send({});
});

module.exports = router;
