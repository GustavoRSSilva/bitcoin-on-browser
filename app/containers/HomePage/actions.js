/*
 *
 * HomePage actions
 *
 */

import { fetchUserCreated, fetchSessionValid } from 'containers/App/actions';
import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export { fetchSessionValid, fetchUserCreated };
