/*
 *
 * HomePage actions
 *
 */

import {
  fetchNetwork,
  fetchUserCreated,
  fetchSessionValid,
  fetchActiveAddress,
  changeNetwork,
  fetchEstimatedFees,
} from 'containers/App/actions';
import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export {
  fetchNetwork,
  fetchSessionValid,
  fetchUserCreated,
  fetchActiveAddress,
  changeNetwork,
  fetchEstimatedFees,
};
