const keys = require('../../config/keys');

module.exports = (survey) => {
  const { body } = survey;
  return `
  <html>
    <body>
      <div style='text-align: center'>
        <h3>I'd like your input!</h3>
        <p>Please answer the following questions:</p>
        <p>${survey.body}</p>
        <div>
          <a href='${keys.EMAIL_REDIRECT_DOMAIN}/api/surveys/feedback'>Yes</a>
        </div>
        <div>
          <a href='${keys.EMAIL_REDIRECT_DOMAIN}/api/surveys/feedback'>No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
