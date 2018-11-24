/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import TextField from 'components/common/TextField';
import Button from 'components/common/Button';
import { Error } from 'components/common/Messages';

import messages from './messages';

function SignUpForm(props) {
  const {
    password,
    confirmPassword,
    handleSubmitForm,
    handleSetPassword,
    handleSetConfirmPassword,
    errorMessage,
  } = props;
  const { formatMessage } = props.intl;

  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        value={password || ''}
        onChange={handleSetPassword}
        placeholder={formatMessage(messages.new_password)}
      />
      <TextField
        value={confirmPassword || ''}
        onChange={handleSetConfirmPassword}
        placeholder={formatMessage(messages.confirm_password)}
      />

      <Error>{errorMessage}</Error>

      <Button type="submit">
        <FormattedMessage {...messages.submit} />
      </Button>
    </form>
  );
}

SignUpForm.propTypes = {
  intl: intlShape.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  handleSetPassword: PropTypes.func.isRequired,
  handleSetConfirmPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default injectIntl(SignUpForm);
