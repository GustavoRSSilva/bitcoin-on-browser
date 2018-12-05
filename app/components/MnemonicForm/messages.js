/*
 * MnemonicForm Messages
 *
 * This contains all the text for the MnemonicForm component.
 */

import { defineMessages } from 'react-intl';
import {
  TWELVE_WORDS_MNEMONIC,
  FITHTEEN_WORDS_MNEMONIC,
  EIGHTEEN_WORDS_MNEMONIC,
  TWENTY_ONE_WORDS_MNEMONIC,
  TWENTY_FOUR_WORDS_MNEMONIC,
} from 'utils/constants';

export default defineMessages({
  header: {
    id: 'app.components.MnemonicForm.header',
    defaultMessage: 'This is the MnemonicForm component !',
  },
  generate_new_mnemonic: {
    id: 'app.containers.MnemonicForm.generate_new_mnemonic',
    defaultMessage: 'New',
  },
  save: {
    id: 'app.containers.MnemonicForm.save',
    defaultMessage: 'Save',
  },
  mnemonic: {
    id: 'app.containers.MnemonicForm.mnemonic',
    defaultMessage: 'Mnemonic',
  },
  [TWELVE_WORDS_MNEMONIC]: {
    id: 'app.containers.MnemonicForm.TWELVE_WORDS_MNEMONIC',
    defaultMessage: '12 Words',
  },
  [FITHTEEN_WORDS_MNEMONIC]: {
    id: 'app.containers.MnemonicForm.FITHTEEN_WORDS_MNEMONIC',
    defaultMessage: '15 Words',
  },
  [EIGHTEEN_WORDS_MNEMONIC]: {
    id: 'app.containers.MnemonicForm.EIGHTEEN_WORDS_MNEMONIC',
    defaultMessage: '18 Words',
  },
  [TWENTY_ONE_WORDS_MNEMONIC]: {
    id: 'app.containers.MnemonicForm.TWENTY_ONE_WORDS_MNEMONIC',
    defaultMessage: '21 Words',
  },
  [TWENTY_FOUR_WORDS_MNEMONIC]: {
    id: 'app.containers.MnemonicForm.TWENTY_FOUR_WORDS_MNEMONIC',
    defaultMessage: '24 Words',
  },
});
