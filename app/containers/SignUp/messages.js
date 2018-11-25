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
  missing_information: {
    id: 'app.containers.SignUpForm.missing_information',
    defaultMessage: 'Missing required input',
  },
  invalid_length: {
    id: 'app.containers.SignUpForm.invalid_length',
    defaultMessage: 'Password has to have at least 8 characters',
  },
  passwords_do_not_match: {
    id: 'app.containers.SignUpForm.passwords_do_not_match',
    defaultMessage: 'Passwords do not match',
  },
});
