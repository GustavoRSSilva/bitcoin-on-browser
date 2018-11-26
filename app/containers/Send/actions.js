/*
 *
 * Send actions
 *
 */

import { fetchActiveAddress } from 'containers/App/actions';
import {
  SET_FORM_VALUES,
  RESET_FORM_VALUES,
  SUBMIT_FORM,
  SUBMIT_FORM_REJECTED,
  SUBMIT_FORM_SUCCESSFUL,
} from './constants';

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

function submitForm(payload) {
  return {
    type: SUBMIT_FORM,
    payload,
  };
}

function submitFormRejected(payload) {
  return {
    type: SUBMIT_FORM_REJECTED,
    payload,
  };
}

function submitFormSuccessful(payload) {
  return {
    type: SUBMIT_FORM_SUCCESSFUL,
    payload,
  };
}

export {
  setFormValues,
  resetFormValues,
  fetchActiveAddress,
  submitForm,
  submitFormRejected,
  submitFormSuccessful,
};
