/**
 *
 * Send
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

import CloseButton from 'components/common/CloseButton';
import SendAdvancedCard from 'components/SendAdvancedCard';

import { selectAddressUtxos } from 'containers/App/selectors';

import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Send extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeavePage = this.handleLeavePage.bind(this);
  }

  handleLeavePage() {
    const { history } = this.props;
    history.goBack();
  }

  renderCloseButton() {
    return <CloseButton onClick={this.handleLeavePage} />;
  }

  renderAdvanced(addressUtxos) {
    return <SendAdvancedCard utxos={addressUtxos} />;
  }

  render() {
    const { addressUtxos } = this.props;
    return (
      <div>
        {this.renderCloseButton()}
        <FormattedMessage {...messages.header} />
        {this.renderAdvanced(addressUtxos)}
      </div>
    );
  }
}

Send.propTypes = {
  history: PropTypes.object.isRequired,
  addressUtxos: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addressUtxos: selectAddressUtxos(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'send', reducer });
const withSaga = injectSaga({ key: 'send', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Send);
