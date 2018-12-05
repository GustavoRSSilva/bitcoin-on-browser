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
import Select from 'components/common/Select';

import { AVAILABLE_WORDS_MNEMONIC } from 'utils/constants';

import { MnemonicFragment, SelectFragment } from './styles';

import messages from './messages';

function MnemonicForm(props) {
  const {
    mnemonic,
    saveMnemonic,
    generateNewMnemonic,
    numWordsMnemonic,
    handleChangeNumWordsMnemonic,
    intl: { formatMessage },
  } = props;

  return (
    <form onSubmit={() => saveMnemonic(mnemonic)}>
      <MnemonicFragment>
        <TextField
          multiline
          disable
          rows="6"
          value={mnemonic}
          label={formatMessage(messages.mnemonic)}
          onChange={() => null}
        />
      </MnemonicFragment>

      <SelectFragment>
        <Select
          value={numWordsMnemonic.toString()}
          onChange={handleChangeNumWordsMnemonic}
          margin="0 calc((100% - 120px) / 2)"
        >
          {AVAILABLE_WORDS_MNEMONIC.map(option => (
            <option key={option} value={option}>
              {formatMessage(messages[option])}
            </option>
          ))}
        </Select>
      </SelectFragment>

      <Button
        onClick={() => generateNewMnemonic(numWordsMnemonic)}
        color="default"
      >
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
  numWordsMnemonic: PropTypes.number.isRequired,
  handleChangeNumWordsMnemonic: PropTypes.func.isRequired,
};

export default injectIntl(MnemonicForm);
