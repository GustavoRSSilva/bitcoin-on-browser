/*
 * LogIn Messages
 *
 * This contains all the text for the LogIn component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.LogIn.header',
    defaultMessage: 'This is LogIn container !',
  },
  app_title: {
    id: 'app.containers.LogIn.app_title',
    defaultMessage: 'Bitcoin on browser',
  },
  password: {
    id: 'app.containers.LogIn.password',
    defaultMessage: 'Password',
  },
  submit: {
    id: 'app.containers.LogIn.submit',
    defaultMessage: 'Submit',
  },
  missing_information: {
    id: 'app.containers.LogIn.missing_information',
    defaultMessage: 'Missing required input',
  },
  invalid_length: {
    id: 'app.containers.LogIn.invalid_length',
    defaultMessage: 'Password has to have at least 8 characters',
  },
  incorrect_password: {
    id: 'app.containers.LogIn.incorrect_password',
    defaultMessage: 'Incorrect password',
  },
});
