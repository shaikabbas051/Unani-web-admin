/**
 * Homepage selectors
 */

import { createSelector } from "reselect";

const selectLogin = state => state.get("login");

const LoginSelector = () =>
  createSelector(selectLogin, loginState => {
    if (loginState) {
      return loginState.toJS();
    } else {
      return null;
    }
  });

export { selectLogin, LoginSelector };
