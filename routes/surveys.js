const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = require('../models/Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { Path } = require('path-parser');
const { URL } = require('url');

router.get('/', requireLogin, async (req, res) => {
  try {
    const userSurveys = await Survey.find(
      { _user: req.user },
      { recipients: 0 }
    );
    res.status(200).json(userSurveys);
  } catch (error) {
    res.status(404);
  }
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
router.get('/:surveyId/:choice', (req, res) => {
  res.send('Thanks for Voting! Your response has been recorded.');
});

router.post('/webhooks', (req, res) => {
  // define path params from pathname
  const p = new Path('/api/surveys/:surveyId/:choice');
  // map over body of request to pull out meaningful survey data
  const events = req.body
    .map(({ email, url }) => {
      if (url) {
        // extract pathname from url in webhook event & match
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            ...match,
            email,
          };
        }
      }
    })
    // remove undefined events
    .filter((event) => event !== undefined);
  // console.log(events);

  // update in MongoDB
  events.forEach(({ surveyId, choice, email }) => {
    Survey.updateOne(
      {
        _id: surveyId,
        recipients: {
          $elemMatch: { email: email, responded: false },
        },
      },
      {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.responded': true },
        lastResponded: new Date(),
      }
    ).exec();
  });

  // respond
  res.send({});
});

router.get('/:surveyId', async (req, res) => {
  const id = req.params.surveyId;
  try {
    const survey = await Survey.findOne({ _id: id }).exec();
    res.json(survey);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

module.exports = router;
