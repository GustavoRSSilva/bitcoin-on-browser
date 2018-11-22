/*
 *
 * Receive actions
 *
 */
import { fetchActiveAddress } from 'containers/App/actions';
import { SET_FORM_VALUES, RESET_FORM_VALUES } from './constants';

function resetFormValues() {
  return {
    type: RESET_FORM_VALUES,
  };
}

function setFormValues(payload) {
  return {
    type: SET_FORM_VALUES,
    payload,
  };
}

export { fetchActiveAddress, setFormValues, resetFormValues };
