/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
// import { repoLoadingError } from 'containers/App/actions';

import request from '../../utils/request';

import {  } from './constants';
import {  } from './actions';
/**
 * Github repos request/response handler
 */


/**
 * Root saga manages watcher lifecycle
 */
export default function* cfmData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
}
