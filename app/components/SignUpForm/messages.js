/*
 * SignUpForm Messages
 *
 * This contains all the text for the SignUpForm component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SignUpForm.header',
    defaultMessage: 'This is the SignUpForm component !',
  },
  new_password: {
    id: 'app.containers.SignUpForm.new_password',
    defaultMessage: 'New Password',
  },
  new_password_rules: {
    id: 'app.containers.SignUpForm.new_password_rules',
    defaultMessage: 'New Password (min 8 chars)',
  },
  confirm_password: {
    id: 'app.containers.SignUpForm.password',
    defaultMessage: 'Confirm Password',
  },
  submit: {
    id: 'app.containers.SignUp.submit',
    defaultMessage: 'Submit',
  },
});
