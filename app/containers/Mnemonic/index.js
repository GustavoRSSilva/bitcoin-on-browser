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

import PageTitle from 'components/common/PageTitle';
import MnemonicForm from 'components/MnemonicForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as actions from './actions';
import {
  selectMnemonicString,
  selectSaveMnemonicState,
  selectNumWordsMnemonic,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Wrapper } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class Mnemonic extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeNumWordsMnemonic = this.handleChangeNumWordsMnemonic.bind(
      this,
    );
  }

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

  handleChangeNumWordsMnemonic(evt) {
    const { generateNewMnemonic, setNumWordsMnemonic } = this.props;
    const { value } = evt.target;
    const numWords = parseInt(value, 10);
    generateNewMnemonic(numWords);
    setNumWordsMnemonic(numWords);
  }

  render() {
    const {
      mnemonic,
      generateNewMnemonic,
      saveMnemonic,
      numWordsMnemonic,
    } = this.props;

    return (
      <Wrapper>
        <PageTitle>
          <FormattedMessage {...messages.header} />
        </PageTitle>
        <MnemonicForm
          mnemonic={mnemonic}
          generateNewMnemonic={generateNewMnemonic}
          saveMnemonic={saveMnemonic}
          numWordsMnemonic={numWordsMnemonic}
          handleChangeNumWordsMnemonic={this.handleChangeNumWordsMnemonic}
        />
      </Wrapper>
    );
  }
}

Mnemonic.propTypes = {
  history: PropTypes.object.isRequired,
  mnemonic: PropTypes.string,
  generateNewMnemonic: PropTypes.func.isRequired,
  saveMnemonic: PropTypes.func.isRequired,
  saveMnemonicState: PropTypes.object.isRequired,
  numWordsMnemonic: PropTypes.number.isRequired,
  setNumWordsMnemonic: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mnemonic: selectMnemonicString(),
  saveMnemonicState: selectSaveMnemonicState(),
  numWordsMnemonic: selectNumWordsMnemonic(),
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
