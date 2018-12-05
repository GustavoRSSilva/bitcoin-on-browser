/**
 *
 * MnemonicForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import TextField from 'components/common/TextField';
import Button from 'components/common/Button';

import { MnemonicFragment } from './styles';

import messages from './messages';

function MnemonicForm(props) {
  const {
    mnemonic,
    saveMnemonic,
    generateNewMnemonic,
    intl: { formatMessage },
  } = props;
  return (
    <form onSubmit={() => saveMnemonic(mnemonic)}>
      <MnemonicFragment>
        <TextField
          multiline
          disable
          value={mnemonic}
          label={formatMessage(messages.mnemonic)}
          onChange={() => null}
        />
      </MnemonicFragment>

      <Button onClick={() => generateNewMnemonic()} color="default">
        <FormattedMessage {...messages.generate_new_mnemonic} />
      </Button>
      <Button type="submit">
        <FormattedMessage {...messages.save} />
      </Button>
    </form>
  );
}

MnemonicForm.propTypes = {
  intl: intlShape.isRequired,
  mnemonic: PropTypes.string.isRequired,
  saveMnemonic: PropTypes.func.isRequired,
  generateNewMnemonic: PropTypes.func.isRequired,
};

export default injectIntl(MnemonicForm);
