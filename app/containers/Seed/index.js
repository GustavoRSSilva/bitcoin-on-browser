/**
 *
 * Seed
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSeed from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Seed extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Seed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  seed: makeSelectSeed(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'seed', reducer });
const withSaga = injectSaga({ key: 'seed', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Seed);
