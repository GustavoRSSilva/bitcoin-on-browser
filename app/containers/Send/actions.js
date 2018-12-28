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
  RESET_SUBMIT_FORM,
  SET_AVAIALABLE_AMOUNT_SATOSHIS,
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

function resetSubmitForm() {
  return {
    type: RESET_SUBMIT_FORM,
  };
}

function setAvaialableAmount(payload) {
  return {
    type: SET_AVAIALABLE_AMOUNT_SATOSHIS,
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
  resetSubmitForm,
  setAvaialableAmount,
};
