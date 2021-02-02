const sg = require('sendgrid');
const helper = sg.mail;
const keys = require('../config/keys');

// Documentation for this method available at
// https://www.npmjs.com/package/sendgrid

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, template) {
    super();

    this.from_email = new helper.Email('coreymunnrealestate@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', template);
    this.addContent(this.body);
    // recipients is an array of emails
    this.recipients = this.formatAddresses(recipients);
    // enable click-tracking
    this.addClickTracking();
    // add recipients to mailer
    this.addRecipients();
    // initialize sendgrid api
    this.sgApi = sg(keys.SENDGRID_KEY);
  }
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((rec) => {
      personalize.addTo(rec);
    });
    this.addPersonalization(personalize);
  }
  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
