/*
 *
 * Receive actions
 *
 */
import { fetchActiveAddress } from 'containers/App/actions';
import { SET_FORM_VALUES } from './constants';

function setFormValue(payload) {
  return {
    type: SET_FORM_VALUES,
    payload,
  };
}

export { fetchActiveAddress, setFormValue };
