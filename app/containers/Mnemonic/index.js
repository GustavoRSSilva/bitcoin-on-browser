/**
 *
 * Mnemonic
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as actions from './actions';
import { selectMnemonicString, selectSaveMnemonicState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Title, MnemonicFragment } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class Mnemonic extends React.Component {
  componentWillMount() {
    const { generateNewMnemonic } = this.props;
    //  TODO: fetch Mnemonic
    const mnemonic = null;
    //  If no mnemonic generate a new one
    if (!mnemonic) {
      generateNewMnemonic();
    }
  }

  componentDidUpdate() {
    const { saveMnemonicState, history } = this.props;
    //  Checks if the mnemonic was successfuly save,
    //  If so redirect to the homepage
    if (saveMnemonicState.data === true) {
      history.push('/');
    }
  }

  render() {
    const { mnemonic, generateNewMnemonic, saveMnemonic } = this.props;

    return (
      <div>
        <Title>
          <FormattedMessage {...messages.app_title} />
        </Title>
        <MnemonicFragment>
          <TextArea rows="4" readOnly value={mnemonic} />
        </MnemonicFragment>

        <Button onClick={() => generateNewMnemonic()}>
          <FormattedMessage {...messages.generate_new_mnemonic} />
        </Button>
        <Button onClick={() => saveMnemonic(mnemonic)}>
          <FormattedMessage {...messages.save} />
        </Button>
      </div>
    );
  }
}

Mnemonic.propTypes = {
  history: PropTypes.object.isRequired,
  mnemonic: PropTypes.string,
  generateNewMnemonic: PropTypes.func.isRequired,
  saveMnemonic: PropTypes.func.isRequired,
  saveMnemonicState: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mnemonic: selectMnemonicString(),
  saveMnemonicState: selectSaveMnemonicState(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mnemonic', reducer });
const withSaga = injectSaga({ key: 'mnemonic', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Mnemonic);
