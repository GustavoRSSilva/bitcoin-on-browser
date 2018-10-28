/**
 *
 * LogIn
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import * as actions from './actions';
import { selectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Title } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetPassword = this.handleSetPassword.bind(this);
  }

  handleSetPassword(evt) {
    const { setPassword } = this.props;
    const { value } = evt.target.value;
    setPassword(value);
  }

  render() {
    const { password } = this.props;
    return (
      <Fragment>
        <Title>
          <FormattedMessage {...messages.app_title} />
        </Title>
        <input value={password} onChange={this.handleSetPassword} />
      </Fragment>
    );
  }
}

LogIn.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: selectPassword(),
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
)(LogIn);
