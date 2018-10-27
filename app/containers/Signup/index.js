/**
 *
 * SignUp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import * as actions from './actions';

import { selectPassword, selectConfirmPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Title } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.handleSetConfirmPassword = this.handleSetConfirmPassword.bind(this);
  }

  handleSetPassword(evt) {
    const { setPassword } = this.props;
    const { value } = evt.target;
    setPassword(value);
  }

  handleSetConfirmPassword(evt) {
    const { setConfirmPassword } = this.props;
    const { value } = evt.target.value;
    setConfirmPassword(value);
  }

  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...messages.app_title} />
        </Title>
      </div>
    );
  }
}

SignUp.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: selectPassword(),
  confirmPassword: selectConfirmPassword(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUp);
