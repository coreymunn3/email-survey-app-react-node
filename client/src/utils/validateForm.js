import validateEmails from './validateEmails';

const validateForm = (values) => {
  const errors = {};
  // check title exists
  if (!values.title) {
    errors.title = 'You must provide an email title';
  }
  // check subject exists
  if (!values.subject) {
    errors.subject = 'You must provide an email subject';
  }
  // check body exists
  if (!values.body) {
    errors.body = 'You must provide an email body';
  }
  // check recipients exist
  if (!values.recipients) {
    errors.recipientsExist = 'You must provide at least one email recipients';
  }
  // check recipient emails formatted
  const invalidEmails = validateEmails(values.recipients || '');
  if (invalidEmails && values.recipients) {
    errors.recipientsFormatted = invalidEmails;
  }
  return errors;
};

export default validateForm;
