/*
 * SignUp Messages
 *
 * This contains all the text for the SignUp component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.SignUp.header',
    defaultMessage: 'Sign Up',
  },
  new_password: {
    id: 'app.containers.SignUp.password',
    defaultMessage: 'New Password (min 8 chars)',
  },
  confirm_password: {
    id: 'app.containers.SignUp.password',
    defaultMessage: 'Confirm Password',
  },
  submit: {
    id: 'app.containers.SignUp.submit',
    defaultMessage: 'Submit',
  },
  missing_information: {
    id: 'app.containers.SignUp.missing_information',
    defaultMessage: 'Missing required input',
  },
  invalid_length: {
    id: 'app.containers.SignUp.invalid_length',
    defaultMessage: 'Password has to have at least 8 characters',
  },
  passwords_do_not_match: {
    id: 'app.containers.SignUp.passwords_do_not_match',
    defaultMessage: 'Passwords do not match',
  },
});
