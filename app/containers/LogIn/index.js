/**
 *
 * LogIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { Error } from 'components/common/Messages';
import PageTitle from 'components/common/PageTitle';

import {
  selectPassword,
  selectErrorMessage,
  selectSubmitFormState,
} from './selectors';

import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Wrapper } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidUpdate() {
    const {
      submitFormState,
      history,
      setErrorMessage,
      setPassword,
      resetSubmitFormState,
    } = this.props;
    const { formatMessage } = this.props.intl;

    //  The user submited an invalid password
    if (submitFormState.data === false) {
      setErrorMessage(formatMessage(messages.incorrect_password));
      //  reset the state of the request
      //  clean the password
      resetSubmitFormState();
      setPassword('');
    }

    //  Checks if the submit form is successful
    //  If so redirect to the homepage
    if (submitFormState.data === true) {
      history.push('/');
    }
  }

  validatePassword(password) {
    const { setErrorMessage } = this.props;
    const { formatMessage } = this.props.intl;

    if (!password) {
      setErrorMessage(formatMessage(messages.missing_information));
      return false;
    }

    if (password.length < 8) {
      setErrorMessage(formatMessage(messages.invalid_length));
      return false;
    }

    return !!password;
  }

  handleSetPassword(evt) {
    const { setPassword, setErrorMessage } = this.props;
    const { value } = evt.target;
    setErrorMessage(null);
    setPassword(value);
  }

  handleSubmitForm(evt) {
    evt.preventDefault();
    const { submitForm, password } = this.props;
    const valid = this.validatePassword(password);
    if (valid) {
      submitForm(password);
    }
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;

    if (!errorMessage) {
      return null;
    }

    return <Error>{errorMessage}</Error>;
  }

  render() {
    const { password } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <Wrapper>
        <PageTitle>
          <FormattedMessage {...messages.header} />
        </PageTitle>
        <form onSubmit={this.handleSubmitForm}>
          <Input
            value={password || ''}
            onChange={this.handleSetPassword}
            placeholder={formatMessage(messages.password)}
          />

          {this.renderErrorMessage()}

          <Button type="submit">
            <FormattedMessage {...messages.submit} />
          </Button>
        </form>
      </Wrapper>
    );
  }
}

LogIn.propTypes = {
  intl: intlShape.isRequired,
  history: PropTypes.object.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  setErrorMessage: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  submitFormState: PropTypes.object.isRequired,
  resetSubmitFormState: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: selectPassword(),
  errorMessage: selectErrorMessage(),
  submitFormState: selectSubmitFormState(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'logIn', reducer });
const withSaga = injectSaga({ key: 'logIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(LogIn));
