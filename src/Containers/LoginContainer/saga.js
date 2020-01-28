/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
// import { repoLoadingError } from 'containers/App/actions';

import request from '../../utils/request';

import { LOGIN_ACTION } from './constants';
import { loginRequestSuccess } from './actions';
/**
 * Github repos request/response handler
 */

export function* loginUser(action) {
  // Select username from store
  document.getElementById('loadingIndicator').style.display = 'flex';
  const requestURL = '';
  const userObj = {
    password: action.payload.password,
    username: action.payload.userId,
    "expirationTime": '1800',
  }
  const requestAttrs = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  }
  try {
    // Call our request helper (see 'utils/request')

    const loginResponse = yield call(request, requestURL, requestAttrs);
    document.getElementById('loadingIndicator').style.display = 'none';
    // yield put(loginRequestSuccess(loginResponse));

  } catch (err) {
    document.getElementById('loadingIndicator').style.display = 'none';
    if (err.response.status == "403") {
      // yield put(requestLoginFail(err.response.status));
      console.log("403 failure")
    }
    else {
      // yield put(requestServiceFailed(err.response.status));
    }

  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* cfmData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_ACTION, loginUser);
}
